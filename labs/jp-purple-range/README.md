# JP Purple Range

A local, authorized learning lab for web red-team fundamentals and detection engineering. The first exercise pairs OWASP Juice Shop with a small detector that runs against synthetic authentication events.

## Safety boundary

- The only target in scope is the local Juice Shop container at `http://127.0.0.1:3000`.
- The Compose file binds the service to loopback and places it on an internal Docker network.
- Use only disposable demo accounts and data. Do not add real credentials or personal data.
- Do not scan, attack, or test any host outside the local lab. Do not run load, brute-force, persistence, or destructive tests.
- Stop the lab with `docker compose down` when finished.
- Keep the vulnerable application local. Publish only sanitized notes and synthetic evidence.

## Start the target

From this directory:

```powershell
docker compose up -d
```

Open `http://127.0.0.1:3000` in a browser. The container image is maintained by the OWASP Juice Shop project; Docker may need to download it the first time.

To stop and remove the container:

```powershell
docker compose down
```

## Exercise 1: observe, test, explain, retest

1. Read the scope and rules above before starting.
2. Pick one beginner authentication or access-control challenge from the [official Juice Shop companion guide](https://pwning.owasp-juice.shop/).
3. Record the initial hypothesis, the authorized steps you tried, the evidence, and the impact in `exercise-01.md`.
4. Explain the control that would prevent or detect the issue, then repeat the exercise to confirm the outcome changed.
5. Keep screenshots free of real data. Do not publish solution flags, secrets, or challenge answers.

## Detection starter

`samples/auth-events.jsonl` contains synthetic events from the reserved documentation address range. Run the standard-library detector:

```powershell
python scripts/analyze_auth_failures.py
```

It looks for at least five failed authentications from one source within five minutes. The sample output is a demonstration of the detection logic; it is not telemetry collected from Juice Shop or any employer environment.

## Portfolio evidence to add after completing the exercise

- A simple architecture and scope diagram.
- A short report with objective, authorization boundary, method, evidence, impact, remediation, and retest result.
- Detection logic, test fixtures, and measured false-positive behavior.
- A brief demo using only the local lab and synthetic data.

Label each item as simulated or observed. Do not invent performance metrics.

## Later phase

After the web exercise, add a separate disposable Windows VM and a small number of reviewed, low-impact [Atomic Red Team tests](https://www.atomicredteam.io/docs/atomic-red-team). Select tests deliberately, understand their effects, and keep all execution inside the VM. Do not run the whole test library or expose a command-and-control service publicly.
