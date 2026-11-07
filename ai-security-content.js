/* Original independent study material. Source mapping reviewed 2026-11-06. */
window.AI_SECURITY_COURSE = {
  "domains": [
    [
      "AI concepts & security foundations",
      10
    ],
    [
      "Governance, ethics, risk & compliance",
      17
    ],
    [
      "Data, privacy & model security",
      19
    ],
    [
      "Architecture, engineering & IAM",
      18
    ],
    [
      "Operations & incident response",
      19
    ],
    [
      "Threats, testing & lifecycle",
      17
    ]
  ],
  "lessons": [
    {
      "id": 1,
      "domain": 1,
      "title": "Follow the data, then the decision",
      "goal": "Explain how an AI assistant produces an answer and where security controls belong.",
      "teach": [
        "A traditional classifier assigns a label from learned patterns. A generative model produces new output. Neither automatically verifies whether its result is true or authorized.",
        "In a retrieval workflow, a search component selects reference passages and the model receives them as context. Those passages can be stale, malicious, or inappropriate for the requesting user.",
        "Draw the full path: person, application, retrieval service, model, tool, downstream system. At every crossing, identify who authorizes access and what data can leave."
      ],
      "example": "A help-desk assistant finds an old runbook that recommends disabling MFA. A fluent answer is insufficient evidence that the recommendation is safe.",
      "lab": "Draw a synthetic help-desk assistant. Label five components, three trust boundaries, and the control enforcing each boundary.",
      "rubric": "Include user authentication, document-level authorization, and independent authorization before a tool changes an account.",
      "questions": [
        {
          "q": "A support chatbot cites a document the employee cannot open directly. Which control addresses the underlying failure?",
          "answers": [
            "Enforce the employee’s document permissions during retrieval",
            "Increase the answer length",
            "Use a larger context window",
            "Ask the model to be discreet"
          ],
          "why": "Retrieval must respect the requesting identity. More context or a prompt does not establish authorization."
        },
        {
          "q": "A model gives a confident but fabricated policy citation. What should the analyst do?",
          "answers": [
            "Verify the citation against an authoritative source before acting",
            "Treat confidence as evidence",
            "Publish it because it sounds precise",
            "Assume a larger model cannot fabricate"
          ],
          "why": "Generated language is a proposal to verify. Confidence and specificity do not establish correctness."
        },
        {
          "q": "Where should permission to disable an account be enforced?",
          "answers": [
            "In the tool or service that performs the account change",
            "Only in the assistant’s system prompt",
            "In the model’s explanation",
            "In the retrieved document"
          ],
          "why": "The downstream service must enforce authorization even when the model makes an unsafe request."
        }
      ]
    },
    {
      "id": 2,
      "domain": 1,
      "title": "Measure usefulness without hiding failure",
      "goal": "Choose evidence that reflects the consequences of model errors.",
      "teach": [
        "Accuracy alone can hide failures in rare but costly cases. Evaluate false positives, false negatives, and the impact of each on the intended workflow.",
        "Keep an evaluation set separate from training and tuning. Include ordinary cases, difficult edge cases, and representative operating conditions.",
        "Establish a baseline and review failures after changes. A score measured before a new model or retrieval corpus is introduced does not validate the changed system."
      ],
      "example": "A triage assistant catches common spam but misses a small group of high-impact account takeover alerts. Its overall accuracy looks strong while its operational risk remains high.",
      "lab": "Create ten fictional alert outcomes and define which missed cases require mandatory human review.",
      "rubric": "Name the harmful error, its business impact, the measurement, and the escalation threshold.",
      "questions": [
        {
          "q": "An alert model performs well overall but misses most privileged-account compromises. What is the best next evaluation?",
          "answers": [
            "Measure detection performance on privileged-account cases and assess impact",
            "Report only overall accuracy",
            "Remove privileged-account cases",
            "Reduce the test set"
          ],
          "why": "Aggregate metrics can conceal concentrated risk in critical subsets."
        },
        {
          "q": "An engineer tunes prompts against the final test questions repeatedly. What is the concern?",
          "answers": [
            "The final test no longer provides an independent estimate of performance",
            "The prompts become encrypted",
            "The model has gained authorization",
            "The test is necessarily more representative"
          ],
          "why": "Repeated tuning to the test set can overfit the evaluation. Reserve a separate holdout set."
        },
        {
          "q": "After replacing the model, which result supports release?",
          "answers": [
            "A fresh evaluation against defined acceptance criteria",
            "The previous model’s score",
            "Vendor popularity",
            "A successful single demonstration"
          ],
          "why": "A changed component requires evaluation of the resulting system against its use-case requirements."
        }
      ]
    },
    {
      "id": 3,
      "domain": 2,
      "title": "Make an accountable release decision",
      "goal": "Turn an AI use case into a documented risk decision.",
      "teach": [
        "Start with the business purpose, affected people, data, and allowed actions. Assign an accountable owner before selecting controls.",
        "Risk includes harm to people and operations. Compare proposed benefits with plausible failure conditions, existing safeguards, and remaining exposure.",
        "Record approval conditions, exceptions, review dates, and events that reopen the decision. A material change should trigger reassessment."
      ],
      "example": "A recruiting assistant ranks applicants. Review must consider how errors affect different groups, how decisions can be challenged, and who can override the ranking.",
      "lab": "Write a one-page approval record for a fictional internal assistant: owner, purpose, affected people, risk, control, residual risk, and review trigger.",
      "rubric": "A named decision-maker accepts the remaining risk and an explicit change trigger reopens review.",
      "questions": [
        {
          "q": "A team wants to release an AI system without an accountable owner. What should happen first?",
          "answers": [
            "Assign ownership and define the approved purpose and risk decision",
            "Start collecting more personal data",
            "Approve based on the vendor logo",
            "Skip governance for internal tools"
          ],
          "why": "Controls need accountable ownership, a defined use case, and a decision process."
        },
        {
          "q": "A previously read-only assistant gains the ability to approve refunds. What is required?",
          "answers": [
            "Reassess risk and approval conditions for the new action capability",
            "Keep the old review because the model is unchanged",
            "Only update the color scheme",
            "Remove decision logs"
          ],
          "why": "The changed consequences and authority alter the use case even if model weights stay the same."
        },
        {
          "q": "Which record best supports accountability?",
          "answers": [
            "An approval record naming the owner, conditions, residual risk, and review date",
            "A screenshot of the chatbot",
            "A model popularity ranking",
            "An undated verbal assurance"
          ],
          "why": "A decision record makes responsibility and conditions reviewable."
        }
      ]
    },
    {
      "id": 4,
      "domain": 2,
      "title": "Review vendors and human oversight",
      "goal": "Identify what a provider agreement and human review must actually cover.",
      "teach": [
        "A provider assessment should trace submitted data, storage, subprocessors, retention, training use, deletion, and incident handling. Marketing claims alone do not establish control effectiveness.",
        "Human review needs meaningful authority, usable evidence, and enough time to intervene. A rubber-stamp approval adds little protection.",
        "Risk frameworks can organize the review, but they do not replace applicable legal analysis. Escalate jurisdiction-specific obligations to qualified reviewers."
      ],
      "example": "A vendor promises private AI but retains request logs for troubleshooting. The organization must understand the actual handling terms and verify whether they meet its requirements.",
      "lab": "Write six vendor questions and a human approval rule for an assistant drafting customer messages.",
      "rubric": "Cover retention, training use, access, subprocessors, deletion, incident notice, and an authorized reviewer before sending.",
      "questions": [
        {
          "q": "A provider says customer data is private. Which evidence is most useful before approval?",
          "answers": [
            "Documented data handling terms and evidence of relevant controls",
            "A polished demo",
            "A high token limit",
            "An informal claim by another user"
          ],
          "why": "Determine what the provider actually does with the data and how the required controls are supported."
        },
        {
          "q": "Which approval workflow provides meaningful human oversight?",
          "answers": [
            "A reviewer can inspect evidence, reject the action, and stop execution",
            "An approval button clicked after the message is sent",
            "An automatically checked approval box",
            "A warning hidden in a log"
          ],
          "why": "Oversight must occur while intervention can still change the outcome."
        },
        {
          "q": "Who should resolve uncertainty about cross-border legal obligations?",
          "answers": [
            "Qualified legal and privacy reviewers using the actual data flow and jurisdictions",
            "The model acting alone",
            "A benchmark leaderboard",
            "A random online comment"
          ],
          "why": "Legal applicability depends on facts and jurisdiction; a generic framework cannot determine it alone."
        }
      ]
    },
    {
      "id": 5,
      "domain": 3,
      "title": "Protect data before and after retrieval",
      "goal": "Design privacy controls for a realistic knowledge assistant.",
      "teach": [
        "Collect only what the task needs and classify it before ingestion. Track origin, allowed purposes, and how access or deletion changes propagate to derived stores.",
        "Embeddings and indexes require protection too. Transforming text into a numeric representation does not establish that it is anonymous or harmless.",
        "Protect logs, caches, exports, and backups alongside the source. Restrict raw content access and choose retention periods deliberately."
      ],
      "example": "A hospital training bot uses fictional patient notes. Even in a lab, the design specifies where future sensitive data would be rejected or access-controlled.",
      "lab": "Map a fictional record across source, chunks, index, cache, and logs. Write the access and deletion check for each.",
      "rubric": "Include derived artifacts and explain how deletion is verified rather than merely requested.",
      "questions": [
        {
          "q": "A team stores embeddings from confidential documents in a public index. What is the correct assessment?",
          "answers": [
            "The index requires access controls and privacy review",
            "Embeddings are automatically anonymous",
            "Only the source files need protection",
            "Numeric data cannot reveal information"
          ],
          "why": "A representation derived from sensitive content still needs contextual privacy and access analysis."
        },
        {
          "q": "A document is deleted from the source repository. What should the assistant team verify?",
          "answers": [
            "Whether derived chunks, indexes, caches, and retained copies need removal or restriction",
            "Only that the original link is gone",
            "That the chatbot can still quote it",
            "That the user has refreshed the page"
          ],
          "why": "The data lifecycle includes downstream copies and artifacts, subject to applicable retention obligations."
        },
        {
          "q": "Which lab dataset best supports a privacy-safe exercise?",
          "answers": [
            "Purpose-built fictional records containing no real personal information",
            "A customer export with names hidden",
            "A production log copied into a prompt",
            "A real patient note with one field removed"
          ],
          "why": "Synthetic examples avoid unnecessary exposure; removing a single identifier does not establish anonymity."
        }
      ]
    },
    {
      "id": 6,
      "domain": 3,
      "title": "Trust the artifact you deploy",
      "goal": "Establish evidence of model and dataset integrity.",
      "teach": [
        "An artifact registry should record versions, origin, approvals, and dependencies. Restrict who can publish and deploy artifacts.",
        "A hash detects differences from a trusted reference. A signature can bind an artifact to a signer when the signer and verification chain are trusted. Neither proves that the model behaves safely.",
        "Verify both origin and behavior before release. Keep a known-good version and test that rollback restores compatible configuration and dependencies."
      ],
      "example": "A downloaded model matches its published hash but contains unsafe behavior. The hash confirms a match to that reference; it does not certify the model’s security.",
      "lab": "Create a release checklist covering artifact identity, trusted origin, behavior tests, approval, and rollback.",
      "rubric": "Explain the difference between checking bytes and validating behavior, and name the trusted rollback version.",
      "questions": [
        {
          "q": "A model hash matches an untrusted website’s published hash. What does this demonstrate?",
          "answers": [
            "Only that the artifact matches that reference",
            "That the model is safe",
            "That the publisher is authorized",
            "That training data was lawful"
          ],
          "why": "A hash comparison is only as meaningful as the trust in its reference and does not evaluate behavior."
        },
        {
          "q": "Who should be able to replace the approved model in production?",
          "answers": [
            "An authorized deployment identity subject to controlled release approval",
            "Any user who can chat with it",
            "Every developer’s personal account",
            "The model itself without a gate"
          ],
          "why": "Separate artifact publication and deployment authority and enforce a reviewable release process."
        },
        {
          "q": "What should a rollback test verify?",
          "answers": [
            "Restoration of a trusted model plus compatible configuration and dependencies",
            "Only that an old file exists",
            "Only that the UI loads",
            "That audit logging is disabled"
          ],
          "why": "A functioning recovery requires a coherent system state, not just an available model file."
        }
      ]
    },
    {
      "id": 7,
      "domain": 4,
      "title": "Give agents the authority they need",
      "goal": "Design tool access that cannot be expanded by generated text.",
      "teach": [
        "Use distinct workload identities and narrow, short-lived permissions. The requesting user’s authority and the agent’s permitted operations both matter.",
        "An assistant that explains invoices does not need permission to change bank details. Remove unnecessary tool functions and enforce access at the service boundary.",
        "Sensitive actions need explicit policy checks and, where appropriate, a human approval tied to the actual action parameters. Keep an attributable audit trail."
      ],
      "example": "An invoice assistant drafts a suggested correction. A separate approved workflow verifies the payee and amount before any financial change.",
      "lab": "Create a permission table for read invoice, draft response, change payee, and send payment. Assign identity, scope, and approval requirements.",
      "rubric": "Deny unused operations, avoid shared administrator credentials, and bind approval to the intended transaction.",
      "questions": [
        {
          "q": "An invoice explanation bot has permission to change bank details. What is the strongest improvement?",
          "answers": [
            "Remove unnecessary write capabilities and enforce narrow service permissions",
            "Add a polite system prompt",
            "Increase model temperature",
            "Keep admin access but hide the button"
          ],
          "why": "Limiting functions and permissions reduces the actions an unsafe model request can cause."
        },
        {
          "q": "A user approves a $20 refund, but the agent submits $2,000. Which control should reject it?",
          "answers": [
            "An execution check binding approval to the amount and recipient",
            "The model’s promise to be careful",
            "A longer answer",
            "The chat window title"
          ],
          "why": "Approval must apply to the specific action executed; changed parameters require a new decision."
        },
        {
          "q": "Which identity design best supports accountability?",
          "answers": [
            "Distinct attributable workload identities with scoped credentials",
            "A shared global administrator token",
            "An anonymous production endpoint",
            "Credentials embedded in retrieved text"
          ],
          "why": "Attributable identities and limited scopes support enforcement and investigation."
        }
      ]
    },
    {
      "id": 8,
      "domain": 4,
      "title": "Build boundaries around the model",
      "goal": "Apply layered controls to inputs, tools, and outputs.",
      "teach": [
        "Retrieved text and tool responses are data from a potentially hostile source. Keep them separate from trusted application instructions.",
        "Validate generated output for its destination. Use parameterized database access, constrained tool schemas, and safe rendering rather than treating generated text as executable code.",
        "Combine identity enforcement, network limits, isolation, budgets, and monitoring. A content filter alone cannot secure every downstream action."
      ],
      "example": "A document tells the assistant to send the entire knowledge base elsewhere. The application must reject unauthorized access and destinations even if the model follows the instruction.",
      "lab": "Threat-model a help-desk bot with search and ticket creation. Specify one prevention and one detection control for each boundary.",
      "rubric": "Include document permissions, structured tool inputs, output encoding, and destination restrictions.",
      "questions": [
        {
          "q": "A retrieved article instructs the assistant to upload internal files elsewhere. How should the system treat it?",
          "answers": [
            "As untrusted document content without authority to grant new permissions",
            "As an administrator instruction",
            "As a valid access token",
            "As a new user approval"
          ],
          "why": "Content from retrieval cannot authorize additional access or actions."
        },
        {
          "q": "The assistant generates a database query from a user question. Which execution design is strongest?",
          "answers": [
            "Use constrained, parameterized access with enforced permissions",
            "Execute arbitrary generated SQL as administrator",
            "Trust SQL if it has no spelling errors",
            "Remove audit logs"
          ],
          "why": "Validate the operation and enforce authorization independently of the model output."
        },
        {
          "q": "Why use layered controls around a model?",
          "answers": [
            "Different controls limit different failure paths and consequences",
            "A single keyword filter guarantees security",
            "Network boundaries verify factual accuracy",
            "Rate limits replace authentication"
          ],
          "why": "Security requires controls at multiple relevant boundaries; no single guardrail addresses every risk."
        }
      ]
    },
    {
      "id": 9,
      "domain": 5,
      "title": "Collect evidence you can investigate",
      "goal": "Design useful AI telemetry while controlling its privacy impact.",
      "teach": [
        "Capture request identifiers, caller identity, model and retrieval versions, tool decisions, outcomes, and timestamps. Make it possible to reconstruct the action path.",
        "Do not indiscriminately collect full prompts and responses. Minimize or redact sensitive content and restrict any raw evidence retained for a justified purpose.",
        "Alert on behavior that matters: unexpected destinations, unauthorized tool attempts, unusual data access, and significant changes from normal activity."
      ],
      "example": "An investigator uses a correlation ID to connect a user request, retrieved document version, attempted tool call, and authorization denial without exposing every prompt to every analyst.",
      "lab": "Design five synthetic log events for a denied data-export attempt. Include correlation and version information.",
      "rubric": "The events support a timeline while protecting sensitive content and showing the authorization result.",
      "questions": [
        {
          "q": "Which telemetry best reconstructs a tool action?",
          "answers": [
            "Correlated identity, request ID, versions, timestamps, decision, and outcome",
            "Only token count",
            "Only the final answer",
            "A screenshot without time"
          ],
          "why": "An investigation needs linked events showing who requested what, under which system state, and what happened."
        },
        {
          "q": "A team wants to log every raw customer prompt indefinitely. What is the strongest response?",
          "answers": [
            "Define justified fields and retention, minimize sensitive content, and restrict access",
            "Collect everything because it is security data",
            "Publish logs internally without limits",
            "Disable all telemetry"
          ],
          "why": "Useful monitoring and data minimization should be designed together."
        },
        {
          "q": "Which signal most directly merits investigation for a read-only assistant?",
          "answers": [
            "Attempts to invoke a payment-changing operation",
            "A longer greeting",
            "A different font",
            "A routine documented read"
          ],
          "why": "An attempted action outside the assistant’s role can indicate misuse or a control failure."
        }
      ]
    },
    {
      "id": 10,
      "domain": 5,
      "title": "Contain, preserve, and recover",
      "goal": "Respond to an assistant compromise without losing the evidence needed to understand it.",
      "teach": [
        "Confirm the affected identities, tools, data, and versions. Stop ongoing harmful actions with targeted controls while preserving relevant evidence.",
        "Containment may include revoking a tool credential or disabling an endpoint. Preserve logs and artifact references; follow the established incident authority and evidence process.",
        "Before restoration, fix the cause and test the failed boundary. Monitor recovery and assign follow-up actions with owners."
      ],
      "example": "A knowledge assistant begins exporting restricted documents. The team blocks the export path, revokes the affected credential, preserves the timeline, and investigates how access was granted.",
      "lab": "Write a six-step response card for a fictional unauthorized export, including containment authority and recovery criteria.",
      "rubric": "Address ongoing harm, evidence, scope, cause, clean restoration, and verification of the original failure.",
      "questions": [
        {
          "q": "An agent is actively sending restricted data through a compromised tool token. What action best addresses ongoing harm?",
          "answers": [
            "Revoke or restrict the affected token and block the export path under the response process",
            "Wait for a quarterly review",
            "Delete all logs first",
            "Only change the greeting"
          ],
          "why": "Targeted containment stops the active path while investigation and evidence preservation continue."
        },
        {
          "q": "Which evidence is most useful for scoping the incident?",
          "answers": [
            "The correlated event timeline, identities, tool actions, and deployed versions",
            "Only the latest model name",
            "An unrelated benchmark",
            "The application color palette"
          ],
          "why": "Scope depends on what occurred, under which identities and artifact versions."
        },
        {
          "q": "When should the affected assistant return to service?",
          "answers": [
            "After approved remediation and testing show the failed boundary is controlled",
            "As soon as the chat responds",
            "After deleting the incident ticket",
            "When the provider posts a reassuring message"
          ],
          "why": "Recovery requires verified corrective action and explicit restoration criteria."
        }
      ]
    },
    {
      "id": 11,
      "domain": 6,
      "title": "Test the system’s actual boundaries",
      "goal": "Design authorized tests that produce reproducible evidence.",
      "teach": [
        "Define scope, allowed methods, data, stop conditions, and success criteria before testing. Use isolated environments and fictional records.",
        "Test access and action boundaries across the entire workflow. Record the starting state, input, expected result, observed result, and evidence.",
        "A strange answer is not automatically a security exploit. Explain the crossed boundary and resulting impact; distinguish reliability problems from unauthorized effects."
      ],
      "example": "A test user asks about a fictional document belonging to another department. The expected result is no disclosure, including through summaries and citations.",
      "lab": "Draft three authorized tests: unauthorized retrieval, unwanted tool action, and resource exhaustion. State expected behavior and a stop condition.",
      "rubric": "Each test has a defined boundary, safe scope, reproducible input, and observable pass/fail criterion.",
      "questions": [
        {
          "q": "What should precede a red-team exercise against an AI service?",
          "answers": [
            "Written authorization, scope, stop conditions, and safe test data",
            "Testing random public users",
            "Disabling evidence collection",
            "Assuming public access grants permission"
          ],
          "why": "Testing requires explicit scope and authority, particularly when actions can affect real systems."
        },
        {
          "q": "An assistant invents a fictional city. What establishes a security finding?",
          "answers": [
            "Evidence of a security boundary violation or demonstrable security impact",
            "The output being surprising by itself",
            "The response being long",
            "The model being generative"
          ],
          "why": "Reliability defects can matter, but security severity must be tied to context and impact."
        },
        {
          "q": "Which finding is easiest for an engineer to reproduce?",
          "answers": [
            "A versioned setup, exact test input, expected result, observed result, and evidence",
            "A vague claim that AI is unsafe",
            "An unexplained severity number",
            "A screenshot of another system"
          ],
          "why": "Reproducible evidence lets another engineer validate both the issue and its fix."
        }
      ]
    },
    {
      "id": 12,
      "domain": 6,
      "title": "Make fixes survive the next release",
      "goal": "Validate changes and communicate the remaining risk.",
      "teach": [
        "Prioritize fixes by exposure, affected assets, likely impact, and available safeguards. Assign an owner and a verification condition.",
        "Turn each demonstrated failure into a regression case. Test ordinary behavior too, so a security change does not silently break the approved use case.",
        "Stage releases, observe results, and maintain rollback. Report what was tested, what changed, and where uncertainty or remaining exposure persists."
      ],
      "example": "After an access-control fix, the team repeats the original cross-department retrieval attempt and verifies that authorized department searches still work.",
      "lab": "Write a release decision for the fictional assistant. Include two regression checks, a rollback trigger, a risk owner, and one limitation.",
      "rubric": "Both unauthorized and authorized cases are tested; the release record states the evidence and remaining risk.",
      "questions": [
        {
          "q": "What is the best verification of an access-control fix?",
          "answers": [
            "Repeat the original unauthorized case and confirm authorized access still works",
            "Only check that code changed",
            "Only reread the system prompt",
            "Run an unrelated benchmark"
          ],
          "why": "Verification must demonstrate the failed boundary is fixed without breaking intended authorized behavior."
        },
        {
          "q": "A new model passes functional tests but causes unauthorized tool attempts in staging. What should the team do?",
          "answers": [
            "Hold release, investigate, and require security acceptance criteria to pass",
            "Release because it answers quickly",
            "Disable monitoring",
            "Treat staging evidence as irrelevant"
          ],
          "why": "A functional improvement does not justify bypassing unmet security requirements."
        },
        {
          "q": "Which release summary best supports a risk decision?",
          "answers": [
            "Test scope, evidence, changes, limitations, residual risk, and accountable owner",
            "A statement that the model is perfectly safe",
            "Only a vendor score",
            "A screenshot of the homepage"
          ],
          "why": "Decision-makers need evidence and limits rather than an unsupported guarantee."
        }
      ]
    }
  ]
};
