#!/usr/bin/env python3
"""Detect a burst of failed authentication events in the lab's JSONL sample."""

import argparse
import json
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path


def parse_timestamp(value: str) -> datetime:
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        raise ValueError("timestamps must include a timezone")
    return parsed


def load_failures(path: Path) -> dict[str, list[datetime]]:
    by_source: dict[str, list[datetime]] = defaultdict(list)
    with path.open(encoding="utf-8") as events_file:
        for line_number, line in enumerate(events_file, start=1):
            if not line.strip():
                continue
            try:
                event = json.loads(line)
                if event.get("event") != "authentication" or event.get("outcome") != "failure":
                    continue
                source = event["src_ip"]
                by_source[source].append(parse_timestamp(event["timestamp"]))
            except (json.JSONDecodeError, KeyError, TypeError, ValueError) as error:
                raise ValueError(f"invalid event on line {line_number}: {error}") from error
    for timestamps in by_source.values():
        timestamps.sort()
    return by_source


def detect_bursts(events: dict[str, list[datetime]], threshold: int, minutes: int) -> list[dict[str, object]]:
    window = timedelta(minutes=minutes)
    alerts = []
    for source, timestamps in sorted(events.items()):
        left = 0
        for right, current in enumerate(timestamps):
            while current - timestamps[left] > window:
                left += 1
            if right - left + 1 >= threshold:
                burst = timestamps[left : right + 1]
                alerts.append(
                    {
                        "rule": "authentication_failure_burst",
                        "severity": "medium",
                        "src_ip": source,
                        "failures": len(burst),
                        "window_minutes": minutes,
                        "first_seen": burst[0].isoformat(),
                        "last_seen": burst[-1].isoformat(),
                        "data_source": "synthetic_lab_events",
                    }
                )
                break
    return alerts


def main() -> None:
    project_root = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, default=project_root / "samples" / "auth-events.jsonl")
    parser.add_argument("--threshold", type=int, default=5)
    parser.add_argument("--window-minutes", type=int, default=5)
    args = parser.parse_args()
    if args.threshold < 1 or args.window_minutes < 1:
        parser.error("threshold and window-minutes must be positive")

    alerts = detect_bursts(load_failures(args.input), args.threshold, args.window_minutes)
    print(json.dumps({"alerts": alerts, "alert_count": len(alerts)}, indent=2))


if __name__ == "__main__":
    main()
