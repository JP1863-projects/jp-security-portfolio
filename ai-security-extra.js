/* 400 independently authored practice questions. Not official exam items. */
window.AI_SECURITY_EXTRA = [
  {
    "id": "ai-extra-1-001",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "A mail filter learns from messages labeled malicious or benign. Which learning approach is being used?",
    "answers": [
      "Supervised learning",
      "Unsupervised clustering",
      "Reinforcement learning",
      "Random sampling"
    ],
    "why": "Labeled examples provide target outcomes; clustering finds structure without those targets, while reinforcement learning uses rewards."
  },
  {
    "id": "ai-extra-1-002",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "Analysts need to group unfamiliar alerts without existing labels. Which approach best fits exploration?",
    "answers": [
      "Unsupervised clustering",
      "Supervised classification",
      "Reward-based policy optimization",
      "Manual signature matching only"
    ],
    "why": "Clustering can reveal similarity groups without labeled outcomes; analysts must still interpret the groups."
  },
  {
    "id": "ai-extra-1-003",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "An autonomous defender receives rewards for stopping attacks but starts disrupting legitimate traffic. What should change first?",
    "answers": [
      "Redesign rewards and constrain permitted actions",
      "Increase reward magnitude only",
      "Remove operational monitoring",
      "Treat reward as business value automatically"
    ],
    "why": "A poorly specified reward can incentivize harmful shortcuts; align objectives and enforce operational boundaries."
  },
  {
    "id": "ai-extra-1-004",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "A classifier trained on one company fails at another with different traffic. What should be evaluated?",
    "answers": [
      "Representativeness and distribution differences",
      "The model file size",
      "The GPU manufacturer",
      "The number of output labels"
    ],
    "why": "Patterns learned in one environment may not generalize; validate against the deployment population."
  },
  {
    "id": "ai-extra-1-005",
    "domain": 1,
    "objective": "1.6",
    "topic": "Controls and safeguards",
    "q": "A team calls a model secure because it uses deep learning. Which response is most accurate?",
    "answers": [
      "Model architecture alone does not establish security",
      "Deep models inherently enforce authorization",
      "Neural networks cannot be poisoned",
      "Depth eliminates training-data risk"
    ],
    "why": "Learning architecture describes computation, not proof of secure data handling or deployment controls."
  },
  {
    "id": "ai-extra-1-006",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "A vision system must recognize spatial patterns in images. Which architecture is especially associated with this task?",
    "answers": [
      "Convolutional neural networks",
      "Relational database indexes",
      "Public-key infrastructure",
      "Packet routing tables"
    ],
    "why": "Convolutional layers learn local spatial patterns; architecture choice still requires task-specific evaluation."
  },
  {
    "id": "ai-extra-1-007",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "An engineer says a transformer's attention mechanism verifies trusted sources. What is the correction?",
    "answers": [
      "Attention weights relationships rather than source authority",
      "Attention cryptographically signs sources",
      "Attention enforces document ACLs",
      "Attention removes malicious instructions automatically"
    ],
    "why": "Attention helps process relationships among tokens; trust and access controls belong in the surrounding system."
  },
  {
    "id": "ai-extra-1-008",
    "domain": 1,
    "objective": "1.1",
    "topic": "Learning paradigms",
    "q": "An image classifier is accurate in daylight but unreliable at night. What does this most directly show?",
    "answers": [
      "A gap in evaluated operating conditions",
      "An expired encryption key",
      "An authorization bypass by definition",
      "A database normalization failure"
    ],
    "why": "Performance must be evaluated across representative conditions; accuracy in one setting does not imply robustness elsewhere."
  },
  {
    "id": "ai-extra-1-009",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "An assistant needs current internal policies without changing model weights. Which design is most suitable?",
    "answers": [
      "Retrieve authorized policy passages at query time",
      "Retrain for every individual request",
      "Increase sampling randomness",
      "Replace authentication with prompting"
    ],
    "why": "Retrieval can supply current context without weight updates; freshness and document permissions still need enforcement."
  },
  {
    "id": "ai-extra-1-010",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "A team fine-tunes a model and expects it to become an access-control system. What is missing?",
    "answers": [
      "Independent authorization at data and tool boundaries",
      "More conversational examples only",
      "A larger tokenizer vocabulary only",
      "An animated approval icon"
    ],
    "why": "Training can influence behavior but does not create a dependable authorization boundary."
  },
  {
    "id": "ai-extra-1-011",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "A long prompt pushes important instructions outside the supported context. What should the application do?",
    "answers": [
      "Manage context explicitly and retain critical constraints",
      "Assume the model remembers discarded text",
      "Disable output validation",
      "Increase user privileges"
    ],
    "why": "Context limits affect available information; application enforcement must survive truncation and summarization."
  },
  {
    "id": "ai-extra-1-012",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "Two semantically similar documents have nearby embeddings. What can be inferred?",
    "answers": [
      "Similarity under the embedding model",
      "Identical access permissions",
      "Identical factual accuracy",
      "Verified common ownership"
    ],
    "why": "Embedding proximity reflects modeled similarity, not permission, truth, or provenance."
  },
  {
    "id": "ai-extra-1-013",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "A vendor promotes parameter-efficient fine-tuning. What changes compared with full fine-tuning?",
    "answers": [
      "Only a smaller subset or added parameters may be trained",
      "The model gains automatic anonymity",
      "No training data is required",
      "Serving authentication becomes unnecessary"
    ],
    "why": "Parameter-efficient methods reduce trainable parameters; they do not eliminate data or deployment security obligations."
  },
  {
    "id": "ai-extra-1-014",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "An assistant maintains memory across sessions. What additional risk deserves review?",
    "answers": [
      "Persistence of sensitive or attacker-influenced context",
      "Guaranteed improvement in factual accuracy",
      "Automatic credential expiration",
      "Elimination of prompt injection"
    ],
    "why": "Persistent memory can retain confidential or malicious content; scope, validation, and deletion need explicit design."
  },
  {
    "id": "ai-extra-1-015",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "A vision-language assistant reads instructions embedded in a screenshot. What trust rule should apply?",
    "answers": [
      "Image-derived text remains untrusted input",
      "Image text overrides application policy",
      "Typed text can be malicious",
      "Optical recognition proves authorization"
    ],
    "why": "Changing input modality does not grant content authority or remove injection risk."
  },
  {
    "id": "ai-extra-1-016",
    "domain": 1,
    "objective": "1.2",
    "topic": "Generative systems",
    "q": "A tokenizer splits a secret into several tokens. What does this provide for confidentiality?",
    "answers": [
      "No meaningful confidentiality guarantee by itself",
      "Encryption at rest",
      "Irreversible anonymization",
      "Key rotation"
    ],
    "why": "Tokenization for language processing segments text; it is not the same as privacy-preserving replacement tokens."
  },
  {
    "id": "ai-extra-1-017",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A fraud model flags 80 transactions; 20 are actually fraudulent. What is its precision?",
    "answers": [
      "25 percent",
      "80 percent",
      "20 percent",
      "75 percent"
    ],
    "why": "Precision is true positives divided by all predicted positives: 20 divided by 80 equals 25 percent."
  },
  {
    "id": "ai-extra-1-018",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A detector finds 45 of 60 actual attacks. What is its recall?",
    "answers": [
      "75 percent",
      "60 percent",
      "45 percent",
      "25 percent"
    ],
    "why": "Recall is true positives divided by actual positives: 45 divided by 60 equals 75 percent."
  },
  {
    "id": "ai-extra-1-019",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A rare-attack dataset is 99 percent benign. Which baseline exposes a misleading accuracy claim?",
    "answers": [
      "A classifier that labels every event benign",
      "A random encryption key",
      "A larger context window",
      "A higher token budget"
    ],
    "why": "An always-benign classifier reaches 99 percent accuracy while detecting no attacks; accuracy alone is insufficient."
  },
  {
    "id": "ai-extra-1-020",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A model's output varies on repeated identical requests. What should evaluators do?",
    "answers": [
      "Measure variability over repeated trials",
      "Evaluate only the best response",
      "Assume the first answer is representative",
      "Disable evidence capture"
    ],
    "why": "Nondeterministic outputs require repeated measurements and examination of failure frequency, not cherry-picked results."
  },
  {
    "id": "ai-extra-1-021",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "Input data patterns change while the relationship between inputs and outcomes stays stable. What is the concern?",
    "answers": [
      "Data distribution drift",
      "Cryptographic key compromise",
      "Model extraction by definition",
      "Privilege escalation by definition"
    ],
    "why": "Changing input distributions can degrade performance even without a changed target relationship."
  },
  {
    "id": "ai-extra-1-022",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "The same input characteristics now predict different outcomes after a business change. What should be assessed?",
    "answers": [
      "Concept drift and model suitability",
      "Disk capacity",
      "Text encoding",
      "Certificate renewal"
    ],
    "why": "Concept drift changes the relationship the model is trying to learn and may require reevaluation or retraining."
  },
  {
    "id": "ai-extra-1-023",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A model trained repeatedly on unfiltered generated outputs loses diversity and accuracy. Which risk is relevant?",
    "answers": [
      "Model collapse",
      "Certificate pinning",
      "Session fixation",
      "Perfect generalization"
    ],
    "why": "Recursive use of generated data can amplify errors and degrade representations; data quality and provenance matter."
  },
  {
    "id": "ai-extra-1-024",
    "domain": 1,
    "objective": "1.3",
    "topic": "Reliability and evaluation",
    "q": "A triage assistant is useful but uncertain on high-impact cases. Which operating mode is most appropriate?",
    "answers": [
      "Escalate uncertain cases to qualified human review",
      "Automatically execute every recommendation",
      "Discard uncertainty indicators",
      "Use answer length as confidence"
    ],
    "why": "Human review should be tied to consequences and uncertainty rather than arbitrary presentation features."
  },
  {
    "id": "ai-extra-1-025",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "A dataset contains duplicate records from a few users. What problem can result?",
    "answers": [
      "Distorted representation and evaluation leakage",
      "Guaranteed stronger generalization",
      "Automatic class balancing",
      "Improved anonymity by duplication"
    ],
    "why": "Duplicates can overrepresent individuals and cross dataset splits, inflating evaluation results."
  },
  {
    "id": "ai-extra-1-026",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "A team randomly splits time-series records so future events influence training for earlier tests. What is wrong?",
    "answers": [
      "Temporal leakage in evaluation",
      "Insufficient color contrast",
      "An expired OAuth scope",
      "Too few model layers by definition"
    ],
    "why": "Evaluation should preserve the deployment time relationship; future information can make performance unrealistically optimistic."
  },
  {
    "id": "ai-extra-1-027",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "A feature includes the analyst's final incident disposition when predicting that disposition. What is this?",
    "answers": [
      "Target leakage",
      "Differential privacy",
      "Feature anonymization",
      "Model compression"
    ],
    "why": "Using an outcome-derived feature supplies information unavailable at prediction time and invalidates the evaluation."
  },
  {
    "id": "ai-extra-1-028",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "Anonymized-looking records retain exact birth dates and postal codes. What should be assessed?",
    "answers": [
      "Reidentification through combined attributes",
      "Whether names alone were removed",
      "File compression ratio",
      "Whether fields are alphabetized"
    ],
    "why": "Quasi-identifiers can identify individuals in combination; removing direct names is not sufficient proof of anonymity."
  },
  {
    "id": "ai-extra-1-029",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "Synthetic records closely reproduce rare individuals from training. What is the correct conclusion?",
    "answers": [
      "Synthetic data still requires privacy testing",
      "Synthetic generation guarantees anonymity",
      "Real records need review",
      "A changed filename removes privacy risk"
    ],
    "why": "Generated data may reproduce sensitive patterns or memorized examples; its origin does not guarantee privacy."
  },
  {
    "id": "ai-extra-1-030",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "A team cannot identify where a training dataset originated. What is the most useful first step?",
    "answers": [
      "Establish provenance and permitted-use evidence",
      "Assume public download implies permission",
      "Encrypt the filename only",
      "Increase training epochs"
    ],
    "why": "Unknown origin prevents informed integrity, licensing, and privacy decisions; investigate before approving use."
  },
  {
    "id": "ai-extra-1-031",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "Training labels conflict across reviewers. What should improve first?",
    "answers": [
      "Label definitions and adjudication procedures",
      "Inference speed",
      "Hardware utilization",
      "Token limits"
    ],
    "why": "Inconsistent labels undermine learned behavior; clear criteria and resolution processes improve data quality."
  },
  {
    "id": "ai-extra-1-032",
    "domain": 1,
    "objective": "1.4",
    "topic": "Data foundations",
    "q": "A data engineer fills every missing security field with zero. What is the risk?",
    "answers": [
      "Introducing misleading meaning and systematic bias",
      "Automatically preserving ground truth",
      "Guaranteeing calibrated confidence",
      "Eliminating data-quality review"
    ],
    "why": "Missingness and zero are not interchangeable; imputation must reflect the field and be evaluated."
  },
  {
    "id": "ai-extra-1-033",
    "domain": 1,
    "objective": "1.5",
    "topic": "Security concepts",
    "q": "A model is queried to infer whether one person's record was in training. Which attack is this?",
    "answers": [
      "Membership inference",
      "Model serving failover",
      "Credential rotation",
      "Dataset deduplication"
    ],
    "why": "Membership inference targets training-set inclusion, distinct from reconstructing attributes or copying model behavior."
  },
  {
    "id": "ai-extra-1-034",
    "domain": 1,
    "objective": "1.5",
    "topic": "Security concepts",
    "q": "An attacker reconstructs sensitive attributes from model behavior. Which attack category fits best?",
    "answers": [
      "Model inversion",
      "Availability failover",
      "Context compression",
      "Schema validation"
    ],
    "why": "Model inversion seeks information about training data or represented subjects from model outputs or access."
  },
  {
    "id": "ai-extra-1-035",
    "domain": 1,
    "objective": "1.5",
    "topic": "Security concepts",
    "q": "An attacker submits many queries to imitate a proprietary model. What asset is primarily targeted?",
    "answers": [
      "Model intellectual property through extraction",
      "Network cable integrity",
      "Backup retention",
      "Certificate expiration"
    ],
    "why": "Extraction attempts reproduce model functionality or parameters, threatening confidentiality and intellectual property."
  },
  {
    "id": "ai-extra-1-036",
    "domain": 1,
    "objective": "1.5",
    "topic": "Security concepts",
    "q": "A small input modification causes a malicious file to be classified benign at inference. What is this?",
    "answers": [
      "Evasion",
      "Training-set labeling",
      "Key escrow",
      "Data retention"
    ],
    "why": "Evasion manipulates inputs presented to an existing model; poisoning instead targets learning data or the training process."
  },
  {
    "id": "ai-extra-1-037",
    "domain": 1,
    "objective": "1.5",
    "topic": "Security concepts",
    "q": "A poisoned training set creates a hidden trigger that changes model behavior. What is the most specific concern?",
    "answers": [
      "A learned backdoor",
      "Ordinary compression",
      "Routine drift monitoring",
      "A trusted execution environment"
    ],
    "why": "Backdoors associate attacker-chosen triggers with unwanted behavior and may evade ordinary clean-data testing."
  },
  {
    "id": "ai-extra-1-038",
    "domain": 1,
    "objective": "1.7",
    "topic": "Security use cases",
    "q": "A SOC wants an assistant to summarize alerts. Which pilot boundary is most defensible?",
    "answers": [
      "Read-only summaries with analyst verification",
      "Unrestricted production containment immediately",
      "Administrator access for every integration",
      "Unlogged autonomous account deletion"
    ],
    "why": "A constrained pilot measures usefulness while limiting consequences from incorrect generated recommendations."
  },
  {
    "id": "ai-extra-1-039",
    "domain": 1,
    "objective": "1.7",
    "topic": "Security use cases",
    "q": "A language model proposes a shell command during incident response. What should happen before execution?",
    "answers": [
      "Validate the command, authorization, and operational impact",
      "Execute because the prose is confident",
      "Trust any command in a code block",
      "Treat model output as approved change control"
    ],
    "why": "Generated commands require the same review and authorization as other operational changes."
  },
  {
    "id": "ai-extra-1-040",
    "domain": 1,
    "objective": "1.7",
    "topic": "Security use cases",
    "q": "A vendor reports a benchmark gain unrelated to your security workflow. What should determine adoption?",
    "answers": [
      "Evaluation on representative local tasks and risks",
      "The headline improvement alone",
      "The longest response length",
      "The largest parameter count alone"
    ],
    "why": "A benchmark is supporting evidence; the intended workflow and consequences determine practical suitability."
  },
  {
    "id": "ai-extra-2-001",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "An organization has many AI pilots but no central record. What should governance establish first?",
    "answers": [
      "An inventory with owners, purposes, data, and deployment status",
      "A single shared API token",
      "An unapproved model leaderboard",
      "A ban on documenting experiments"
    ],
    "why": "An inventory makes use cases and accountability visible; technical standardization alone does not reveal exposure."
  },
  {
    "id": "ai-extra-2-002",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "A board approves an AI policy. What makes it operational?",
    "answers": [
      "Assigned responsibilities, procedures, enforcement, and measures",
      "A policy logo",
      "A model temperature setting",
      "A vendor testimonial"
    ],
    "why": "Policy needs implementation and evidence; approval alone does not demonstrate effective governance."
  },
  {
    "id": "ai-extra-2-003",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "A business unit exempts its AI pilot from review because it is experimental. What matters most?",
    "answers": [
      "The pilot's actual data, actions, and potential harm",
      "Whether the word pilot appears",
      "Whether the UI is temporary",
      "Whether the model is small"
    ],
    "why": "Experimental status does not remove risk; evaluate actual exposure and consequences."
  },
  {
    "id": "ai-extra-2-004",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "Two departments disagree about who can approve a high-risk assistant. What should resolve this?",
    "answers": [
      "A documented decision-rights and escalation structure",
      "The fastest deployment team",
      "The model's preference",
      "A random tie-breaker"
    ],
    "why": "Clear authority and escalation prevent competing assumptions about accountability and risk acceptance."
  },
  {
    "id": "ai-extra-2-005",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "A company copies its server patch policy as its entire AI policy. What is missing?",
    "answers": [
      "Controls for data, behavior, human impact, and model changes",
      "A longer document title",
      "Endpoint operating-system names",
      "Rack diagrams"
    ],
    "why": "AI governance includes behavioral and data-related risks beyond traditional software patching."
  },
  {
    "id": "ai-extra-2-006",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "A policy says all AI use must be explainable. What should implementation clarify?",
    "answers": [
      "Audience, purpose, required explanation, and evidence",
      "That every model must expose source code publicly",
      "That confident prose is sufficient",
      "That explanations replace accuracy testing"
    ],
    "why": "Explainability requirements depend on decisions and users; plausible language is not evidence of faithful reasoning."
  },
  {
    "id": "ai-extra-2-007",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "A department buys a chatbot outside procurement. What is the best governance response?",
    "answers": [
      "Discover its use, assess exposure, and route it through approval",
      "Ignore it until renewal",
      "Approve it because a card was accepted",
      "Delete all procurement records"
    ],
    "why": "Shadow AI needs visibility and proportionate review rather than assumed safety or missing records."
  },
  {
    "id": "ai-extra-2-008",
    "domain": 2,
    "objective": "2.1",
    "topic": "Governance design",
    "q": "Which governance measure best indicates control implementation?",
    "answers": [
      "Sampled use cases meeting documented review requirements",
      "Number of policy pages",
      "Number of AI marketing posts",
      "Average prompt length"
    ],
    "why": "Evidence of actual reviews measures implementation more directly than document volume or publicity."
  },
  {
    "id": "ai-extra-2-009",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A hiring tool has equal overall accuracy but rejects qualified applicants disproportionately in one group. What is needed?",
    "answers": [
      "Group-specific error analysis and impact review",
      "Another overall accuracy score",
      "Removal of all appeal channels",
      "Automatic acceptance of vendor fairness claims"
    ],
    "why": "Aggregate accuracy can hide unequal error patterns; evaluate the relevant groups and decision consequences."
  },
  {
    "id": "ai-extra-2-010",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A fairness fix improves one metric but worsens another. What should the team do?",
    "answers": [
      "Document tradeoffs and evaluate them against the use case",
      "Claim all fairness goals are satisfied",
      "Select whichever metric looks best silently",
      "Stop measuring affected groups"
    ],
    "why": "Fairness metrics can conflict; accountable decisions require explicit context, tradeoffs, and validation."
  },
  {
    "id": "ai-extra-2-011",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "An appeal process exists, but affected people cannot discover it. What should improve?",
    "answers": [
      "Accessible notice and a usable challenge process",
      "Model size",
      "Inference throughput",
      "Training epochs"
    ],
    "why": "A right to challenge is ineffective without practical visibility and access to meaningful review."
  },
  {
    "id": "ai-extra-2-012",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "An AI system explains a denial using a fluent rationale unsupported by the actual decision process. What is the issue?",
    "answers": [
      "The explanation may be misleading rather than faithful",
      "Fluency proves transparency",
      "The model has demonstrated causality",
      "The output is automatically auditable"
    ],
    "why": "Generated rationales can sound plausible without reflecting the factors that produced the decision."
  },
  {
    "id": "ai-extra-2-013",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A support assistant works poorly for users with speech impairments. What should be evaluated?",
    "answers": [
      "Accessibility and performance for affected users",
      "Average response length",
      "System uptime",
      "The most common accent"
    ],
    "why": "Inclusive design evaluates who can use the system effectively, not just average performance."
  },
  {
    "id": "ai-extra-2-014",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A team removes a protected attribute and declares the model unbiased. What is overlooked?",
    "answers": [
      "Other features may act as proxies",
      "All bias requires explicit sensitive fields",
      "Training data becomes random automatically",
      "Feature deletion guarantees equal outcomes"
    ],
    "why": "Correlated features can preserve discriminatory patterns; test outcomes and mechanisms after feature changes."
  },
  {
    "id": "ai-extra-2-015",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A company deploys a synthetic spokesperson without disclosure. Which governance concern arises?",
    "answers": [
      "Potentially misleading presentation of AI-generated identity",
      "Guaranteed model extraction",
      "Unavoidable data poisoning",
      "Automatic encryption failure"
    ],
    "why": "Disclosure and audience context matter when synthetic content could mislead people about identity or authenticity."
  },
  {
    "id": "ai-extra-2-016",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "An AI workload consumes far more compute than expected for a minor benefit. What should governance review?",
    "answers": [
      "Proportionality, resource use, and alternatives",
      "The screen resolution",
      "The model nickname",
      "Staff enthusiasm"
    ],
    "why": "Responsible adoption considers operational and environmental costs alongside demonstrated benefit and risk."
  },
  {
    "id": "ai-extra-2-017",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A model performs well on one language but serves a multilingual population. What is the strongest next step?",
    "answers": [
      "Evaluate safety and quality across supported languages",
      "Translate the disclaimer only",
      "Assume English results generalize",
      "Disable user feedback"
    ],
    "why": "Different languages can change performance and failure modes; evaluate the actual served population."
  },
  {
    "id": "ai-extra-2-018",
    "domain": 2,
    "objective": "2.2",
    "topic": "Ethics and fairness",
    "q": "A product team wants users to believe an AI agent is a human employee. What should security leadership request?",
    "answers": [
      "Transparent identity disclosure and impact assessment",
      "A more convincing fake biography",
      "Removal of audit records",
      "Unrestricted agent authority"
    ],
    "why": "Deceptive presentation can undermine informed use and accountability; disclosure must match the interaction context."
  },
  {
    "id": "ai-extra-2-019",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "Two assistants use the same model, but only one can execute financial changes. Which deserves greater action-risk scrutiny?",
    "answers": [
      "The assistant with financial authority",
      "Both solely according to parameter count",
      "The assistant with a shorter name",
      "Neither if the model is commercially sold"
    ],
    "why": "Risk depends on authority and consequences, not just the model shared by both systems."
  },
  {
    "id": "ai-extra-2-020",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A risk register lists threats without owners or treatments. What should be added?",
    "answers": [
      "Accountable owners, actions, due dates, and residual risk",
      "A larger severity font",
      "Vendor model names",
      "Generic AI slogans"
    ],
    "why": "Risk tracking should drive accountable treatment and review rather than remain a passive threat list."
  },
  {
    "id": "ai-extra-2-021",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "An AI team reports a precise loss estimate based on unsupported assumptions. What should reviewers request?",
    "answers": [
      "Assumptions, uncertainty ranges, and supporting evidence",
      "More decimal places",
      "A stronger color scale",
      "An assurance that AI calculated it"
    ],
    "why": "Quantification should expose uncertainty; numerical precision does not establish evidentiary quality."
  },
  {
    "id": "ai-extra-2-022",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A low-risk summarizer will start processing health information. What is the appropriate response?",
    "answers": [
      "Reassess data sensitivity and controls before the change",
      "Keep its original classification automatically",
      "Change the product name",
      "Wait until an incident occurs"
    ],
    "why": "Changed data sensitivity can alter obligations and impact even when the application function remains similar."
  },
  {
    "id": "ai-extra-2-023",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A control reduces likelihood but leaves severe possible harm. What must the approver consider?",
    "answers": [
      "Residual risk and whether it is acceptable",
      "The control purchase price",
      "Initial risk before treatment",
      "Whether the model apologizes on failure"
    ],
    "why": "Controls rarely remove all risk; decisions must address remaining likelihood and consequences."
  },
  {
    "id": "ai-extra-2-024",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A team labels a risk transferred after buying insurance. What remains necessary?",
    "answers": [
      "Manage controls and obligations that insurance does not remove",
      "Stop incident response planning",
      "Disable access reviews",
      "Assume all liability disappears"
    ],
    "why": "Risk transfer mechanisms may cover specified losses but do not eliminate operational responsibility or every obligation."
  },
  {
    "id": "ai-extra-2-025",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "An AI use case has no defensible benefit and substantial unresolved harm. Which treatment may be appropriate?",
    "answers": [
      "Avoid the use case",
      "Deploy to learn from real harm",
      "Accept automatically because it is innovative",
      "Hide the assessment"
    ],
    "why": "Avoidance is a valid treatment when benefits do not justify exposure or acceptable controls are unavailable."
  },
  {
    "id": "ai-extra-2-026",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A manager signs a risk exception indefinitely. What would strengthen it?",
    "answers": [
      "Time limits, compensating controls, and review triggers",
      "Removal of ownership",
      "A more technical acronym",
      "A promise never to revisit it"
    ],
    "why": "Exceptions need bounded scope and reassessment so temporary exposure does not become invisible permanent risk."
  },
  {
    "id": "ai-extra-2-027",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A model update changes decision behavior without changing application code. What should risk governance do?",
    "answers": [
      "Trigger proportionate reassessment and validation",
      "Assume no change occurred",
      "Update the help text",
      "Wait for the annual budget cycle"
    ],
    "why": "Behavioral changes can alter exposure without a code diff; review triggers should include model changes."
  },
  {
    "id": "ai-extra-2-028",
    "domain": 2,
    "objective": "2.3",
    "topic": "Risk decisions",
    "q": "A risk committee prioritizes purely by model popularity. What is a stronger basis?",
    "answers": [
      "Use-case impact, exposure, likelihood, and control effectiveness",
      "Social media mentions",
      "Average answer verbosity",
      "The most attractive demo"
    ],
    "why": "Risk prioritization connects credible threats to business consequences and existing safeguards."
  },
  {
    "id": "ai-extra-2-029",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A dataset is publicly downloadable. What must be checked before commercial training use?",
    "answers": [
      "License, permitted purposes, privacy, and other applicable rights",
      "Download speed",
      "Whether it has a CSV extension",
      "Whether its name contains open"
    ],
    "why": "Public availability is not evidence of unrestricted licensing or lawful handling of all included data."
  },
  {
    "id": "ai-extra-2-030",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A team wants to reuse support transcripts for a new training purpose. What should happen first?",
    "answers": [
      "Review purpose compatibility, permissions, and applicable privacy requirements",
      "Assume collection authorizes every future use",
      "Remove the transcript title only",
      "Extend retention without review"
    ],
    "why": "Authorization for one purpose does not automatically cover a materially different use of personal data."
  },
  {
    "id": "ai-extra-2-031",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A provider retains prompts despite the customer's deletion request. What evidence is needed?",
    "answers": [
      "Actual retention terms, deletion scope, and obligations",
      "The size of the model",
      "The provider's office address alone",
      "The UI theme"
    ],
    "why": "Deletion requirements depend on actual copies, commitments, and applicable obligations; a button is insufficient evidence."
  },
  {
    "id": "ai-extra-2-032",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "An engineer pastes export-controlled designs into an unapproved AI service. What should the organization do?",
    "answers": [
      "Contain the disclosure and involve the relevant security and compliance owners",
      "Assume generated text cannot retain designs",
      "Delete the browser shortcut",
      "Wait for vendor marketing updates"
    ],
    "why": "Sensitive disclosure requires prompt assessment of recipients, retention, and applicable controls by responsible specialists."
  },
  {
    "id": "ai-extra-2-033",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A contract prohibits provider training on customer prompts. What should a review verify?",
    "answers": [
      "Configuration and handling evidence consistent with the contract",
      "The contract file's existence",
      "The model's response style",
      "The provider's market share"
    ],
    "why": "Contractual commitments need operational implementation; documentation alone does not establish actual data handling."
  },
  {
    "id": "ai-extra-2-034",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A model reproduces recognizable licensed material. What should the release team do?",
    "answers": [
      "Review rights, reproduction risks, and required mitigations",
      "Assume generated output is always unrestricted",
      "Change the output font",
      "Disable copyright review"
    ],
    "why": "AI generation does not automatically remove intellectual-property constraints; review the actual material and use."
  },
  {
    "id": "ai-extra-2-035",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A product requests consent through a vague all-purpose checkbox. What should privacy reviewers examine?",
    "answers": [
      "Whether notice and choice meaningfully cover the intended processing",
      "Checkbox color",
      "Whether the box is preselected for convenience",
      "The model vendor"
    ],
    "why": "The quality of consent depends on context, specificity, and applicable requirements rather than interface presence alone."
  },
  {
    "id": "ai-extra-2-036",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A dataset combines permitted records with records lacking usage rights. What is the strongest response?",
    "answers": [
      "Resolve record-level rights and exclude unapproved material",
      "Treat majority permission as sufficient",
      "Rename the combined dataset",
      "Use stronger compression"
    ],
    "why": "Mixing data does not erase restrictions; lineage must support decisions about included material."
  },
  {
    "id": "ai-extra-2-037",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "A privacy officer asks which subprocessors receive prompts. What should the AI owner provide?",
    "answers": [
      "A verified downstream data-flow and subprocessor record",
      "The main vendor's name",
      "Model parameter counts",
      "An abstract architecture slogan"
    ],
    "why": "Privacy and supplier assessment require visibility into actual recipients and handling, including subcontracted services."
  },
  {
    "id": "ai-extra-2-038",
    "domain": 2,
    "objective": "2.4",
    "topic": "Privacy and intellectual property",
    "q": "An AI service's retention setting changes after renewal. What should the owner do?",
    "answers": [
      "Compare new terms and settings with approved requirements",
      "Assume renewal preserves all controls",
      "Change the invoice reference",
      "Wait until the next breach"
    ],
    "why": "Renewals and provider changes can alter approved handling; governance should detect and assess the difference."
  },
  {
    "id": "ai-extra-2-039",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A vendor supplies an audit report covering a different product. What should reviewers do?",
    "answers": [
      "Check scope and obtain evidence relevant to the AI service",
      "Accept the brand's report automatically",
      "Ignore the service architecture",
      "Compare report cover dates"
    ],
    "why": "Assurance is meaningful only when its scope, period, and controls apply to the service being adopted."
  },
  {
    "id": "ai-extra-2-040",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "An AI supplier uses an undisclosed model provider. What risk needs attention?",
    "answers": [
      "Unassessed downstream dependencies and responsibilities",
      "Guaranteed better accuracy",
      "Automatic license compatibility",
      "Elimination of confidentiality risk"
    ],
    "why": "Hidden dependencies can introduce data handling, continuity, and contractual risks outside the original assessment."
  },
  {
    "id": "ai-extra-2-041",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A supplier contract lacks incident notification terms. What should procurement address?",
    "answers": [
      "Notification duties, timing expectations, and coordination rights",
      "Dashboard branding",
      "Response temperature",
      "Token discounts"
    ],
    "why": "Timely coordinated response requires clear supplier commitments; technical alerts alone may not reveal provider incidents."
  },
  {
    "id": "ai-extra-2-042",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "An organization uses one model provider for every critical workflow. What should continuity planning assess?",
    "answers": [
      "Concentration risk and viable fallback options",
      "The supplier's logo",
      "Total prompt length",
      "Developer satisfaction"
    ],
    "why": "A shared dependency can create correlated outages or disruptions across otherwise separate business processes."
  },
  {
    "id": "ai-extra-2-043",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A vendor promises zero data retention but keeps diagnostic payloads. What should reviewers resolve?",
    "answers": [
      "The exact scope and exceptions of the retention claim",
      "How the claim is displayed",
      "Whether zero appears in the brochure",
      "Whether the model is proprietary"
    ],
    "why": "A broad claim can hide exceptions; decisions need the actual handling of prompts, outputs, and diagnostics."
  },
  {
    "id": "ai-extra-2-044",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A provider changes its terms to permit additional data use. What should the customer do?",
    "answers": [
      "Reassess the change against requirements before continued affected use",
      "Assume old approval covers new purposes",
      "Delete the procurement ticket",
      "Increase request volume"
    ],
    "why": "Provider changes can invalidate the assumptions supporting the original approval and require a new decision."
  },
  {
    "id": "ai-extra-2-045",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "An open model has many downloads but no trustworthy origin evidence. What should determine approval?",
    "answers": [
      "Provenance verification and independent validation",
      "Download count alone",
      "The most flattering benchmark",
      "Whether the filename says safe"
    ],
    "why": "Popularity does not establish artifact integrity, rights, or behavior under the intended conditions."
  },
  {
    "id": "ai-extra-2-046",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A supplier's availability SLA excludes the outage type your workflow relies on. What should be done?",
    "answers": [
      "Assess the uncovered dependency and negotiate or design mitigation",
      "Treat the headline SLA as full coverage",
      "Ignore the exclusion",
      "Disable failover tests"
    ],
    "why": "Assurance depends on actual contractual coverage and technical recovery, not a headline percentage."
  },
  {
    "id": "ai-extra-2-047",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A shared-responsibility diagram assigns every control to the provider. What should the customer verify?",
    "answers": [
      "Its own integration, access, data, and usage responsibilities",
      "That the vendor has a large support team",
      "The region name",
      "Whether the diagram is colorful"
    ],
    "why": "Managed services do not remove customer responsibility for configuration, permissions, and appropriate data use."
  },
  {
    "id": "ai-extra-2-048",
    "domain": 2,
    "objective": "2.5",
    "topic": "Supplier assurance",
    "q": "A team requests an AI bill of materials. What should it help identify?",
    "answers": [
      "Models, data and software dependencies with relevant origins and versions",
      "Employee contact details",
      "Monthly token spend",
      "Generated marketing copy"
    ],
    "why": "A useful component inventory supports dependency risk analysis; it is not by itself proof of secure behavior."
  },
  {
    "id": "ai-extra-2-049",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "An AI reviewer approves hundreds of actions without seeing the supporting evidence. What should change?",
    "answers": [
      "Provide decision evidence and realistic review capacity",
      "Increase the approval quota",
      "Hide uncertainty to save time",
      "Automatically approve older requests"
    ],
    "why": "Oversight is meaningful only when reviewers have evidence, authority, and time to assess proposed actions."
  },
  {
    "id": "ai-extra-2-050",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "A human can stop an autonomous process only after irreversible harm. What should design review consider?",
    "answers": [
      "Earlier intervention points and bounded authority",
      "A louder post-event alarm",
      "A more detailed apology",
      "A faster model"
    ],
    "why": "Intervention must occur before unacceptable consequences when practical; delayed visibility is not effective prevention."
  },
  {
    "id": "ai-extra-2-051",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "An audit finds approvals without model versions. What is the main weakness?",
    "answers": [
      "Decisions cannot be tied reliably to deployed behavior",
      "The UI cannot support dark mode",
      "The model cannot tokenize text",
      "The database cannot be encrypted"
    ],
    "why": "Version-linked decision evidence is needed to establish what was actually assessed and released."
  },
  {
    "id": "ai-extra-2-052",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "A team audits only successful AI actions. What is missing?",
    "answers": [
      "Denied, failed, and exceptional action paths",
      "Longer success descriptions",
      "More screenshots of normal traffic",
      "Averaged response time"
    ],
    "why": "Failures and denials can reveal misuse or ineffective controls that successful paths do not expose."
  },
  {
    "id": "ai-extra-2-053",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "An AI exception was approved by the engineer who requested it despite separation-of-duties requirements. What should happen?",
    "answers": [
      "Route approval to the authorized independent decision-maker",
      "Treat technical skill as automatic authority",
      "Delete the exception record",
      "Backdate a generic approval"
    ],
    "why": "Approval authority and independence are governance controls; requester expertise does not replace them."
  },
  {
    "id": "ai-extra-2-054",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "An assistant silently sends user requests to a new external tool. What should the owner review?",
    "answers": [
      "Disclosure, authorization, data flow, and supplier approval",
      "Whether answers are shorter",
      "The tool icon",
      "Whether the model likes the tool"
    ],
    "why": "A new recipient or action path changes processing and accountability even if the interface appears unchanged."
  },
  {
    "id": "ai-extra-2-055",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "Which audit evidence best demonstrates a kill switch works?",
    "answers": [
      "A controlled test showing actions stop within defined criteria",
      "A policy saying it exists",
      "A screenshot of its label",
      "A vendor promise without testing"
    ],
    "why": "Operational controls need observed effectiveness; documented intent alone does not demonstrate performance."
  },
  {
    "id": "ai-extra-2-056",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "An AI inventory includes only models, excluding agents and retrieval stores. What should improve?",
    "answers": [
      "Inventory coverage of the full deployed workflow",
      "Model nicknames",
      "Logo consistency",
      "Font accessibility"
    ],
    "why": "Governance must account for components and capabilities that affect data access and actions beyond the model."
  },
  {
    "id": "ai-extra-2-057",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "A risk owner leaves the company while AI exceptions remain active. What should happen?",
    "answers": [
      "Reassign accountability and review outstanding decisions",
      "Leave approvals ownerless indefinitely",
      "Delete the model inventory",
      "Assume the vendor inherits ownership"
    ],
    "why": "Ongoing risk needs an accountable owner; personnel changes should trigger continuity of governance responsibilities."
  },
  {
    "id": "ai-extra-2-058",
    "domain": 2,
    "objective": "2.6",
    "topic": "Oversight and auditing",
    "q": "A team claims an external audit eliminates the need for internal monitoring. What is the correction?",
    "answers": [
      "Point-in-time assurance complements ongoing oversight",
      "An audit predicts all future changes",
      "Monitoring is unnecessary after certification",
      "Supplier audits cover every local use case"
    ],
    "why": "Audits have defined scope and timing; changing systems and local operations still require monitoring."
  },
  {
    "id": "ai-extra-2-059",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "Developers pass an AI terminology quiz but still paste secrets into public tools. Which training change is strongest?",
    "answers": [
      "Role-specific exercises on real workflow decisions and safe alternatives",
      "More acronym memorization alone",
      "A longer attendance sheet",
      "A generic annual slide deck only"
    ],
    "why": "Training should change relevant behavior; terminology recall alone does not establish safe operational judgment."
  },
  {
    "id": "ai-extra-2-060",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "What is a stronger measure of AI awareness effectiveness than attendance?",
    "answers": [
      "Reduced unsafe handling in realistic follow-up exercises",
      "Number of invitation emails",
      "Length of the training video",
      "Number of slides"
    ],
    "why": "Behavioral evidence tests whether training improves the decisions it was intended to change."
  },
  {
    "id": "ai-extra-2-061",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "New analysts assume every AI recommendation is reliable. What should training emphasize?",
    "answers": [
      "Verification, uncertainty, and escalation for consequential decisions",
      "Faster acceptance of fluent answers",
      "Avoiding all documentation",
      "Replacing every analyst with automation"
    ],
    "why": "Training should counter automation bias and teach when evidence or human expertise is needed."
  },
  {
    "id": "ai-extra-2-062",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "Staff hide AI use because the approved alternative is unusable. What should leadership consider?",
    "answers": [
      "Usable sanctioned workflows plus clear risk-based guidance",
      "Stronger punishment without alternatives",
      "Ignoring unofficial use",
      "Removing all inventories"
    ],
    "why": "Sustainable adoption combines workable safe options with understandable rules and visibility into actual use."
  },
  {
    "id": "ai-extra-2-063",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "An executive wants the same AI training as an ML engineer. What should guide the curriculum?",
    "answers": [
      "Role-specific decisions and responsibilities",
      "Identical technical depth for every role",
      "Employee seniority",
      "The newest model brand"
    ],
    "why": "Decision-makers need appropriate risk judgment while implementers need relevant technical controls; needs differ by role."
  },
  {
    "id": "ai-extra-2-064",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "A team changes its AI tool's data sharing behavior. What should awareness owners do?",
    "answers": [
      "Update guidance and train affected users on the changed workflow",
      "Reuse outdated screenshots indefinitely",
      "Wait for the annual course",
      "Assume settings changes are self-explanatory"
    ],
    "why": "Training must track material changes affecting how people handle data or authorize actions."
  },
  {
    "id": "ai-extra-2-065",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "An AI exercise uses real customer secrets to make it realistic. What should the trainer do?",
    "answers": [
      "Replace them with synthetic examples preserving the learning objective",
      "Share them only in the answer key",
      "Publish them after class",
      "Trust trainees to forget them"
    ],
    "why": "Realistic practice does not require exposing confidential data; synthetic examples can test the same judgment."
  },
  {
    "id": "ai-extra-2-066",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "A user reports unsafe assistant advice that caused no harm. How should governance respond?",
    "answers": [
      "Capture the near miss and assess systemic improvements",
      "Ignore it because no incident occurred",
      "Punish reporting automatically",
      "Remove the feedback channel"
    ],
    "why": "Near misses provide evidence about failure paths before serious consequences and support preventive improvement."
  },
  {
    "id": "ai-extra-2-067",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "Which awareness activity best addresses deepfake payment requests?",
    "answers": [
      "Practice verifying requests through an independent trusted channel",
      "Teach that familiar voices prove identity",
      "Allow exceptions for urgent callers",
      "Rely only on video resolution"
    ],
    "why": "Training should teach independent verification rather than confidence in increasingly convincing synthetic media."
  },
  {
    "id": "ai-extra-2-068",
    "domain": 2,
    "objective": "2.7",
    "topic": "Education and adoption",
    "q": "An awareness program succeeds initially but unsafe use rises months later. What should be done?",
    "answers": [
      "Investigate causes and reinforce training with workflow controls",
      "Declare the original training permanently sufficient",
      "Stop measuring behavior",
      "Increase slide count"
    ],
    "why": "Sustained behavior depends on current tools, incentives, and usable controls, not one-time instruction alone."
  },
  {
    "id": "ai-extra-3-001",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A dataset owner approves training use, but the source records prohibit that purpose. What governs the decision?",
    "answers": [
      "Verify underlying rights and restrictions before use",
      "Rely solely on the internal approval",
      "Treat encryption as permission",
      "Treat aggregation as unrestricted use"
    ],
    "why": "Internal approval cannot create rights absent from the underlying data or override applicable restrictions."
  },
  {
    "id": "ai-extra-3-002",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A model produces sensitive information, and no one knows which sources contributed. Which record would help most?",
    "answers": [
      "Versioned data lineage linked to the trained artifact",
      "Current storage utilization",
      "The final prediction score",
      "The inference server hostname"
    ],
    "why": "Lineage links transformations and source versions to artifacts, supporting investigation and corrective action."
  },
  {
    "id": "ai-extra-3-003",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A data steward and business owner disagree about allowable use. What is the appropriate next step?",
    "answers": [
      "Use documented authority and escalation to resolve the restriction",
      "Let the pipeline proceed by default",
      "Treat the steward as the model developer",
      "Use the newest dataset automatically"
    ],
    "why": "Defined roles and escalation should resolve purpose and accountability before disputed processing continues."
  },
  {
    "id": "ai-extra-3-004",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "Records must stay in an approved region, but embeddings are created elsewhere. What should be assessed?",
    "answers": [
      "Whether derived processing and storage violate residency requirements",
      "The source database location",
      "The user's login region",
      "The model output language"
    ],
    "why": "Residency analysis must follow actual processing and derived stores, not just the original database."
  },
  {
    "id": "ai-extra-3-005",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "Investigators receive a dataset snapshot without integrity records. What should be documented?",
    "answers": [
      "Acquisition details, hashes, custody transfers, and storage controls",
      "The snapshot's display name",
      "Its average record length",
      "The model accuracy score"
    ],
    "why": "Evidence handling requires traceability and integrity across acquisition, transfers, and analysis."
  },
  {
    "id": "ai-extra-3-006",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A source data restriction changes after training. What should the owner evaluate?",
    "answers": [
      "Affected copies and trained artifacts using lineage and applicable obligations",
      "Future web page labels",
      "Whether the old file still opens",
      "The next model's hardware budget"
    ],
    "why": "Lineage helps assess downstream effects; obligations and technical feasibility determine necessary remediation."
  },
  {
    "id": "ai-extra-3-007",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A catalog labels an entire mixed dataset public despite restricted records. What is the strongest correction?",
    "answers": [
      "Apply accurate granular classification and enforce downstream restrictions",
      "Assume public labels override source terms",
      "Encrypt the catalog entry only",
      "Retain the broad label for convenience"
    ],
    "why": "Classification should reflect actual content and constraints; inaccurate labels can propagate inappropriate access."
  },
  {
    "id": "ai-extra-3-008",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A data pipeline renames fields and loses source identifiers. What capability is weakened?",
    "answers": [
      "Traceability back to origin and permitted use",
      "Transport encryption by definition",
      "GPU isolation by definition",
      "Workload authentication by definition"
    ],
    "why": "Transformation records should preserve sufficient links to assess origin, quality, restrictions, and later changes."
  },
  {
    "id": "ai-extra-3-009",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A team archives old training sets in a less protected bucket. What should change?",
    "answers": [
      "Apply lifecycle-appropriate controls to archived sensitive data",
      "Protect only the newest dataset",
      "Treat archival status as declassification",
      "Rely only on the bucket's age"
    ],
    "why": "Archiving changes usage frequency, not automatically the sensitivity or access requirements of retained data."
  },
  {
    "id": "ai-extra-3-010",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A deletion workflow clears the source but cannot identify derived copies. What should be designed?",
    "answers": [
      "An inventory and lineage-driven deletion verification process",
      "A source-only deletion certificate",
      "A longer retention period for convenience",
      "A promise that indexes refresh eventually"
    ],
    "why": "Deletion assurance requires identifying relevant downstream artifacts and verifying required handling of each."
  },
  {
    "id": "ai-extra-3-011",
    "domain": 3,
    "objective": "3.1",
    "topic": "Lineage and accountability",
    "q": "A data owner approves a purpose but no pipeline control enforces it. What is missing?",
    "answers": [
      "Technical and procedural controls implementing permitted use",
      "More model parameters",
      "A new dataset title",
      "A larger data sample"
    ],
    "why": "A declared purpose restriction needs enforcement and review across actual data access and processing."
  },
  {
    "id": "ai-extra-3-012",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A team must retain joinability across approved datasets while hiding account numbers from analysts. Which technique fits?",
    "answers": [
      "Controlled token replacement with a protected mapping",
      "Plain unsalted hashing of predictable numbers",
      "Removing every authorization check",
      "Publishing a reversible mapping"
    ],
    "why": "Token replacement can support controlled linkage; the mapping and its access remain sensitive."
  },
  {
    "id": "ai-extra-3-013",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A dataset meets a chosen k-anonymity threshold. What limitation should reviewers recognize?",
    "answers": [
      "Similar sensitive values within groups can still disclose information",
      "It guarantees differential privacy",
      "It prevents every linkage attack",
      "It authorizes any secondary use"
    ],
    "why": "K-anonymity limits distinguishability on selected attributes but does not eliminate all inference or linkage risks."
  },
  {
    "id": "ai-extra-3-014",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A team adds differential privacy noise but ignores repeated releases. What should it manage?",
    "answers": [
      "Cumulative privacy loss across the releases",
      "Encryption key length",
      "The largest single CSV",
      "Model serving latency"
    ],
    "why": "Privacy guarantees depend on the mechanism and composition; repeated disclosures consume privacy budget."
  },
  {
    "id": "ai-extra-3-015",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A developer masks names but keeps free-text notes unchanged. What should privacy review assess?",
    "answers": [
      "Sensitive information still present in unstructured fields",
      "Whether names look hidden",
      "The mask character used",
      "The number of rows"
    ],
    "why": "Free text may retain direct identifiers and sensitive details despite masking structured name fields."
  },
  {
    "id": "ai-extra-3-016",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A sensitive dataset is encrypted at rest. Which remaining exposure needs attention?",
    "answers": [
      "Authorized or compromised applications reading plaintext",
      "The ciphertext file extension",
      "The backup's display name",
      "Whether data is tabular"
    ],
    "why": "Encryption at rest does not prevent disclosure through permitted reads, application compromise, or unsafe output paths."
  },
  {
    "id": "ai-extra-3-017",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A privacy team needs aggregate statistics without revealing a particular individual's contribution. Which approach is relevant?",
    "answers": [
      "A properly designed differential privacy mechanism",
      "Plain base64 encoding",
      "An unrestricted row-level export",
      "A shared decryption key"
    ],
    "why": "Differential privacy can bound contribution-related disclosure under defined assumptions; encoding does not provide that property."
  },
  {
    "id": "ai-extra-3-018",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A user withdraws permission for an optional processing purpose. What should happen?",
    "answers": [
      "Assess and implement required cessation and downstream handling",
      "Assume existing ingestion makes withdrawal irrelevant",
      "Hide the consent button",
      "Automatically retrain every enterprise model without analysis"
    ],
    "why": "The response depends on the lawful basis, obligations, and affected artifacts; traceable handling is necessary."
  },
  {
    "id": "ai-extra-3-019",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A model memorizes rare sensitive records despite masked names. What should the team examine?",
    "answers": [
      "Residual memorization and extraction exposure",
      "Whether names are absent",
      "Aggregate training accuracy",
      "The dataset compression method"
    ],
    "why": "Masking names does not prevent a model from retaining distinctive sensitive content or combinations."
  },
  {
    "id": "ai-extra-3-020",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A health assistant only needs age range and symptom category. Which collection decision is strongest?",
    "answers": [
      "Exclude unnecessary identifiers and detailed history",
      "Collect every available medical field",
      "Retain full records for hypothetical future use",
      "Collect credentials to verify accuracy"
    ],
    "why": "Data minimization limits exposure by collecting only what the approved task actually requires."
  },
  {
    "id": "ai-extra-3-021",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A team wants to test whether synthetic data leaks training examples. What is appropriate?",
    "answers": [
      "Privacy evaluation including similarity and inference risks",
      "Assume the generation label proves safety",
      "Check only column formatting",
      "Compare only total row counts"
    ],
    "why": "Synthetic data can reproduce or expose sensitive patterns; evaluate its actual relationship to source individuals."
  },
  {
    "id": "ai-extra-3-022",
    "domain": 3,
    "objective": "3.2",
    "topic": "Privacy controls",
    "q": "A privacy notice covers analytics but the organization adds model training. What is the first review question?",
    "answers": [
      "Whether the new purpose has an appropriate legal basis and notice",
      "Whether training uses a GPU",
      "Whether the notice has a search box",
      "Whether the dataset has more rows"
    ],
    "why": "Purpose changes require factual privacy analysis; technical method alone does not establish permission."
  },
  {
    "id": "ai-extra-3-023",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "An external contributor changes a small set of training labels to influence a target class. What is this?",
    "answers": [
      "Data poisoning through label manipulation",
      "Inference-only evasion",
      "Routine model quantization",
      "Normal cache invalidation"
    ],
    "why": "Changing learning labels targets the training process; evasion instead manipulates inputs to an already trained model."
  },
  {
    "id": "ai-extra-3-024",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A pipeline accepts datasets with valid file formats but malicious content. What is missing?",
    "answers": [
      "Content, provenance, and integrity validation beyond syntax",
      "More permissive parsers",
      "A larger upload limit",
      "Transport encryption"
    ],
    "why": "A well-formed file can still contain manipulated or unauthorized learning material."
  },
  {
    "id": "ai-extra-3-025",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A malicious sample trains a model to fail only when a special patch appears. What should testing include?",
    "answers": [
      "Trigger-sensitive and adversarial behavior evaluation",
      "Average accuracy on ordinary clean inputs",
      "Model file size comparisons",
      "Network latency tests"
    ],
    "why": "A backdoor can preserve ordinary performance while causing targeted failures under an attacker-chosen trigger."
  },
  {
    "id": "ai-extra-3-026",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A training bucket allows every developer to overwrite approved data. What should improve?",
    "answers": [
      "Restricted write access and controlled version promotion",
      "Read-only access for the training service only",
      "A longer bucket description",
      "More frequent unreviewed overwrites"
    ],
    "why": "Controlled writes and versioned approvals reduce unauthorized modifications; restricting readers alone leaves tampering possible."
  },
  {
    "id": "ai-extra-3-027",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A team receives a signed dataset from a vendor. Which review remains necessary?",
    "answers": [
      "Validate content suitability and behavior-related risks",
      "Skip all data-quality checks",
      "Assume no harmful records exist",
      "Treat the signature as permission for every use"
    ],
    "why": "A trusted signature supports origin and integrity; it does not establish that content is safe or appropriate."
  },
  {
    "id": "ai-extra-3-028",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A new dataset dramatically changes a model's behavior on one customer segment. What should be investigated?",
    "answers": [
      "Source changes, labels, representation, and possible manipulation",
      "The serving endpoint name",
      "The previous release notes",
      "The number of files"
    ],
    "why": "Segment-specific changes may reflect quality problems or targeted manipulation; investigate the learning inputs."
  },
  {
    "id": "ai-extra-3-029",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A poisoning incident is suspected in the latest training data. What evidence best supports comparison?",
    "answers": [
      "Immutable version history and trusted earlier snapshots",
      "The latest overwritten dataset",
      "The training console theme",
      "Today's model answer"
    ],
    "why": "Versioned trusted references help locate changes and reconstruct when compromised data entered the pipeline."
  },
  {
    "id": "ai-extra-3-030",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A team trains on user feedback without vetting it. What risk deserves attention?",
    "answers": [
      "Adversarial feedback influencing learning behavior",
      "Guaranteed elimination of bias",
      "Automatic verification of labels",
      "Elimination of distribution shift"
    ],
    "why": "Feedback is an input channel that can be manipulated; establish quality, trust, and abuse controls."
  },
  {
    "id": "ai-extra-3-031",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A pipeline's quality gate checks only total row count. What should it also assess?",
    "answers": [
      "Schema, distributions, labels, provenance, and suspicious changes",
      "Whether filenames are short",
      "The dataset's download popularity",
      "The team's preferred model"
    ],
    "why": "Counts cannot reveal many integrity or quality failures; validation should reflect credible manipulation paths."
  },
  {
    "id": "ai-extra-3-032",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A contributor can alter both a dataset and its reference hash. What does a matching hash prove?",
    "answers": [
      "Little about integrity without an independently trusted reference",
      "That tampering was impossible",
      "That the contributor had business approval",
      "That the data is unbiased"
    ],
    "why": "An attacker controlling content and reference can make them agree; protect the trusted comparison separately."
  },
  {
    "id": "ai-extra-3-033",
    "domain": 3,
    "objective": "3.3",
    "topic": "Training integrity",
    "q": "A team mixes unvetted generated examples into a validated corpus. What should occur before promotion?",
    "answers": [
      "Assess provenance, quality, contamination, and resulting behavior",
      "Assume generated examples are clean",
      "Deduplicate filenames",
      "Increase training duration"
    ],
    "why": "Generated content can introduce errors or compromised patterns; validate the change as learning material."
  },
  {
    "id": "ai-extra-3-034",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "An application stores its data-encryption key beside the encrypted training set with identical access. What is the weakness?",
    "answers": [
      "A single access compromise may expose both key and data",
      "Encryption cannot work on datasets",
      "The key is necessarily mathematically weak",
      "The dataset becomes anonymous"
    ],
    "why": "Separation and controlled key access reduce the chance that one storage compromise defeats encryption."
  },
  {
    "id": "ai-extra-3-035",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A service rotates an exposed API key but leaves old copies valid. What should happen?",
    "answers": [
      "Revoke compromised credentials and validate the replacement workflow",
      "Keep both keys indefinitely for convenience",
      "Rename the new credential",
      "Clear browser history"
    ],
    "why": "Rotation is incomplete if exposed credentials still authorize access; revoke them and confirm dependent services work safely."
  },
  {
    "id": "ai-extra-3-036",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A team uses TLS for inference traffic but logs raw requests publicly. What remains exposed?",
    "answers": [
      "Sensitive content through the logging path",
      "Packet headers",
      "Encrypted payload length",
      "Nothing because TLS was enabled"
    ],
    "why": "Transport protection applies to transit; plaintext logs create a separate disclosure path."
  },
  {
    "id": "ai-extra-3-037",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A model endpoint should reject bulk requests containing secrets. Which control is relevant?",
    "answers": [
      "Content-aware input controls combined with access and usage policy",
      "Faster tokenization",
      "A larger response buffer",
      "A more permissive endpoint"
    ],
    "why": "Inspection can help detect sensitive inputs but should complement authorization, minimization, and clearly defined use."
  },
  {
    "id": "ai-extra-3-038",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A team proposes cryptographic erasure of encrypted archives. What must be verified?",
    "answers": [
      "All relevant key copies and recovery paths are appropriately destroyed",
      "The primary filename is deleted",
      "The latest backup is renamed",
      "The archive index is hidden"
    ],
    "why": "Erasure depends on removing effective decryption capability, including retained keys and recoverable copies."
  },
  {
    "id": "ai-extra-3-039",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A provider offers customer-managed keys. What must the customer still assess?",
    "answers": [
      "Which data states and services the key actually protects",
      "Assume the provider can never see plaintext",
      "Assume deletion obligations disappear",
      "Assume access reviews are unnecessary"
    ],
    "why": "Customer key control can improve governance but its protection scope and runtime access must be understood."
  },
  {
    "id": "ai-extra-3-040",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "An AI platform decrypts data during computation. Which capability specifically addresses some in-use exposure?",
    "answers": [
      "An appropriately verified confidential-computing environment",
      "Storage encryption",
      "DNS filtering",
      "File compression"
    ],
    "why": "Confidential computing can protect specified computation boundaries; assess its threat model, attestation, and limitations."
  },
  {
    "id": "ai-extra-3-041",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A shared secret appears in a prompt template stored in source control. What is the strongest remediation?",
    "answers": [
      "Revoke it, remove exposure, and use managed secret delivery",
      "Hide the repository in search results",
      "Replace the secret's variable name",
      "Add a comment warning users"
    ],
    "why": "Exposed credentials should be treated as compromised; changing presentation does not revoke access."
  },
  {
    "id": "ai-extra-3-042",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "DLP blocks exact account numbers but leaks paraphrased sensitive narratives. What should be evaluated?",
    "answers": [
      "Semantic coverage, false negatives, and complementary controls",
      "The exact-match regular expression's length",
      "Output token price",
      "The number of blocked messages"
    ],
    "why": "Sensitive meaning may survive paraphrase; evaluate realistic disclosures instead of relying solely on exact matching."
  },
  {
    "id": "ai-extra-3-043",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A data access catalog grants access by business purpose. What should enforcement verify?",
    "answers": [
      "The request's identity, approved purpose, and applicable constraints",
      "The user's claimed purpose in free text",
      "The model's answer confidence",
      "The dataset's popularity"
    ],
    "why": "Purpose-based access requires verifiable attributes and policy enforcement, not untrusted assertions."
  },
  {
    "id": "ai-extra-3-044",
    "domain": 3,
    "objective": "3.4",
    "topic": "Cryptography and protection",
    "q": "A backup key is restored after a supposedly completed crypto-erasure. What follows?",
    "answers": [
      "The previous erasure assurance must be reassessed",
      "The data is still irrecoverable by definition",
      "A file extension changed",
      "The restoration automatically authorizes data reuse"
    ],
    "why": "Recovered decryption capability can invalidate claims that encrypted data was effectively erased."
  },
  {
    "id": "ai-extra-3-045",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A model registry stores approved versions but serving accepts arbitrary URLs. What control is missing?",
    "answers": [
      "Deployment enforcement of the approved registry",
      "A registry dashboard",
      "A larger artifact cache",
      "More model documentation"
    ],
    "why": "An approval registry does not constrain deployment unless the release path checks and enforces it."
  },
  {
    "id": "ai-extra-3-046",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A model card omits known limitations for the intended population. What should be added?",
    "answers": [
      "Relevant evaluation results, limitations, and intended-use boundaries",
      "Parameter count",
      "Developer biographies",
      "The model's promotional slogan"
    ],
    "why": "Useful documentation helps users and owners understand where evidence supports use and where it does not."
  },
  {
    "id": "ai-extra-3-047",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "The pipeline deploys a model before security validation finishes. What should change?",
    "answers": [
      "Gate promotion on required validation and approval",
      "Email the results afterward",
      "Label the release experimental",
      "Expand the deployment audience"
    ],
    "why": "A release gate should prevent unvalidated artifacts from reaching the approved production scope."
  },
  {
    "id": "ai-extra-3-048",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A team changes retrieval documents without tracking versions. What investigation problem follows?",
    "answers": [
      "It cannot reliably reconstruct the context used for past outputs",
      "The model loses all learned weights",
      "The transport certificate becomes invalid",
      "All prompts become deterministic"
    ],
    "why": "Retrieval content is part of system state; versioning supports reproducibility and incident analysis."
  },
  {
    "id": "ai-extra-3-049",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A model update requires a new tokenizer but rollback restores only weights. What should be fixed?",
    "answers": [
      "Version and restore compatible dependent components together",
      "Rename the weights",
      "Reduce the prompt length",
      "Rerun the old approval workflow"
    ],
    "why": "Recovery must restore a coherent serving configuration, including components affecting input processing."
  },
  {
    "id": "ai-extra-3-050",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A serving credential is embedded directly in a model package. What should the team do?",
    "answers": [
      "Remove and revoke it, then separate managed runtime credentials",
      "Encrypt the package filename",
      "Change the model version string",
      "Keep the package in a registry"
    ],
    "why": "Packaging secrets broadens exposure and complicates rotation; manage credentials separately with narrow runtime access."
  },
  {
    "id": "ai-extra-3-051",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A release has high accuracy but no owner. What should approval require?",
    "answers": [
      "Accountable lifecycle ownership and support responsibilities",
      "An improved benchmark",
      "A vendor contract number",
      "A larger deployment cluster"
    ],
    "why": "Operational security requires ownership for decisions, monitoring, maintenance, and response after release."
  },
  {
    "id": "ai-extra-3-052",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A pipeline automatically promotes any model with a higher average score. What is missing?",
    "answers": [
      "Security and use-case acceptance criteria alongside performance",
      "Automatic score rounding",
      "A shorter release interval",
      "Developer convenience"
    ],
    "why": "Performance improvements can coexist with new vulnerabilities or unacceptable subgroup failures; promotion needs multiple criteria."
  },
  {
    "id": "ai-extra-3-053",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "An old approved model is no longer supported. What should the owner evaluate?",
    "answers": [
      "Exposure, compensating controls, replacement, and retirement timing",
      "Assume prior approval remains sufficient forever",
      "Its original benchmark",
      "Whether the model name is familiar"
    ],
    "why": "Approval does not remove lifecycle risk from unsupported components; reassess continued use and mitigation."
  },
  {
    "id": "ai-extra-3-054",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A model decommission request ignores deployed replicas. What should be verified?",
    "answers": [
      "All serving copies, credentials, dependencies, and retention obligations",
      "That its catalog entry is hidden",
      "That one endpoint returns an error",
      "That the primary developer agrees"
    ],
    "why": "Retirement must address operational copies and access paths, not just administrative visibility."
  },
  {
    "id": "ai-extra-3-055",
    "domain": 3,
    "objective": "3.5",
    "topic": "Model governance",
    "q": "A team plans machine unlearning after removing records. What should reviewers require?",
    "answers": [
      "Evidence that the chosen method meets the specific removal objective",
      "A guarantee inferred from the method's name",
      "Deletion of the source CSV",
      "A shorter training run"
    ],
    "why": "Removing source records does not prove trained influence is gone; validate the method and relevant obligations."
  },
  {
    "id": "ai-extra-3-056",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A model endpoint allows unlimited high-volume queries. Which combined risk deserves assessment?",
    "answers": [
      "Extraction exposure and resource exhaustion",
      "Physical theft",
      "Stale DNS records",
      "Delayed software procurement"
    ],
    "why": "Unlimited access can enable copying behavior and exhaust compute; rate limits and access controls reduce exposure."
  },
  {
    "id": "ai-extra-3-057",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "An attacker replaces production weights with modified weights. Which security property is directly violated?",
    "answers": [
      "Model integrity",
      "System availability",
      "Dataset portability",
      "User-interface consistency"
    ],
    "why": "Unauthorized changes to the deployed artifact compromise integrity even if the service remains online."
  },
  {
    "id": "ai-extra-3-058",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A model watermark is detected in a suspected copy. What should investigators conclude?",
    "answers": [
      "It is supporting evidence that needs contextual validation",
      "It conclusively proves ownership in every case",
      "It restores the copied model automatically",
      "It prevents all future extraction"
    ],
    "why": "Watermarking can support attribution but depends on robustness, detection quality, and surrounding evidence."
  },
  {
    "id": "ai-extra-3-059",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A service throttles every user identically, allowing one tenant to consume the shared quota. What should improve?",
    "answers": [
      "Tenant-aware limits and isolation of resource budgets",
      "Longer output messages",
      "A shared administrator token",
      "A larger public status page"
    ],
    "why": "Per-tenant budgets reduce cross-tenant interference that a single global limit may not address."
  },
  {
    "id": "ai-extra-3-060",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A model service returns detailed internal exceptions to public clients. What should change?",
    "answers": [
      "Limit external details while retaining protected diagnostic evidence",
      "Publish all stack traces for transparency",
      "Remove internal error logs entirely",
      "Give clients deployment credentials"
    ],
    "why": "Errors should support troubleshooting without unnecessarily exposing internals, secrets, or exploitable information."
  },
  {
    "id": "ai-extra-3-061",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A protected model can be downloaded by any authenticated employee. What should be evaluated?",
    "answers": [
      "Whether artifact access exceeds business need",
      "Whether login exists",
      "Whether the model is compressed",
      "Whether downloads use HTTPS"
    ],
    "why": "Authentication alone does not establish authorization; access to proprietary weights should match approved roles."
  },
  {
    "id": "ai-extra-3-062",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A system silently substitutes an unvalidated fallback model during overload. What should be required?",
    "answers": [
      "An approved fallback with tested safety and functionality",
      "Any reachable model to preserve throughput",
      "A changed loading indicator",
      "A shorter service response"
    ],
    "why": "Availability recovery should not bypass security and use-case requirements through an unapproved dependency."
  },
  {
    "id": "ai-extra-3-063",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A public endpoint returns full probability vectors unnecessarily. What should designers assess?",
    "answers": [
      "Whether outputs expose avoidable information useful for inference attacks",
      "Whether probabilities sum to one",
      "The output language",
      "The JSON indentation"
    ],
    "why": "Output detail can expand adversarial information; provide what the use case requires and assess exposure."
  },
  {
    "id": "ai-extra-3-064",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A provider says weight encryption makes model theft impossible. What is the strongest correction?",
    "answers": [
      "Runtime access and query-based extraction still need controls",
      "Encryption prevents all behavioral imitation",
      "The encryption algorithm matters",
      "An encrypted file requires no monitoring"
    ],
    "why": "Stored-weight encryption does not address every path to access plaintext or imitate model behavior."
  },
  {
    "id": "ai-extra-3-065",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A capacity test ignores maximum output length. What should be added?",
    "answers": [
      "Resource testing for costly input and output combinations",
      "Average short prompts",
      "Successful login counts",
      "Idle GPU temperature"
    ],
    "why": "Compute and memory consumption depend on workload shape; test realistic worst-case approved requests and limits."
  },
  {
    "id": "ai-extra-3-066",
    "domain": 3,
    "objective": "3.6",
    "topic": "Confidentiality integrity and availability",
    "q": "A model artifact has a valid signature from a revoked signing key. What should validation do?",
    "answers": [
      "Apply the trust and revocation policy before accepting it",
      "Accept every mathematically valid signature",
      "Ignore signer identity if the hash matches",
      "Trust the newest filename"
    ],
    "why": "Cryptographic verification must include current trust policy; signature validity alone is insufficient."
  },
  {
    "id": "ai-extra-3-067",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A foundation model's training sources are poorly documented. What should the customer do?",
    "answers": [
      "Assess uncertainty, restrictions, and compensating controls before approval",
      "Assume undocumented means unrestricted",
      "Treat all model outputs as public domain",
      "Skip supplier review if weights are downloadable"
    ],
    "why": "Missing provenance increases uncertainty; evaluate it explicitly against the intended use and requirements."
  },
  {
    "id": "ai-extra-3-068",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A third-party dataset license allows research but not commercial deployment. What should the team do?",
    "answers": [
      "Obtain suitable permission or choose an approved alternative",
      "Assume fine-tuning changes the license automatically",
      "Remove the license file",
      "Deploy behind authentication"
    ],
    "why": "Technical transformations do not automatically remove contractual or licensing restrictions on use."
  },
  {
    "id": "ai-extra-3-069",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A model repository's maintainer account is compromised. Which assurance is most useful?",
    "answers": [
      "Verified artifact origin and controlled trusted version references",
      "The repository's popularity",
      "A model description copied from the page",
      "The last download timestamp"
    ],
    "why": "A compromised publication channel can distribute altered artifacts; trust must be anchored beyond current page claims."
  },
  {
    "id": "ai-extra-3-070",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A dependency inventory omits the tokenizer and preprocessing library. What should improve?",
    "answers": [
      "Include components that influence actual inference behavior",
      "Count model layers",
      "List the GPU vendor",
      "List frontend dependencies"
    ],
    "why": "Preprocessing and tokenization affect behavior and may introduce vulnerabilities or compatibility risks."
  },
  {
    "id": "ai-extra-3-071",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A vendor's model package runs arbitrary code during loading. What should the evaluator do?",
    "answers": [
      "Use isolated inspection and avoid unsafe deserialization paths",
      "Load it on a privileged production host",
      "Assume weights cannot execute code",
      "Disable endpoint controls to simplify testing"
    ],
    "why": "Some packaging and loading mechanisms can execute code; isolate and validate untrusted artifacts."
  },
  {
    "id": "ai-extra-3-072",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A supplier fixes a compromised dataset version without identifying downstream users. What should customers verify?",
    "answers": [
      "Whether their artifacts used the affected version and need remediation",
      "Whether the newest download is faster",
      "The supplier's revised logo",
      "The new dataset file size"
    ],
    "why": "Versioned dependency records connect supplier incidents to affected training runs and deployed models."
  },
  {
    "id": "ai-extra-3-073",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A team mirrors a third-party model internally. What responsibility remains?",
    "answers": [
      "Maintain provenance, licensing, updates, and validation",
      "Assume mirroring makes the model internally authored",
      "Ignore upstream disclosures",
      "Treat internal location as proof of safety"
    ],
    "why": "Hosting location does not erase origin, rights, vulnerabilities, or the need to track upstream changes."
  },
  {
    "id": "ai-extra-3-074",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A vendor provides only a broad security certificate. What additional evidence matters for a specific model?",
    "answers": [
      "Artifact provenance and evaluations relevant to the intended use",
      "Its customer count",
      "Its headquarters location",
      "Its model naming convention"
    ],
    "why": "Organizational assurance and artifact-specific trust address different questions; both require appropriate scope."
  },
  {
    "id": "ai-extra-3-075",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A trusted dataset is combined with unverified web-scraped additions. What should approval cover?",
    "answers": [
      "The combined version and the new sources' rights and integrity",
      "The previously approved portion",
      "Total dataset size",
      "The oldest source's reputation"
    ],
    "why": "Approval of an earlier corpus does not automatically cover added material or its new risks."
  },
  {
    "id": "ai-extra-3-076",
    "domain": 3,
    "objective": "3.7",
    "topic": "Data and model supply chains",
    "q": "A dependency scanner reports no software vulnerabilities. What AI supply-chain risks may still remain?",
    "answers": [
      "Poisoned data, malicious model behavior, and unclear usage rights",
      "Vulnerabilities listed in the scanner",
      "None if package versions are current",
      "None if the model passes a syntax check"
    ],
    "why": "Software scanning is valuable but does not establish data integrity, model behavior, or legal permission."
  },
  {
    "id": "ai-extra-4-001",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A RAG application checks permissions only when documents are indexed. What is missing?",
    "answers": [
      "Authorization reflecting the requester at retrieval time",
      "A longer indexing interval",
      "Encryption of the search query",
      "A larger vector dimension"
    ],
    "why": "Indexing-time permissions can become stale or differ by requester; enforce current access before returning content."
  },
  {
    "id": "ai-extra-4-002",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "An agent trusts every response from an internal tool as an instruction. What should architecture enforce?",
    "answers": [
      "Treat tool content as data and constrain subsequent actions",
      "Give tool output higher authority than application policy",
      "Allow responses to grant credentials",
      "Replace tool authentication with textual assurances"
    ],
    "why": "Internal tools can return compromised or attacker-controlled content; content cannot expand action authority."
  },
  {
    "id": "ai-extra-4-003",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A private inference endpoint can retrieve arbitrary public URLs. What should be assessed?",
    "answers": [
      "Server-side request forgery and outbound access boundaries",
      "Whether the model is local",
      "Whether requests use natural language",
      "Model download licensing"
    ],
    "why": "A URL-fetch capability can reach unintended destinations; enforce network and destination controls independently of generated requests."
  },
  {
    "id": "ai-extra-4-004",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A company is choosing hosted versus self-managed inference. What is the strongest decision basis?",
    "answers": [
      "Data requirements, capabilities, threats, cost, and operational capacity",
      "Assume self-hosting is always safer",
      "Assume hosting removes all customer responsibility",
      "Choose only by parameter count"
    ],
    "why": "Deployment choice changes responsibilities and controls; evaluate the complete operating context rather than a universal preference."
  },
  {
    "id": "ai-extra-4-005",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A system prompt contains a rule against disclosing secrets that are included in every context. What should change?",
    "answers": [
      "Keep unnecessary secrets out of model context",
      "Repeat the rule more often only",
      "Increase answer creativity",
      "Assume the prompt establishes confidentiality"
    ],
    "why": "Avoiding exposure is stronger than relying on model obedience after sensitive material is supplied."
  },
  {
    "id": "ai-extra-4-006",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A tenant identifier in a query is accepted directly from user text. What should determine tenant scope?",
    "answers": [
      "Authenticated application context and enforced policy",
      "Whatever tenant the prompt names",
      "The nearest embedding cluster",
      "The model's inferred employer"
    ],
    "why": "Untrusted query content cannot establish tenant authority; derive scope from verified identity and permissions."
  },
  {
    "id": "ai-extra-4-007",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A security architect draws only the model and frontend. What should the diagram add?",
    "answers": [
      "Data stores, identities, tools, dependencies, and trust boundaries",
      "A larger model icon",
      "Training-loss curves",
      "Token prices"
    ],
    "why": "Threat modeling needs the actual paths where data and authority move, including supporting services."
  },
  {
    "id": "ai-extra-4-008",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A chat response is inserted into a web page as raw HTML. Which control is most relevant?",
    "answers": [
      "Safe rendering and context-appropriate output encoding",
      "Prompt phrasing",
      "Model weight signing",
      "Dataset lineage"
    ],
    "why": "Generated text is untrusted output; browser rendering needs controls against executable or unsafe markup."
  },
  {
    "id": "ai-extra-4-009",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "An assistant can call an arbitrary command interpreter for a narrow reporting task. What architecture is preferable?",
    "answers": [
      "A constrained reporting API with validated parameters",
      "A broader shell with a warning prompt",
      "Administrator shell access with logging only",
      "A hidden unrestricted console"
    ],
    "why": "A task-specific interface limits available operations and supports enforceable validation and authorization."
  },
  {
    "id": "ai-extra-4-010",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A guardrail service fails during a request. For an action that requires its approval, what should happen?",
    "answers": [
      "Deny or safely defer the action according to policy",
      "Execute by default to preserve speed",
      "Let the model invent an approval",
      "Skip audit evidence"
    ],
    "why": "Required authorization or safety gates should not silently disappear during component failure."
  },
  {
    "id": "ai-extra-4-011",
    "domain": 4,
    "objective": "4.1",
    "topic": "Architecture and trust boundaries",
    "q": "A system optimizes latency by bypassing retrieval permission checks. What should leadership require?",
    "answers": [
      "A design meeting both access requirements and acceptable performance",
      "A permanent security exception without review",
      "A statement that faster access is safer",
      "Removal of per-user identities"
    ],
    "why": "Performance tradeoffs must not silently invalidate mandatory access boundaries; redesign or explicitly reassess the use case."
  },
  {
    "id": "ai-extra-4-012",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "Two tenants share inference infrastructure. What should prevent cross-tenant data disclosure?",
    "answers": [
      "Enforced isolation across memory, caches, storage, and request context",
      "Distinct chat colors",
      "Separate billing labels",
      "A larger accelerator"
    ],
    "why": "Isolation must cover the actual shared resources and execution paths where tenant data can cross boundaries."
  },
  {
    "id": "ai-extra-4-013",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A training job runs as a host administrator. What should be reduced?",
    "answers": [
      "Execution privilege and host access",
      "The number of labels",
      "The dataset's line length",
      "The model output size"
    ],
    "why": "Training code and dependencies should run with least privilege and appropriate isolation to limit compromise impact."
  },
  {
    "id": "ai-extra-4-014",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "An inference container has unrestricted outbound network access. What should security design consider?",
    "answers": [
      "Destination allowlists and necessary egress restrictions",
      "Whether incoming traffic uses TLS",
      "More verbose prompts",
      "Public model ratings"
    ],
    "why": "Outbound controls limit exfiltration and unintended service access that inbound encryption does not address."
  },
  {
    "id": "ai-extra-4-015",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A long-running request exhausts accelerator memory. Which control is most relevant?",
    "answers": [
      "Bound input size, concurrency, and execution resources",
      "Rotate user passwords",
      "Disable access logs",
      "Rename the endpoint"
    ],
    "why": "Resource limits must constrain expensive workloads before they destabilize shared infrastructure."
  },
  {
    "id": "ai-extra-4-016",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A lab downloads untrusted training packages. Where should initial evaluation occur?",
    "answers": [
      "An isolated environment without production credentials",
      "A production deployment host",
      "A shared privileged workstation session",
      "A live data-processing pipeline"
    ],
    "why": "Isolation limits the consequences of malicious code or artifacts during evaluation."
  },
  {
    "id": "ai-extra-4-017",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A model platform's management interface is publicly reachable with default credentials. What is the priority?",
    "answers": [
      "Restrict exposure and replace insecure defaults through approved administration",
      "Compress the model",
      "Document the default password",
      "Increase instance capacity"
    ],
    "why": "Exposed administrative access creates a direct compromise path that model-specific controls do not resolve."
  },
  {
    "id": "ai-extra-4-018",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A cloud training workload uses a public bucket for temporary sensitive files. What should change?",
    "answers": [
      "Protect temporary storage with appropriate access and lifecycle controls",
      "Protect only permanent datasets",
      "Assume temporary files disappear immediately",
      "Shorten filenames"
    ],
    "why": "Intermediate artifacts can retain sensitive data; temporary status does not remove confidentiality requirements."
  },
  {
    "id": "ai-extra-4-019",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A failover region lacks the required data-handling controls. What should continuity design do?",
    "answers": [
      "Validate or redesign failover before approving it",
      "Fail over first and review later",
      "Assume any region is equivalent",
      "Synchronize model weights"
    ],
    "why": "Recovery must preserve security and handling requirements, not just restore service availability."
  },
  {
    "id": "ai-extra-4-020",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A GPU host is secure logically but exposed to physical tampering. What should be reviewed?",
    "answers": [
      "Physical access, environmental protection, and relevant hardware trust",
      "Output filters",
      "Model cards",
      "Prompt length"
    ],
    "why": "AI infrastructure still depends on physical and environmental controls in addition to logical isolation."
  },
  {
    "id": "ai-extra-4-021",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "An inference service runs beside a sensitive management service with broad shared permissions. What should improve?",
    "answers": [
      "Workload separation and narrowly scoped trust relationships",
      "A shared service name",
      "Common logging format",
      "Uniform model versions"
    ],
    "why": "Unnecessary co-location and shared authority can expand lateral-movement opportunities and compromise impact."
  },
  {
    "id": "ai-extra-4-022",
    "domain": 4,
    "objective": "4.2",
    "topic": "Infrastructure isolation",
    "q": "A compute quota is enforced per API key, but users can create unlimited keys. What should limits consider?",
    "answers": [
      "Account or tenant-level aggregate usage",
      "Each individual key",
      "Daily average latency",
      "Response text length"
    ],
    "why": "Limits can be bypassed through identity multiplication unless the relevant aggregate principal is also constrained."
  },
  {
    "id": "ai-extra-4-023",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A build runner can both train a model and approve its production release. What should be reviewed?",
    "answers": [
      "Separation of duties and controlled promotion authority",
      "The runner's hostname",
      "The number of training epochs",
      "Artifact compression"
    ],
    "why": "Separating creation from approval reduces the chance that one compromised or mistaken actor bypasses release controls."
  },
  {
    "id": "ai-extra-4-024",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A CI pipeline downloads the latest model on every build without pinning it. What should improve?",
    "answers": [
      "Verified immutable references and reviewed dependency changes",
      "The deployment schedule",
      "The dashboard layout",
      "The log retention period"
    ],
    "why": "Unpinned mutable dependencies can change behavior without an intentional reviewed release."
  },
  {
    "id": "ai-extra-4-025",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A serving image is patched, but its training-stage dependencies remain vulnerable. What should be assessed?",
    "answers": [
      "Security across the complete build and training pipeline",
      "The runtime image",
      "End-user browser versions",
      "The model's input syntax"
    ],
    "why": "Training and build compromise can affect resulting artifacts even when the final serving container is patched."
  },
  {
    "id": "ai-extra-4-026",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A release gate checks model accuracy but not the retrieval corpus version. What should be included?",
    "answers": [
      "Versioned evaluation of the full deployed system",
      "The weights' parameter count",
      "User satisfaction comments",
      "The CI runner's uptime"
    ],
    "why": "Behavior depends on model, data, retrieval, tools, and configuration; validate the integrated release state."
  },
  {
    "id": "ai-extra-4-027",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A pipeline accepts unsigned artifacts from an unauthenticated storage path. Which control combination is strongest?",
    "answers": [
      "Trusted artifact verification and authenticated controlled retrieval",
      "An obscure URL",
      "A larger download timeout",
      "Filename validation"
    ],
    "why": "Both origin and transfer access matter; obscurity and filenames do not establish artifact authenticity."
  },
  {
    "id": "ai-extra-4-028",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A fine-tuning run cannot be reproduced because preprocessing settings were lost. What should be retained?",
    "answers": [
      "Versioned transformation configuration and dataset references",
      "The final model nickname",
      "The GPU's purchase date",
      "A screenshot of training progress"
    ],
    "why": "Reproducibility requires the inputs and transformations that determine the trained artifact, not just its output file."
  },
  {
    "id": "ai-extra-4-029",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A deployment pipeline embeds production tokens in build logs. What is required?",
    "answers": [
      "Revoke exposed tokens and correct secret handling and logging",
      "Delete the latest job title",
      "Restrict model downloads",
      "Reduce training batch size"
    ],
    "why": "Logs can leak active credentials; fix the exposure and invalidate compromised authorization material."
  },
  {
    "id": "ai-extra-4-030",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A canary model receives all privileged-user traffic first. What should rollout design reconsider?",
    "answers": [
      "Risk-based scope and consequences for the initial cohort",
      "Whether the deployment is called canary",
      "Whether users see a badge",
      "The container tag's length"
    ],
    "why": "A staged rollout should limit impact and expose representative evidence; concentrating high-impact users can increase risk."
  },
  {
    "id": "ai-extra-4-031",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A rollback artifact is approved, but the schema has changed incompatibly. What should release planning require?",
    "answers": [
      "Tested rollback across model, application, and data compatibility",
      "An older weight file",
      "A longer maintenance notice",
      "A second artifact signature"
    ],
    "why": "Rollback must restore a working compatible system; artifact availability alone does not prove recoverability."
  },
  {
    "id": "ai-extra-4-032",
    "domain": 4,
    "objective": "4.3",
    "topic": "Secure deployment pipelines",
    "q": "A developer bypasses CI to upload weights directly. What should enforce the intended release path?",
    "answers": [
      "Deployment permissions restricted to approved controlled workflows",
      "Written guidance",
      "Model-output filtering",
      "A changelog entry"
    ],
    "why": "A release process is ineffective if alternate write paths allow unapproved promotion."
  },
  {
    "id": "ai-extra-4-033",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "An output filter blocks prohibited phrases but an agent can still transfer money. What is missing?",
    "answers": [
      "Action-level authorization and transaction constraints",
      "A larger phrase list",
      "Lower model temperature",
      "A friendlier refusal message"
    ],
    "why": "Content filters do not reliably enforce downstream transaction authority or limits."
  },
  {
    "id": "ai-extra-4-034",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A tool schema permits arbitrary destinations for document export. What should be constrained?",
    "answers": [
      "Approved recipients, destinations, and data scope",
      "The tool's display name",
      "Response verbosity",
      "The order of JSON fields"
    ],
    "why": "Validate the action parameters that determine exposure; well-formed input can still request unauthorized disclosure."
  },
  {
    "id": "ai-extra-4-035",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A model can retry a denied operation through a different tool. What should architecture enforce?",
    "answers": [
      "Consistent policy across equivalent action paths",
      "Per-tool warning text",
      "Rate limits on the first tool",
      "A shorter retry delay"
    ],
    "why": "Policy must apply to the underlying resource and action, not just one interface that can be bypassed."
  },
  {
    "id": "ai-extra-4-036",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A workflow requires approval, but approval covers a draft that can change before execution. What should bind the gate?",
    "answers": [
      "The final action parameters and approved scope",
      "The initial conversation topic",
      "The model name",
      "A general user greeting"
    ],
    "why": "Approval must authorize what actually executes; changed material parameters require renewed validation."
  },
  {
    "id": "ai-extra-4-037",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A sandbox blocks filesystem writes but allows unrestricted network sends. What should reviewers conclude?",
    "answers": [
      "Isolation is incomplete for exfiltration threats",
      "All harmful behavior is prevented",
      "The model is now anonymous",
      "No further action controls are needed"
    ],
    "why": "Sandbox protection depends on permitted capabilities; blocking one channel leaves others available."
  },
  {
    "id": "ai-extra-4-038",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A load test uses only valid short prompts. What security testing is missing?",
    "answers": [
      "Boundary, malformed, oversized, and resource-intensive inputs",
      "More screenshots of success",
      "Model naming consistency",
      "Keyboard shortcuts"
    ],
    "why": "Robustness needs testing beyond normal paths, including inputs stressing validation and resource controls."
  },
  {
    "id": "ai-extra-4-039",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A safety filter rejects necessary benign medical terms. What should the team do?",
    "answers": [
      "Evaluate false positives and adjust controls without abandoning safeguards",
      "Disable every safety control",
      "Ignore user impact indefinitely",
      "Assume every rejection is correct"
    ],
    "why": "Guardrails should be evaluated for both harmful misses and unnecessary blocking within the approved use case."
  },
  {
    "id": "ai-extra-4-040",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A guardrail returns approve after a parsing error. What should be corrected?",
    "answers": [
      "Use explicit validated decisions and safe error handling",
      "Improve error wording",
      "Increase output tokens",
      "Reduce monitoring"
    ],
    "why": "Malformed responses should not become approvals; decision parsing and error behavior are part of the security boundary."
  },
  {
    "id": "ai-extra-4-041",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "A document includes hidden instructions to invoke an admin tool. Which control provides the strongest execution boundary?",
    "answers": [
      "The tool rejects unauthorized callers and actions",
      "A prompt asking the document to be honest",
      "A larger context window",
      "A citation attached to the document"
    ],
    "why": "Independent tool authorization limits consequences even when the model follows malicious content."
  },
  {
    "id": "ai-extra-4-042",
    "domain": 4,
    "objective": "4.4",
    "topic": "Guardrails and action constraints",
    "q": "An agent can invoke a dangerous tool repeatedly after approval of one action. What should approval controls specify?",
    "answers": [
      "Operation count, parameters, scope, and validity period",
      "The conversation's first message",
      "The tool vendor",
      "Output language"
    ],
    "why": "Authorization should be bounded to the intended action rather than interpreted as unlimited future permission."
  },
  {
    "id": "ai-extra-4-043",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A team shares one production token among all agents. What design is stronger?",
    "answers": [
      "Distinct attributable identities with scoped credentials",
      "One more powerful shared token",
      "A secret embedded in every prompt",
      "Anonymous access behind an obscure URL"
    ],
    "why": "Distinct identities support least privilege, revocation, and attribution without broad shared authority."
  },
  {
    "id": "ai-extra-4-044",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "An API accepts a user-supplied string saying administrator as identity proof. What should replace this?",
    "answers": [
      "Verified authentication with trusted claims",
      "A longer claimed role name",
      "Model-generated identity confirmation",
      "A hidden HTML input"
    ],
    "why": "Identity assertions must be verified through a trusted authentication mechanism, not accepted from untrusted content."
  },
  {
    "id": "ai-extra-4-045",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A non-human agent needs ongoing API access. Which pattern is most appropriate?",
    "answers": [
      "Managed workload identity with narrowly scoped credentials",
      "A shared human password",
      "A reusable password in source code",
      "A screenshot of an employee's MFA challenge"
    ],
    "why": "Workload authentication should support automation without borrowing broad human credentials or defeating lifecycle controls."
  },
  {
    "id": "ai-extra-4-046",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A federated login succeeds, but an application trusts any token issuer. What must be validated?",
    "answers": [
      "Trusted issuer, audience, signature, expiry, and relevant claims",
      "That the token parses",
      "That it contains an email field",
      "That it is base64 encoded"
    ],
    "why": "A syntactically valid token is not necessarily authentic or intended for this application."
  },
  {
    "id": "ai-extra-4-047",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "An agent forwards a user's token to an unrelated tool. What should be reviewed?",
    "answers": [
      "Audience restrictions and appropriate delegated authorization",
      "Token string length",
      "Tool documentation style",
      "Model response quality"
    ],
    "why": "Tokens should be used only for authorized audiences and purposes; forwarding can expose credentials or enable misuse."
  },
  {
    "id": "ai-extra-4-048",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "An agent stores long-lived credentials in conversation memory. What should change?",
    "answers": [
      "Use protected secret management outside model-visible memory",
      "Summarize the credential",
      "Translate the credential",
      "Label the memory private"
    ],
    "why": "Conversation memory is not a secure secret store; limit exposure and use controlled credential delivery."
  },
  {
    "id": "ai-extra-4-049",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A user signs out, but a delegated agent session remains active indefinitely. What should design address?",
    "answers": [
      "Session lifetime, revocation, and delegated authority termination",
      "A goodbye message",
      "Model context size",
      "Output formatting"
    ],
    "why": "Delegated access needs lifecycle rules so authority does not persist beyond intended sessions or approvals."
  },
  {
    "id": "ai-extra-4-050",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A critical administrator account uses password-only authentication. What should be considered?",
    "answers": [
      "Stronger authentication appropriate to privileged access",
      "A longer model description",
      "A rate limit on inference tokens",
      "An AI warning banner"
    ],
    "why": "Administrative compromise affects the entire platform; apply appropriate strong authentication and privileged-access controls."
  },
  {
    "id": "ai-extra-4-051",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "A tool rotates its credentials but old agents keep cached copies. What should the platform support?",
    "answers": [
      "Credential refresh and reliable revocation handling",
      "Silent fallback to a shared admin password",
      "Indefinite acceptance of cached secrets",
      "Embedding replacements in user-visible chat"
    ],
    "why": "Rotation and revocation must propagate safely to clients without creating insecure fallback access."
  },
  {
    "id": "ai-extra-4-052",
    "domain": 4,
    "objective": "4.5",
    "topic": "Authentication and identity",
    "q": "An agent acts for multiple users through one service identity. What should authorization preserve?",
    "answers": [
      "The initiating user's context and the agent's limited authority",
      "The service identity's broad permissions",
      "The last user's chat text",
      "The user's display name"
    ],
    "why": "Delegation should not let a broad service account override the specific user's resource permissions."
  },
  {
    "id": "ai-extra-4-053",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A retrieval tool has read access to every tenant because filtering happens in the prompt. What should change?",
    "answers": [
      "Enforce tenant-aware access in the retrieval service",
      "Strengthen the prompt wording",
      "Increase embedding dimensions",
      "Remove citations"
    ],
    "why": "Model instructions cannot reliably substitute for resource-level tenant authorization."
  },
  {
    "id": "ai-extra-4-054",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "An agent asks for temporary production access for one investigation. Which pattern fits least privilege?",
    "answers": [
      "Approved just-in-time access limited by task and duration",
      "Permanent global administrator access",
      "A shared credential copied from another team",
      "Unlogged wildcard access"
    ],
    "why": "Temporary scoped authorization reduces standing privilege while preserving an accountable approval path."
  },
  {
    "id": "ai-extra-4-055",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A model's confidence score determines whether it may execute a privileged action. What should determine authorization instead?",
    "answers": [
      "Verified identity, policy, resource, and action constraints",
      "The longest generated rationale",
      "The vendor benchmark",
      "The model's self-reported seniority"
    ],
    "why": "Prediction confidence describes model uncertainty, not an entitlement to access resources or perform actions."
  },
  {
    "id": "ai-extra-4-056",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A tool checks authorization only when a session begins. What else should be considered?",
    "answers": [
      "Per-request checks reflecting current permissions and action scope",
      "The initial greeting",
      "The model's startup timestamp",
      "An annual role review"
    ],
    "why": "Permissions or targets can change during a session; critical operations need current authorization."
  },
  {
    "id": "ai-extra-4-057",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "An employee changes departments but retains the assistant's old document access. What should happen?",
    "answers": [
      "Update entitlements and verify derived access paths",
      "Update the email signature",
      "Retrain the model",
      "Clear public browser caches"
    ],
    "why": "Access should follow the current role across retrieval, caches, and delegated capabilities."
  },
  {
    "id": "ai-extra-4-058",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "Two agents can each approve the other's payment requests. What should review examine?",
    "answers": [
      "Whether the workflow undermines separation of duties",
      "Whether both models are accurate",
      "Their total token budget",
      "Their language settings"
    ],
    "why": "Mutual automated approval may defeat intended independent authorization and accountability."
  },
  {
    "id": "ai-extra-4-059",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "An authorization rule uses data sensitivity, user clearance, and purpose. Which approach is most closely associated?",
    "answers": [
      "Attribute-based access control",
      "Round-robin routing",
      "Text summarization",
      "Dataset compression"
    ],
    "why": "Attribute-based policies evaluate relevant subject, resource, action, and contextual attributes."
  },
  {
    "id": "ai-extra-4-060",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A tool accepts a user-approved read request but changes the HTTP method to delete. What must enforcement check?",
    "answers": [
      "The actual operation and resource at execution",
      "The original chat intention",
      "Whether a session exists",
      "Whether the URL uses HTTPS"
    ],
    "why": "Authorization must cover the executed action; approval for reading cannot authorize deletion."
  },
  {
    "id": "ai-extra-4-061",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A parent agent delegates all its permissions to a child by default. What should improve?",
    "answers": [
      "Explicit bounded delegation with only necessary authority",
      "Automatic privilege inheritance without review",
      "A larger child context window",
      "A shared unrestricted session"
    ],
    "why": "Delegation should preserve limits and accountability rather than expand authority across an agent chain."
  },
  {
    "id": "ai-extra-4-062",
    "domain": 4,
    "objective": "4.6",
    "topic": "Authorization",
    "q": "A user manipulates a prompt to request another user's identifier. What should protect the target record?",
    "answers": [
      "Object-level authorization tied to the authenticated requester",
      "Hiding identifiers in the UI",
      "Limiting answer length",
      "Asking users to be polite"
    ],
    "why": "Predictable or user-supplied identifiers must not bypass authorization to the underlying object."
  },
  {
    "id": "ai-extra-4-063",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A retired agent's credential still works. What lifecycle control failed?",
    "answers": [
      "Deprovisioning and revocation verification",
      "Model fine-tuning",
      "Document deduplication",
      "Capacity forecasting"
    ],
    "why": "Retirement must terminate usable authority, not merely remove an agent from a dashboard."
  },
  {
    "id": "ai-extra-4-064",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A new tool integration creates service accounts without owners. What should provisioning require?",
    "answers": [
      "Accountability, purpose, scope, and lifecycle review",
      "A generated nickname",
      "A shared mailing list password",
      "A model compatibility score"
    ],
    "why": "Non-human identities need ownership and review just as human access does."
  },
  {
    "id": "ai-extra-4-065",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "Access reviews examine employees but ignore autonomous services. What should be included?",
    "answers": [
      "Agents, workloads, tools, and their effective permissions",
      "Account display colors",
      "Model popularity",
      "Publicly visible users"
    ],
    "why": "Non-human identities can carry substantial authority and should be part of entitlement governance."
  },
  {
    "id": "ai-extra-4-066",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "An investigator sees tool calls but cannot link them to an initiating user. What should auditing preserve?",
    "answers": [
      "Attributable user and workload identity across delegation",
      "Generated response text",
      "CPU utilization",
      "Final token counts"
    ],
    "why": "An auditable chain should connect who initiated the request, which agent acted, and what was authorized."
  },
  {
    "id": "ai-extra-4-067",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A session timeout closes the UI but leaves background actions running. What should policy define?",
    "answers": [
      "Whether and how delegated actions terminate or remain authorized",
      "The timeout message",
      "The model's response temperature",
      "How often the page refreshes"
    ],
    "why": "Session termination and background authority need explicit semantics; closing a window is not necessarily revocation."
  },
  {
    "id": "ai-extra-4-068",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A token accounting report shows one agent consuming most capacity. What should the owner assess?",
    "answers": [
      "Authorized use, misuse signals, and appropriate budget constraints",
      "Average totals across all agents",
      "Whether invoices were paid",
      "The agent avatar"
    ],
    "why": "Per-identity usage supports abuse detection and accountability that global averages can hide."
  },
  {
    "id": "ai-extra-4-069",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "An identity inventory lists accounts but not their downstream tool permissions. What should improve?",
    "answers": [
      "Visibility into effective entitlements and delegation relationships",
      "Longer account descriptions",
      "Contact names",
      "A newer spreadsheet template"
    ],
    "why": "Inventory should reveal usable authority, not just account existence, to support meaningful reviews."
  },
  {
    "id": "ai-extra-4-070",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "An emergency access account was used during an incident. What should follow?",
    "answers": [
      "Review use, revoke temporary authority, and retain evidence",
      "Keep emergency permissions permanently",
      "Delete all exceptional access logs",
      "Share its password for future convenience"
    ],
    "why": "Emergency access should remain accountable and bounded, with post-use verification and cleanup."
  },
  {
    "id": "ai-extra-4-071",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A terminated contractor's agent remains authorized through a separate service account. What should offboarding cover?",
    "answers": [
      "Delegated and dependent non-human access tied to the person",
      "The contractor's laptop",
      "The human SSO account",
      "The email mailbox"
    ],
    "why": "Offboarding must trace authority beyond the human login to agents, tokens, and service dependencies."
  },
  {
    "id": "ai-extra-4-072",
    "domain": 4,
    "objective": "4.7",
    "topic": "Identity lifecycle and audit",
    "q": "A periodic review confirms role names but never tests actual permissions. What stronger evidence is needed?",
    "answers": [
      "Effective-access verification against approved tasks and resources",
      "Manager familiarity with account names",
      "The number of roles",
      "Whether a policy document exists"
    ],
    "why": "Nominal roles can differ from actual granted authority; review the permissions the system really enforces."
  },
  {
    "id": "ai-extra-5-001",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "An AI service launches without an on-call owner. What should release readiness require?",
    "answers": [
      "Named response ownership and escalation coverage",
      "A model accuracy threshold",
      "An available status page",
      "A vendor account manager"
    ],
    "why": "Production readiness includes who detects, assesses, and responds to failures outside development hours."
  },
  {
    "id": "ai-extra-5-002",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "A runbook says restart the model for every alert. What should it add?",
    "answers": [
      "Threat-specific triage, containment choices, and evidence requirements",
      "A faster restart command",
      "The model's marketing description",
      "A larger service budget"
    ],
    "why": "Different failures require different responses; indiscriminate restarts can destroy evidence or leave the cause intact."
  },
  {
    "id": "ai-extra-5-003",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "A team has a kill switch but has never exercised it. What is the strongest next step?",
    "answers": [
      "Run an authorized controlled test against defined stopping criteria",
      "Assume its presence proves readiness",
      "Test it first during an uncontrolled outage",
      "Add it to the architecture diagram"
    ],
    "why": "A response control needs measured operational effectiveness, including whether harmful actions actually stop."
  },
  {
    "id": "ai-extra-5-004",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "A model rejects too many legitimate requests after an update. What should operations compare?",
    "answers": [
      "Observed rejection rates against approved baselines and impact",
      "Average model size",
      "The deployment nickname",
      "The total number of employees"
    ],
    "why": "Baselines connect behavioral change to service requirements and help distinguish meaningful degradation from normal variation."
  },
  {
    "id": "ai-extra-5-005",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "Operations cannot determine who owns the retrieval corpus. What should be assigned?",
    "answers": [
      "Ownership for data integrity, updates, and recovery",
      "A generic AI program sponsor",
      "A hardware procurement owner",
      "A social media contact"
    ],
    "why": "Supporting data stores need accountable operational owners because their changes affect the deployed system."
  },
  {
    "id": "ai-extra-5-006",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "A configuration change increases agent autonomy without a model update. What should happen?",
    "answers": [
      "Assess and approve the operational change and its risks",
      "Treat it as documentation only",
      "Skip validation because weights are unchanged",
      "Wait for a new vendor model"
    ],
    "why": "Authority and configuration changes can materially alter risk independent of model weights."
  },
  {
    "id": "ai-extra-5-007",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "An incident tabletop uses only ordinary server outages. What AI-specific scenario should be included?",
    "answers": [
      "Compromised retrieval content driving unauthorized tool requests",
      "A printer paper outage",
      "A standard password expiration reminder",
      "A scheduled billing renewal"
    ],
    "why": "A useful tabletop exercises the distinctive data, model, and agent paths that influence response decisions."
  },
  {
    "id": "ai-extra-5-008",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "An operations team receives a model but no acceptance criteria. What should handover include?",
    "answers": [
      "Expected behavior, limits, monitoring, ownership, and response conditions",
      "The weights' download URL",
      "The parameter count",
      "The developer's preferred prompts"
    ],
    "why": "Operational handover must enable teams to recognize unacceptable behavior and take authorized action."
  },
  {
    "id": "ai-extra-5-009",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "Automatic provider updates can change the model without notice. What should operations establish?",
    "answers": [
      "Change visibility, validation options, and rollback or containment plans",
      "A larger query quota",
      "A permanent approval of every version",
      "Monthly cost reporting"
    ],
    "why": "Uncontrolled changes can invalidate baselines and controls; plan how to detect and manage them."
  },
  {
    "id": "ai-extra-5-010",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "A response playbook requires legal input, but no escalation route exists. What should be fixed?",
    "answers": [
      "Defined contacts and decision paths before an incident",
      "A generic compliance statement",
      "Model-output filtering",
      "A longer incident template"
    ],
    "why": "Cross-functional participation must be actionable; an unnamed dependency can delay consequential decisions."
  },
  {
    "id": "ai-extra-5-011",
    "domain": 5,
    "objective": "5.1",
    "topic": "Operational readiness",
    "q": "An assistant is approved only for drafting but operations enables auto-send. What should be reviewed?",
    "answers": [
      "Whether deployed capabilities match the approved use case",
      "Whether messages are grammatical",
      "The token price",
      "Whether users like faster responses"
    ],
    "why": "Operational drift can expand authority beyond approval; verify effective capabilities against the approved baseline."
  },
  {
    "id": "ai-extra-5-012",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "Tool calls are logged without outcomes. What should telemetry add?",
    "answers": [
      "Success, denial, failure, and relevant action results",
      "The tool display name",
      "A total call counter",
      "The model greeting"
    ],
    "why": "A request record alone cannot show whether a consequential action actually occurred."
  },
  {
    "id": "ai-extra-5-013",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "Two services use unsynchronized clocks during an incident. What is at risk?",
    "answers": [
      "Reliable event ordering and correlation",
      "Model tokenization",
      "Dataset compression",
      "Interface accessibility"
    ],
    "why": "Time consistency and known offsets help reconstruct causal sequences across distributed components."
  },
  {
    "id": "ai-extra-5-014",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "A prompt log includes API keys entered by users. What should monitoring owners do?",
    "answers": [
      "Restrict exposure, remediate logging, and assess credential compromise",
      "Copy keys into general analyst dashboards",
      "Assume log access makes reuse authorized",
      "Keep all raw payloads indefinitely"
    ],
    "why": "Telemetry can itself expose secrets; protect evidence and handle credentials as potentially compromised."
  },
  {
    "id": "ai-extra-5-015",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "An alert records an unauthorized retrieval attempt but not the document version. What would improve analysis?",
    "answers": [
      "Version-linked retrieval evidence and authorization context",
      "A screenshot of the answer",
      "GPU temperature",
      "The response word count"
    ],
    "why": "Document versions and permission context help determine what was available and why access was attempted."
  },
  {
    "id": "ai-extra-5-016",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "An organization sends every raw completion to a third-party monitoring service. What must be assessed?",
    "answers": [
      "Data handling, access, purpose, and retention at that recipient",
      "The monitoring chart style",
      "Whether transport uses HTTPS",
      "The number of dashboard users"
    ],
    "why": "Monitoring creates a data-sharing path; encryption in transit does not resolve all handling obligations."
  },
  {
    "id": "ai-extra-5-017",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "Security logs are stored where the same agent can edit them. What should improve?",
    "answers": [
      "Independent integrity-protected logging with restricted write authority",
      "Log verbosity",
      "A larger context window",
      "More frequent agent summaries"
    ],
    "why": "An actor should not be able to erase or rewrite the evidence needed to investigate its behavior."
  },
  {
    "id": "ai-extra-5-018",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "A SIEM sees endpoint alerts but no agent tool events. What should integration add?",
    "answers": [
      "Correlated AI action telemetry relevant to detection and response",
      "The model's parameter count",
      "Frontend click colors",
      "Provider marketing feeds"
    ],
    "why": "Tool and decision events provide visibility into behavior that conventional endpoint alerts may miss."
  },
  {
    "id": "ai-extra-5-019",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "A team removes all identifiers from logs and can no longer investigate abuse. What is a better approach?",
    "answers": [
      "Minimize content while retaining controlled, necessary correlation identifiers",
      "Log no activity at all",
      "Publish all raw identities broadly",
      "Replace event records with aggregate totals only"
    ],
    "why": "Privacy-aware telemetry should balance justified investigative needs with access, retention, and minimization controls."
  },
  {
    "id": "ai-extra-5-020",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "An AI dashboard measures only response latency. What security visibility is missing?",
    "answers": [
      "Access anomalies, policy decisions, data exposure, and action behavior",
      "Average sentence length",
      "The application's theme",
      "The team's model preference"
    ],
    "why": "Operational speed is not evidence of secure behavior; monitor events tied to credible threats and controls."
  },
  {
    "id": "ai-extra-5-021",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "An analyst needs raw prompt evidence for a specific incident. What access pattern is strongest?",
    "answers": [
      "Controlled case-specific access with an audit trail",
      "Unrestricted access for every employee",
      "A public export for easier review",
      "Permanent access through a shared credential"
    ],
    "why": "Sensitive evidence should be available to authorized investigators without unnecessarily broad or enduring exposure."
  },
  {
    "id": "ai-extra-5-022",
    "domain": 5,
    "objective": "5.2",
    "topic": "Telemetry and evidence",
    "q": "A tool call is retried under a new request ID each time. What should tracing preserve?",
    "answers": [
      "A parent correlation linking the retry chain",
      "Separate total counts",
      "The latest completion",
      "The first token of each prompt"
    ],
    "why": "Retries need causal linkage to distinguish one workflow from unrelated actions and reconstruct effects."
  },
  {
    "id": "ai-extra-5-023",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "An agent that normally reads reports begins requesting bulk exports. What should the SOC examine?",
    "answers": [
      "Behavioral deviation, authority, and potential data exposure",
      "Whether the requests are grammatical",
      "Its average response rating",
      "The model's release popularity"
    ],
    "why": "A change in action pattern may indicate misuse or compromise; correlate it with context and authorization."
  },
  {
    "id": "ai-extra-5-024",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "A detection rule flags the word delete, including harmless explanations. What should improve?",
    "answers": [
      "Context-aware detection tied to actual attempted actions",
      "A longer keyword list",
      "Lower model temperature",
      "Fewer retained logs"
    ],
    "why": "Mentioning an action differs from executing it; focus signals on relevant behavior and consequences."
  },
  {
    "id": "ai-extra-5-025",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "An assistant sends traffic to an unfamiliar external destination. What should be correlated first?",
    "answers": [
      "Identity, tool invocation, data scope, and destination approval",
      "Total daily token spend",
      "Response color coding",
      "The newest dataset size"
    ],
    "why": "Outbound anomaly assessment needs to establish who caused it, what was sent, and whether it was authorized."
  },
  {
    "id": "ai-extra-5-026",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "A compromised document is retrieved by many sessions. Which detection strategy is strongest?",
    "answers": [
      "Correlate its version and related suspicious actions across sessions",
      "Review each final answer without shared context",
      "Look only at CPU metrics",
      "Wait for a user complaint"
    ],
    "why": "A shared retrieval dependency can create related incidents; cross-session correlation reveals scope and patterns."
  },
  {
    "id": "ai-extra-5-027",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "An AI system suddenly makes repeated failed privileged API calls. What should response triage consider?",
    "answers": [
      "Attempted misuse or compromise even if calls are denied",
      "Close the case because no call succeeded",
      "Disable denial logs",
      "Grant privileges to reduce errors"
    ],
    "why": "Denied attempts can show hostile or faulty behavior; successful prevention does not remove the need to investigate."
  },
  {
    "id": "ai-extra-5-028",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "A usage spike occurs during an approved load test. What should alert triage use?",
    "answers": [
      "Change records, test scope, and actual behavior",
      "The spike's magnitude",
      "The model name",
      "The operator's informal recollection"
    ],
    "why": "Context can distinguish authorized testing from abuse, but actual activity still needs to match the approved scope."
  },
  {
    "id": "ai-extra-5-029",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "A SOC assistant suggests closing alerts containing a phrase supplied by attackers. What is the concern?",
    "answers": [
      "Adversarial manipulation of triage decisions",
      "Guaranteed model theft",
      "A storage availability issue",
      "A UI defect"
    ],
    "why": "Attacker-controlled content can influence generated triage; validate recommendations against independent evidence and workflow rules."
  },
  {
    "id": "ai-extra-5-030",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "Repeated queries probe whether a named person was in training. What threat should be considered?",
    "answers": [
      "Membership inference attempts",
      "Routine model drift",
      "Ordinary artifact signing",
      "Standard capacity planning"
    ],
    "why": "Queries targeting individual training inclusion may indicate a privacy attack rather than normal task usage."
  },
  {
    "id": "ai-extra-5-031",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "Many near-identical queries map a model's decision boundary. What should monitoring assess?",
    "answers": [
      "Potential extraction or adversarial probing in context",
      "Whether each request passes syntax validation",
      "Billing payment status",
      "Keyboard activity"
    ],
    "why": "A single valid query may be benign; aggregate patterns can reveal efforts to imitate or attack the model."
  },
  {
    "id": "ai-extra-5-032",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "An agent's tool usage changes immediately after a memory update. What should investigation compare?",
    "answers": [
      "Memory content, update provenance, and the resulting action chain",
      "The current system uptime",
      "Dataset row count",
      "Overall benchmark scores"
    ],
    "why": "Persistent attacker-influenced state can affect later behavior; examine the state change and downstream effects."
  },
  {
    "id": "ai-extra-5-033",
    "domain": 5,
    "objective": "5.3",
    "topic": "Runtime detection",
    "q": "An AI-assisted threat hunt finds a suspicious pattern. What should establish an incident finding?",
    "answers": [
      "Validated supporting telemetry and analyst assessment",
      "The model's confident wording alone",
      "The number of times the model repeats it",
      "A fabricated citation in the answer"
    ],
    "why": "Generated hypotheses should guide investigation, not substitute for verified evidence."
  },
  {
    "id": "ai-extra-5-034",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A vulnerability affects a model-loading library used only in training. How should it be prioritized?",
    "answers": [
      "By exposure, execution path, privileges, and artifact impact",
      "Ignore it because inference is separate",
      "Use only the package's popularity",
      "Treat all training vulnerabilities as low risk"
    ],
    "why": "Training compromise can affect artifacts or credentials; assess the actual path and consequences."
  },
  {
    "id": "ai-extra-5-035",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A scanner marks an unused dependency critical. What should validation establish?",
    "answers": [
      "Whether the vulnerable component is present, reachable, and consequential",
      "The severity label",
      "The vendor's stock price",
      "The model accuracy score"
    ],
    "why": "Prioritization should combine reported severity with actual exposure and business impact."
  },
  {
    "id": "ai-extra-5-036",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A legacy model cannot be patched immediately. What should risk treatment consider?",
    "answers": [
      "Usage restrictions, isolation, monitoring, and a replacement plan",
      "Permanent unreviewed exception",
      "Removal of all vulnerability tracking",
      "A new model nickname"
    ],
    "why": "Compensating controls can reduce exposure temporarily but need accountability and a plan for unsupported risk."
  },
  {
    "id": "ai-extra-5-037",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A posture report counts closed tickets but ignores recurring failures. What should be measured?",
    "answers": [
      "Effective remediation and recurrence of the underlying issues",
      "Ticket title length",
      "Number of vendors",
      "Monthly token savings"
    ],
    "why": "Closure volume does not prove risk reduction; verify fixes and observe whether the same failure returns."
  },
  {
    "id": "ai-extra-5-038",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "An AI asset inventory excludes inference endpoints created by developers. What should discovery cover?",
    "answers": [
      "Actual deployed services and unauthorized or shadow endpoints",
      "Procurement-approved model names",
      "Production billing tags",
      "Centrally documented URLs"
    ],
    "why": "Exposure assessment requires visibility into real reachable assets, not only approved records."
  },
  {
    "id": "ai-extra-5-039",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A supplier discloses an exploitable issue in a pinned model package. What should the owner do?",
    "answers": [
      "Identify affected deployments and apply risk-based remediation",
      "Assume pinning prevents vulnerabilities",
      "Update the documentation link",
      "Wait until the package name changes"
    ],
    "why": "Pinning supports reproducibility, not immunity; track disclosures and remediate affected versions."
  },
  {
    "id": "ai-extra-5-040",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "An AI security review occurs only at initial release. What should be added?",
    "answers": [
      "Continuous or periodic reassessment tied to change and exposure",
      "Annual license renewal",
      "A one-time benchmark",
      "A permanent approval certificate"
    ],
    "why": "Models, dependencies, data, and threats change after launch; assurance must continue over the lifecycle."
  },
  {
    "id": "ai-extra-5-041",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A patch fixes a library flaw but changes tokenization behavior. What should validation include?",
    "answers": [
      "Security remediation and regression of relevant application behavior",
      "The scanner's clean result",
      "Installation success",
      "Smaller artifact size"
    ],
    "why": "Patching should remove the vulnerability without silently breaking correctness or security assumptions elsewhere."
  },
  {
    "id": "ai-extra-5-042",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A vulnerability register lacks business context. What would help decision-makers most?",
    "answers": [
      "Affected workflows, reachable assets, impact, owners, and treatments",
      "More technical acronyms",
      "A longer list of generic threats",
      "Vendor rankings"
    ],
    "why": "Context connects technical findings to actionable business priorities and accountable remediation."
  },
  {
    "id": "ai-extra-5-043",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "An endpoint is intended to be private but is internet accessible. Which evidence should drive priority?",
    "answers": [
      "Actual reachability, authentication, data, and available actions",
      "Its internal label",
      "The original architecture intention",
      "Whether it appears in search engines"
    ],
    "why": "Exposure is determined by deployed behavior; names and intent do not enforce boundaries."
  },
  {
    "id": "ai-extra-5-044",
    "domain": 5,
    "objective": "5.4",
    "topic": "Vulnerability and posture management",
    "q": "A model's unsafe behavior persists after an unrelated software update. What should the owner avoid assuming?",
    "answers": [
      "That a successful patch necessarily remediated the behavioral flaw",
      "That regression tests are relevant",
      "That the model needs an owner",
      "That evidence should be retained"
    ],
    "why": "Different issues require targeted verification; changing software does not prove the reported failure is fixed."
  },
  {
    "id": "ai-extra-5-045",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "An agent is actively issuing unauthorized writes. Which containment most directly addresses the action path?",
    "answers": [
      "Suspend the affected write capability and revoke relevant authority",
      "Restart the frontend",
      "Shorten future responses",
      "Change the user's chat theme"
    ],
    "why": "Containment should interrupt the capability causing harm; interface changes may leave background execution active."
  },
  {
    "id": "ai-extra-5-046",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A malicious retrieval document triggers repeated tool attempts. What should containment include?",
    "answers": [
      "Quarantine the document and restrict affected execution paths",
      "Delete one final answer",
      "Increase the search result count",
      "Dismiss the alert"
    ],
    "why": "Contain both the entry point and its action consequences while preserving evidence for scope and cause analysis."
  },
  {
    "id": "ai-extra-5-047",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A suspected poisoned model is serving critical requests. What should the team evaluate?",
    "answers": [
      "Targeted isolation or trusted rollback with continuity and evidence preservation",
      "Automatically destroy every model artifact",
      "Ignore the issue until retraining finishes",
      "Notify the model vendor"
    ],
    "why": "Containment balances ongoing harm, continuity, and investigation; choose authorized actions suited to the actual exposure."
  },
  {
    "id": "ai-extra-5-048",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "An incident may involve personal-data disclosure. Who should join relevant response decisions?",
    "answers": [
      "Security, data owners, privacy, and legal roles as appropriate",
      "The UI designer",
      "The model's original trainer",
      "An external marketing agency"
    ],
    "why": "Data disclosure can require coordinated technical, privacy, and legal analysis by accountable specialists."
  },
  {
    "id": "ai-extra-5-049",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A team wants to wipe a compromised inference node immediately. What should be considered first when feasible?",
    "answers": [
      "Preserve relevant evidence while controlling ongoing harm",
      "The cost of replacement hardware",
      "The node's deployment color",
      "The number of open chat windows"
    ],
    "why": "Destructive actions can remove evidence; containment and preservation should be coordinated under the response process."
  },
  {
    "id": "ai-extra-5-050",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A secret leaked through model output. What response addresses continued access risk?",
    "answers": [
      "Revoke or rotate it and investigate its exposure and use",
      "Delete the displayed response",
      "Ask the model to forget it",
      "Reduce output length"
    ],
    "why": "Removing displayed text does not invalidate an exposed credential or establish who obtained it."
  },
  {
    "id": "ai-extra-5-051",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "An attack uses one compromised tenant identity. What should guide containment scope?",
    "answers": [
      "Evidence of affected identities, resources, and shared dependencies",
      "Disable the entire organization automatically in every case",
      "The tenant's subscription tier",
      "The model architecture"
    ],
    "why": "Containment should be proportionate to validated and plausible spread, with broader measures when evidence warrants them."
  },
  {
    "id": "ai-extra-5-052",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "An agent keeps acting after its UI session is closed. What should responders target?",
    "answers": [
      "The backend execution job and its delegated credentials",
      "The browser tab",
      "The chat history title",
      "Client-side display settings"
    ],
    "why": "Background authority can outlive the UI; stop the actual execution and authorization paths."
  },
  {
    "id": "ai-extra-5-053",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A team rate-limits an exfiltrating agent but leaves export authority intact. What should it recognize?",
    "answers": [
      "Rate limits reduce speed but may not stop the disclosure",
      "The incident is necessarily eradicated",
      "All exported data is automatically recovered",
      "The attacker has lost every access path"
    ],
    "why": "Throttling can buy time, but containment may require disabling the unauthorized capability or credentials."
  },
  {
    "id": "ai-extra-5-054",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "An incident spans a vendor-hosted model and internal tools. What should be coordinated?",
    "answers": [
      "Shared timeline, responsibilities, evidence, and containment actions",
      "Separate unlinked tickets",
      "The vendor's public status post",
      "Internal model retraining"
    ],
    "why": "Cross-boundary incidents need agreed roles and linked evidence to avoid gaps in containment or investigation."
  },
  {
    "id": "ai-extra-5-055",
    "domain": 5,
    "objective": "5.5",
    "topic": "Containment and response",
    "q": "A responder restores service before containing the compromised tool. What risk remains?",
    "answers": [
      "The same action path can be abused again",
      "The model becomes permanently encrypted",
      "The dataset automatically repairs itself",
      "All previous logs become invalid"
    ],
    "why": "Restoring availability does not remove the access or capability responsible for the incident."
  },
  {
    "id": "ai-extra-5-056",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "An attacker altered a vector store rather than model weights. What evidence should investigators prioritize?",
    "answers": [
      "Retrieval versions, ingestion changes, identities, and affected requests",
      "The model weight hash",
      "Average response length",
      "GPU utilization"
    ],
    "why": "Investigation should follow the compromised component; unchanged weights do not rule out retrieval-layer compromise."
  },
  {
    "id": "ai-extra-5-057",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A suspicious response cannot be reproduced after a provider update. What would have helped?",
    "answers": [
      "Captured versions, configuration, relevant context, and event evidence",
      "The current model name",
      "A screenshot of the provider logo",
      "The user's memory of the issue"
    ],
    "why": "Versioned state and controlled evidence support reconstruction despite changing nondeterministic systems."
  },
  {
    "id": "ai-extra-5-058",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "Investigators find a malicious file but not how it entered training. What should root-cause analysis trace?",
    "answers": [
      "Ingestion paths, trust decisions, write access, and validation gaps",
      "The file extension",
      "The final model score",
      "The number of project contributors"
    ],
    "why": "Eradication requires understanding the entry and control failures, not merely identifying one malicious artifact."
  },
  {
    "id": "ai-extra-5-059",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A prompt injection is removed from one document. What else should investigation examine?",
    "answers": [
      "Related copies, cached context, memory, and downstream effects",
      "The source filename",
      "Whether the document opens",
      "Whether the chat window was closed"
    ],
    "why": "Attacker influence may persist in derived or session state and may already have caused actions."
  },
  {
    "id": "ai-extra-5-060",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A model displayed unusual text. Which conclusion about attacker identity is justified?",
    "answers": [
      "Attribution needs corroborating evidence and acknowledged uncertainty",
      "The text alone proves a specific actor",
      "The model can name the attacker reliably",
      "A language match conclusively establishes nationality"
    ],
    "why": "Attribution requires evidence beyond stylistic clues or model speculation and should state confidence limits."
  },
  {
    "id": "ai-extra-5-061",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A compromised training identity is revoked, but its malicious artifacts remain approved. What must eradication address?",
    "answers": [
      "Contaminated artifacts and the trust path enabling their promotion",
      "The revoked account record",
      "The incident ticket title",
      "Future password complexity"
    ],
    "why": "Removing an identity does not remove already published malicious data or models."
  },
  {
    "id": "ai-extra-5-062",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A team retrains a model using the same unvalidated poisoned data. What is the likely weakness?",
    "answers": [
      "The compromise can be reintroduced during retraining",
      "Retraining guarantees a clean result",
      "Training speed proves successful eradication",
      "More epochs remove all backdoors"
    ],
    "why": "Recovery inputs must be trusted; repeating the compromised process can reproduce the original failure."
  },
  {
    "id": "ai-extra-5-063",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A forensic analyst modifies the only dataset snapshot while exploring it. What should evidence handling use instead?",
    "answers": [
      "Preserved originals and controlled working copies",
      "The edited file",
      "Screenshots of changed rows",
      "A narrative summary"
    ],
    "why": "Protect original evidence and document analysis on copies to maintain integrity and reproducibility."
  },
  {
    "id": "ai-extra-5-064",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A tool's output was attacker-controlled before the model acted. What should the timeline include?",
    "answers": [
      "The tool response, trust interpretation, authorization decision, and executed action",
      "The final chatbot message",
      "The model's training date",
      "The user's subscription plan"
    ],
    "why": "A causal chain should show how untrusted content reached a consequential operation and which controls responded."
  },
  {
    "id": "ai-extra-5-065",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A root-cause report says AI hallucination without identifying a failed control. What should be clarified?",
    "answers": [
      "Why an incorrect output could cross the relevant security boundary",
      "Which model brand was used",
      "Whether the wording sounded confident",
      "The answer's length"
    ],
    "why": "A behavioral symptom is not a complete root cause when independent controls should have limited its consequences."
  },
  {
    "id": "ai-extra-5-066",
    "domain": 5,
    "objective": "5.6",
    "topic": "Investigation and eradication",
    "q": "A cleaned model is ready for reintroduction. What testing is necessary?",
    "answers": [
      "The original attack path and relevant safety and functional regressions",
      "A successful greeting",
      "A clean deployment log",
      "The vendor's latest benchmark"
    ],
    "why": "Return-to-service evidence should show that the demonstrated failure is controlled and intended behavior still works."
  },
  {
    "id": "ai-extra-5-067",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A backup restores weights but not the trusted retrieval index. What should recovery planning cover?",
    "answers": [
      "The full set of dependencies needed for a trustworthy service",
      "The largest file",
      "Frontend availability",
      "User password resets"
    ],
    "why": "AI recovery depends on models, data, retrieval, configuration, identities, and supporting services."
  },
  {
    "id": "ai-extra-5-068",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A critical AI workflow needs a fallback during provider outage. What is a defensible option?",
    "answers": [
      "An approved degraded or manual process with defined limits",
      "Any unassessed public chatbot",
      "An unrestricted new provider account",
      "Skipping all business decisions indefinitely"
    ],
    "why": "Continuity can use constrained manual or alternative paths that preserve required security and business controls."
  },
  {
    "id": "ai-extra-5-069",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A recovered model produces normal answers but still holds exposed credentials in memory. What should happen?",
    "answers": [
      "Clear or remediate unsafe state and revoke affected credentials",
      "Declare recovery complete based on one answer",
      "Rename the session",
      "Hide the memory panel"
    ],
    "why": "Service responsiveness does not establish removal of compromised state or remaining authority."
  },
  {
    "id": "ai-extra-5-070",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A restoration exercise exceeds the required recovery time. What should follow?",
    "answers": [
      "Identify bottlenecks and revise or improve the recovery plan",
      "Change the measured time silently",
      "Update the model's description",
      "Stop conducting exercises"
    ],
    "why": "Recovery objectives need tested evidence; gaps should lead to accountable improvements or revised expectations."
  },
  {
    "id": "ai-extra-5-071",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A post-incident review blames one analyst and closes without control changes. What is missing?",
    "answers": [
      "Systemic causes, corrective actions, owners, and validation",
      "A stronger blame statement",
      "A larger incident severity label",
      "An executive apology"
    ],
    "why": "Useful reviews identify repeatable improvements across process, technology, and decision conditions."
  },
  {
    "id": "ai-extra-5-072",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A vector-store backup predates document permission changes. What should restoration verify?",
    "answers": [
      "Current authorization and deletion constraints before serving restored data",
      "Whether vectors load successfully",
      "The number of recovered records",
      "Whether search is fast"
    ],
    "why": "Restoration can reintroduce stale access or removed data; verify present-day handling requirements."
  },
  {
    "id": "ai-extra-5-073",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A kill switch stops model generation but not queued tool actions. What should be improved?",
    "answers": [
      "Stopping or invalidating affected downstream queued execution",
      "A different button label",
      "A shorter model response",
      "A faster reload animation"
    ],
    "why": "A circuit breaker must address the harmful workflow, including actions already queued beyond the model."
  },
  {
    "id": "ai-extra-5-074",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "A team retires an AI service after an incident. What must closure address?",
    "answers": [
      "Endpoints, credentials, retained data, dependencies, and obligations",
      "Deleting the homepage link",
      "Archiving the product logo",
      "Stopping new feature work"
    ],
    "why": "Decommissioning requires removing usable exposure and handling retained assets according to applicable requirements."
  },
  {
    "id": "ai-extra-5-075",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "Recovery uses a known-good model but reconnects to the compromised ingestion pipeline. What is the concern?",
    "answers": [
      "Recontamination through an unresolved dependency",
      "The old model cannot run on new hardware",
      "The backup is automatically untrusted",
      "Every recovery requires full new training"
    ],
    "why": "A trusted artifact can become unsafe again if the underlying compromised path remains active."
  },
  {
    "id": "ai-extra-5-076",
    "domain": 5,
    "objective": "5.7",
    "topic": "Recovery and continuity",
    "q": "What best demonstrates a post-incident action is complete?",
    "answers": [
      "Evidence the corrective control works against defined verification criteria",
      "A ticket marked closed without testing",
      "A verbal promise to be careful",
      "A scheduled meeting without an owner"
    ],
    "why": "Completion should be tied to observed effectiveness, not merely administrative status or intention."
  },
  {
    "id": "ai-extra-6-001",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An architecture review lists generic threats without identifying assets or actors. What should be established first?",
    "answers": [
      "System scope, assets, trust boundaries, and credible adversaries",
      "The final severity score",
      "The model's preferred response format",
      "The largest possible test corpus"
    ],
    "why": "Threat modeling needs a defined system and context before useful attack paths or priorities can be assessed."
  },
  {
    "id": "ai-extra-6-002",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "A public document tells a RAG assistant to ignore its instructions. Which threat is most directly involved?",
    "answers": [
      "Indirect prompt injection through retrieved content",
      "Training-time label poisoning",
      "Model weight extraction",
      "Membership inference"
    ],
    "why": "The attacker supplies instructions through material the assistant retrieves rather than directly through the legitimate user's request."
  },
  {
    "id": "ai-extra-6-003",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An attacker changes a test-time image to fool a deployed classifier. How does this differ from poisoning?",
    "answers": [
      "It targets inference input rather than the training process",
      "It requires changing training labels",
      "It proves the model was copied",
      "It only affects dataset licensing"
    ],
    "why": "Evasion changes inputs to an existing model; poisoning manipulates learning data or training behavior."
  },
  {
    "id": "ai-extra-6-004",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An internal engineer can alter a model release manifest. What should threat modeling include?",
    "answers": [
      "Insider or compromised-maintainer artifact substitution",
      "Anonymous public prompt attacks",
      "Physical theft of user devices",
      "Unrelated phishing against customers"
    ],
    "why": "Threat models should include privileged insiders and compromised internal identities, not just external users."
  },
  {
    "id": "ai-extra-6-005",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An agent stores instructions from an untrusted page in persistent memory. What attack path should be modeled?",
    "answers": [
      "Delayed influence across future sessions",
      "A single transient response",
      "Accelerator overheating",
      "Software license expiration"
    ],
    "why": "Persistent state can carry attacker influence beyond the original retrieval and affect later decisions."
  },
  {
    "id": "ai-extra-6-006",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "A multi-agent workflow lets one agent claim another has approved an action. What is the security concern?",
    "answers": [
      "Unverified delegation and fabricated approval authority",
      "The message's spelling",
      "Model throughput",
      "A lack of shared embeddings"
    ],
    "why": "Approval claims need verifiable provenance and scope; peer-generated assertions cannot create trusted authorization."
  },
  {
    "id": "ai-extra-6-007",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "A malicious input causes extremely long model reasoning and expensive tool loops. What consequence should be assessed?",
    "answers": [
      "Resource exhaustion and denial of service",
      "Training-data membership leakage",
      "Copyright infringement",
      "Signature verification failure"
    ],
    "why": "Expensive inference and repeated tool actions can degrade availability and create financial or operational impact."
  },
  {
    "id": "ai-extra-6-008",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "A threat model ends at the model's text output although tools execute it. What is missing?",
    "answers": [
      "Downstream action paths and their authorization boundaries",
      "The model's release year",
      "The interface's color palette",
      "Training hardware details"
    ],
    "why": "Consequences often occur after generation; include the services and resources affected by model-driven operations."
  },
  {
    "id": "ai-extra-6-009",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An attacker combines text in an image with an audio instruction. What should the model's threat coverage include?",
    "answers": [
      "Cross-modal input interpretation and resulting action paths",
      "Typed chat messages",
      "Image file extensions",
      "The provider's clean benchmark"
    ],
    "why": "Multiple modalities can convey attacker-controlled content; assess their combined effects in the actual workflow."
  },
  {
    "id": "ai-extra-6-010",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "A detector's target is stable, but attackers adapt their samples to avoid it. What should threat analysis consider?",
    "answers": [
      "Adaptive adversaries and changing attack distributions",
      "Random benign traffic",
      "Data-center power consumption",
      "The model card's publication date"
    ],
    "why": "Security evaluations should account for actors actively adjusting inputs in response to deployed defenses."
  },
  {
    "id": "ai-extra-6-011",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An organization maps AI attacks only to a traditional network checklist. What should be added?",
    "answers": [
      "AI-specific data, model, retrieval, and agent attack techniques",
      "Additional firewall brand names",
      "Standard uptime checks",
      "User satisfaction surveys"
    ],
    "why": "Traditional methods remain useful but need expansion to represent distinctive AI components and failure paths."
  },
  {
    "id": "ai-extra-6-012",
    "domain": 6,
    "objective": "6.1",
    "topic": "Threat modeling and adversarial behavior",
    "q": "An attacker wants to learn sensitive attributes rather than steal weights. Which distinction matters?",
    "answers": [
      "The target is private information, not necessarily model ownership",
      "Every attack must extract model weights",
      "All privacy attacks require physical access",
      "A copied model is the only possible outcome"
    ],
    "why": "Threat objectives differ; inversion and inference can harm privacy without copying the model artifact."
  },
  {
    "id": "ai-extra-6-013",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A model release passes tests, but the application changes its tool permissions afterward. What should be reevaluated?",
    "answers": [
      "The changed system's action exposure and controls",
      "Model weights",
      "The original benchmark",
      "The release certificate"
    ],
    "why": "Security assurance applies to a configuration and use case; changed authority can invalidate earlier conclusions."
  },
  {
    "id": "ai-extra-6-014",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A team changes the embedding model but keeps the old vector index. What should be verified?",
    "answers": [
      "Compatibility and retrieval quality before promotion",
      "The model file size",
      "User authentication",
      "Database uptime"
    ],
    "why": "Embedding changes may invalidate similarity behavior or require reindexing; test the integrated retrieval path."
  },
  {
    "id": "ai-extra-6-015",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A dataset update is treated as content maintenance outside change control. What should policy recognize?",
    "answers": [
      "Data changes can materially alter AI behavior and risk",
      "Executable code can affect behavior",
      "Dataset changes need no owners",
      "A signed deployment always covers future data"
    ],
    "why": "Models and retrieval systems depend on data; lifecycle controls should cover consequential content changes."
  },
  {
    "id": "ai-extra-6-016",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A new model is canaried without monitoring security-specific outcomes. What should rollout include?",
    "answers": [
      "Relevant policy failures, action anomalies, and rollback criteria",
      "Average response speed",
      "Total request counts",
      "The model version banner"
    ],
    "why": "Staging limits exposure only when the team can detect the failures that should halt expansion."
  },
  {
    "id": "ai-extra-6-017",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A deployment rollback reverts the application but leaves an overprivileged agent role. What remains unresolved?",
    "answers": [
      "The changed authorization state",
      "The source code version",
      "Model weights",
      "The old chat transcripts"
    ],
    "why": "Rollback must include security-relevant configuration and entitlements, not just application binaries."
  },
  {
    "id": "ai-extra-6-018",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A team uses a development prompt containing test bypass instructions in production. What control should prevent this?",
    "answers": [
      "Environment separation and validated configuration promotion",
      "Stronger production hardware",
      "Lower output limits",
      "A new model provider"
    ],
    "why": "Development settings can weaken production behavior; configuration belongs in controlled release checks."
  },
  {
    "id": "ai-extra-6-019",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A model update changes previously stable refusal behavior. What should release review assess?",
    "answers": [
      "Security regressions and approved use-case behavior",
      "Improved general benchmarks",
      "Token pricing",
      "Faster startup"
    ],
    "why": "General gains can coexist with weakened controls; test relevant behavioral boundaries after changes."
  },
  {
    "id": "ai-extra-6-020",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A release record tracks the model but not its system prompt. What should be versioned?",
    "answers": [
      "Prompts, tool definitions, retrieval, and other behavior-relevant configuration",
      "Model parameter counts",
      "The developer's username",
      "The release meeting notes"
    ],
    "why": "System behavior depends on more than weights; reproducibility and review require the relevant combined configuration."
  },
  {
    "id": "ai-extra-6-021",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A pipeline runs regression tests using live customer identities with write permissions. What should be improved?",
    "answers": [
      "Isolated tests with synthetic data and bounded test authority",
      "A warning to testers",
      "Faster cleanup after tests",
      "A shorter test name"
    ],
    "why": "Testing should avoid unnecessary production exposure and unintended consequential actions."
  },
  {
    "id": "ai-extra-6-022",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A team wants to accelerate emergency model updates. What should remain in the process?",
    "answers": [
      "Defined emergency authority, essential validation, evidence, and follow-up",
      "Automatic unreviewed permanent access",
      "No recording of changes",
      "A blanket exemption for every update"
    ],
    "why": "Emergency procedures can be faster while retaining accountability and minimum controls appropriate to urgency."
  },
  {
    "id": "ai-extra-6-023",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "An integration is approved for one model version but silently switches providers. What should change management require?",
    "answers": [
      "Reassessment of the new provider, data flow, behavior, and dependencies",
      "A new brand label",
      "Confirmation the API syntax matches",
      "Matching response length"
    ],
    "why": "Compatible interfaces do not imply equivalent handling, security, or behavior across providers."
  },
  {
    "id": "ai-extra-6-024",
    "domain": 6,
    "objective": "6.2",
    "topic": "Secure lifecycle and change",
    "q": "A security gate is skipped for minor releases without defining minor. What should be clarified?",
    "answers": [
      "Risk-based change criteria and required validation for each category",
      "A fixed naming convention",
      "The release date format",
      "Who writes release notes"
    ],
    "why": "Ambiguous exemptions can hide consequential changes; define criteria tied to actual exposure and behavior."
  },
  {
    "id": "ai-extra-6-025",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A supplier's model digest matches, but the download channel's owner is unknown. What still needs verification?",
    "answers": [
      "Trusted origin and authorization of the reference",
      "A second hash of the same file",
      "The file's timestamp",
      "The filename suffix"
    ],
    "why": "Matching bytes to an untrusted reference does not establish the artifact's legitimate origin."
  },
  {
    "id": "ai-extra-6-026",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A model package bundles a third-party component omitted from its inventory. What should procurement request?",
    "answers": [
      "An accurate dependency record and assessment of the added component",
      "A corrected logo",
      "More inference credits",
      "The model's training duration"
    ],
    "why": "Undisclosed components can introduce vulnerabilities, rights issues, and unexpected data flows."
  },
  {
    "id": "ai-extra-6-027",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A vendor permits inference but prohibits redistribution of weights. What should the deployment team check?",
    "answers": [
      "Whether packaging and distribution plans comply with the license",
      "Whether the artifact is encrypted",
      "Whether the application is private",
      "Whether the file can be downloaded"
    ],
    "why": "Technical ability and access restrictions do not automatically authorize redistribution."
  },
  {
    "id": "ai-extra-6-028",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A provider changes its subcontracted inference platform. What should supplier management assess?",
    "answers": [
      "Changed recipients, controls, locations, and contractual responsibilities",
      "Whether the API hostname stays the same",
      "Response grammar",
      "The monthly invoice number"
    ],
    "why": "Hidden infrastructure changes can affect privacy, continuity, and security even behind an unchanged interface."
  },
  {
    "id": "ai-extra-6-029",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A team signs its own copy of an unreviewed external model. What does that signature establish?",
    "answers": [
      "Its endorsement or packaging step, not original safety or provenance",
      "That all original risks are removed",
      "That the original vendor authorized every use",
      "That training data was independently audited"
    ],
    "why": "Signing a copy records a trust action; it does not retroactively validate unknown source material."
  },
  {
    "id": "ai-extra-6-030",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "An acquisition checklist asks only whether the model has a security certificate. What else is needed?",
    "answers": [
      "Use-specific evidence, provenance, data handling, and operational fit",
      "A larger certificate image",
      "A list of competitors",
      "A positive sales reference"
    ],
    "why": "Procurement must evaluate the actual service and intended use rather than rely on broad assurance labels alone."
  },
  {
    "id": "ai-extra-6-031",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A supplier discloses a training-data incident affecting some versions. What record helps establish exposure?",
    "answers": [
      "Exact model and dataset dependency versions tied to releases",
      "The supplier name",
      "The current marketing page",
      "Total yearly usage"
    ],
    "why": "Granular dependency records determine which deployed artifacts inherit the affected supply-chain component."
  },
  {
    "id": "ai-extra-6-032",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "An imported model claims to be a trusted release but has a different signer. What should happen?",
    "answers": [
      "Investigate the trust-chain discrepancy before approval",
      "Accept it because the name matches",
      "Ignore signer changes when the model is smaller",
      "Treat local storage as independent validation"
    ],
    "why": "Unexpected signing identity changes can indicate substitution; verify through an established trusted channel."
  },
  {
    "id": "ai-extra-6-033",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A vendor assessment is reused for a product that now trains on customer prompts. What is required?",
    "answers": [
      "Review the changed data use and update the approval decision",
      "Verify the invoice is current",
      "Confirm the same vendor owns it",
      "Increase prompt limits"
    ],
    "why": "Supplier approval depends on actual handling; a material new purpose changes the risk assessment."
  },
  {
    "id": "ai-extra-6-034",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "A supplier cannot provide evidence needed for a mandatory requirement. What should the buyer do?",
    "answers": [
      "Resolve the gap, seek an approved alternative, or reject the use",
      "Assume missing evidence means compliance",
      "Rely on model confidence",
      "Mark the requirement passed for schedule reasons"
    ],
    "why": "Unverified mandatory requirements should remain explicit decision gaps rather than being silently treated as satisfied."
  },
  {
    "id": "ai-extra-6-035",
    "domain": 6,
    "objective": "6.3",
    "topic": "Procurement and provenance",
    "q": "An AI bill of materials is complete but never updated. What is the concern?",
    "answers": [
      "The inventory no longer reflects deployed dependencies",
      "Its original accuracy guarantees future accuracy",
      "Version changes cannot affect security",
      "The model cannot be used offline"
    ],
    "why": "A component inventory supports assurance only while it tracks actual deployed versions and relationships."
  },
  {
    "id": "ai-extra-6-036",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A red-team plan says break the chatbot without defining success. What should be specified?",
    "answers": [
      "Scope, allowed actions, expected boundaries, evidence, and stop conditions",
      "The number of testers",
      "The preferred model",
      "A catchy exercise name"
    ],
    "why": "A useful assessment needs authorized boundaries and observable criteria distinguishing failures from harmless oddities."
  },
  {
    "id": "ai-extra-6-037",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A tester discovers a real secret during an approved exercise. What should they do?",
    "answers": [
      "Follow the agreed handling and escalation process and limit exposure",
      "Publish it to prove the finding",
      "Use it against unrelated systems",
      "Store it in a public prompt library"
    ],
    "why": "Authorization to test does not grant unrestricted handling or reuse of sensitive material discovered during testing."
  },
  {
    "id": "ai-extra-6-038",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A prompt-injection test only asks the model directly to ignore instructions. What broader path should be tested?",
    "answers": [
      "Indirect instructions in retrieved documents and tool results",
      "More polite direct requests",
      "Larger batch sizes",
      "Model startup checks"
    ],
    "why": "A system may resist direct attacks yet fail when hostile instructions arrive through trusted-looking context channels."
  },
  {
    "id": "ai-extra-6-039",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A test validates that a tool denies unauthorized actions. What should also be examined?",
    "answers": [
      "Alternate tools, retries, parameter changes, and delegated paths",
      "The denial message's punctuation",
      "The model's greeting",
      "Query response speed"
    ],
    "why": "Equivalent paths can bypass a single successful check; test the underlying boundary across realistic routes."
  },
  {
    "id": "ai-extra-6-040",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A red team reports only one successful jailbreak from thousands of trials. What should reporting include?",
    "answers": [
      "Test conditions, trial counts, success frequency, and impact",
      "The most dramatic screenshot",
      "The model brand",
      "A binary claim that AI is unsafe"
    ],
    "why": "Frequency and conditions help interpret reliability and operational significance alongside demonstrated impact."
  },
  {
    "id": "ai-extra-6-041",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A security test intentionally sends unlimited expensive requests to production. What should authorization and design address?",
    "answers": [
      "Availability limits, cost bounds, stop conditions, and safe environment choice",
      "How to maximize token use",
      "Whether requests use valid syntax",
      "Tester convenience"
    ],
    "why": "Authorized testing still needs bounded impact, particularly for resource-exhaustion and costly-action scenarios."
  },
  {
    "id": "ai-extra-6-042",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A test uses a document an employee is legitimately allowed to read and calls any citation a leak. What should be clarified?",
    "answers": [
      "The intended authorization boundary and expected result",
      "Whether the citation is long",
      "The embedding model version",
      "Whether the text is technical"
    ],
    "why": "A disclosure finding needs an unauthorized recipient, prohibited purpose, or other violated requirement; access context matters."
  },
  {
    "id": "ai-extra-6-043",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A model passes tests in English. What should multilingual deployment testing include?",
    "answers": [
      "Supported languages and relevant cross-language attack cases",
      "English with different fonts",
      "Provider summary benchmarks",
      "Translated interface labels"
    ],
    "why": "Safety and authorization behavior can vary with language; evaluate the actual supported inputs and outputs."
  },
  {
    "id": "ai-extra-6-044",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A tester copies an exploit prompt without recording system configuration. What is missing?",
    "answers": [
      "Reproducible context including versions, settings, tools, and relevant data",
      "A more memorable prompt title",
      "A response timestamp",
      "A model parameter estimate"
    ],
    "why": "Identical text can behave differently across system states; reproduction needs the conditions enabling the failure."
  },
  {
    "id": "ai-extra-6-045",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A red-team tool can modify production permissions but the exercise covers only read-only behavior. What should be done?",
    "answers": [
      "Restrict the tool to the authorized scope",
      "Assume unused permissions are harmless",
      "Allow changes if the model asks",
      "Rely solely on tester memory"
    ],
    "why": "Test infrastructure should enforce scope and minimize authority rather than depend only on intentions."
  },
  {
    "id": "ai-extra-6-046",
    "domain": 6,
    "objective": "6.4",
    "topic": "Testing and red teaming",
    "q": "A multimodal test suite ignores metadata and extracted text. What should coverage assess?",
    "answers": [
      "All input paths that reach model context or tools",
      "The visible pixels",
      "File upload success",
      "Image dimensions"
    ],
    "why": "Processing can expose text or metadata to downstream components; assess the actual interpretation path."
  },
  {
    "id": "ai-extra-6-047",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A generated answer is offensive but cannot trigger actions or access restricted data. What should severity analysis consider?",
    "answers": [
      "Actual harm, affected users, context, and available paths",
      "Assign the highest technical severity automatically",
      "Ignore all user impact",
      "Use only response length"
    ],
    "why": "Assess consequences in context; harmful content and privilege compromise need evidence appropriate to their distinct impacts."
  },
  {
    "id": "ai-extra-6-048",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "Two testers reproduce a flaw only under one specific configuration. What should the finding state?",
    "answers": [
      "The affected configuration, preconditions, evidence, and limits",
      "That all AI deployments are vulnerable",
      "That only the vendor is responsible",
      "That configuration details are irrelevant"
    ],
    "why": "Precise scope supports correct remediation and avoids overstating evidence beyond what was demonstrated."
  },
  {
    "id": "ai-extra-6-049",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A report says prompt injection without describing the consequence. What should be added?",
    "answers": [
      "The crossed boundary and demonstrated or credible impact",
      "More attack terminology",
      "The exact model size",
      "The tester's preferred tool"
    ],
    "why": "A technique label is not sufficient to prioritize; explain what access or action the attack enabled."
  },
  {
    "id": "ai-extra-6-050",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "An executive asks whether the new fix removes all AI risk. What should the assessor communicate?",
    "answers": [
      "Validated improvement, test scope, remaining exposure, and uncertainty",
      "A guarantee of perfect safety",
      "Raw test prompts",
      "The vendor's slogan"
    ],
    "why": "Assurance should match observed evidence and acknowledge limits rather than promise untestable completeness."
  },
  {
    "id": "ai-extra-6-051",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A finding maps to an industry framework but lacks reproduction evidence. What is still needed?",
    "answers": [
      "Evidence of the issue in the assessed system",
      "A second framework label",
      "A more severe category",
      "An expanded acronym"
    ],
    "why": "Framework mapping organizes understanding; it does not prove a vulnerability exists in a particular deployment."
  },
  {
    "id": "ai-extra-6-052",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A triage team prioritizes an unusual answer over a reproducible unauthorized transfer. What should guide ordering?",
    "answers": [
      "Impact, exploitability, exposure, and control effectiveness",
      "Novelty",
      "Social media interest",
      "Answer length"
    ],
    "why": "Prioritize consequential security failures using evidence rather than the surprise value of model behavior."
  },
  {
    "id": "ai-extra-6-053",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A report includes raw customer records as screenshots. What should the author do?",
    "answers": [
      "Minimize or redact sensitive evidence while preserving the proof",
      "Share the full records with every recipient",
      "Assume reports are exempt from privacy controls",
      "Remove all evidence without replacement"
    ],
    "why": "Evidence should remain useful and verifiable without unnecessary disclosure to report readers."
  },
  {
    "id": "ai-extra-6-054",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A tester demonstrates an attack only after disabling the production authorization gate. What should the finding disclose?",
    "answers": [
      "The changed precondition and whether normal deployment is affected",
      "Present the result as a production bypass",
      "Omit the disabled gate",
      "Claim the original control failed"
    ],
    "why": "Test modifications materially affect interpretation; findings must distinguish normal exposure from hypothetical weakened configurations."
  },
  {
    "id": "ai-extra-6-055",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A remediation owner disputes a severity score. What is the best basis for discussion?",
    "answers": [
      "Reproducible impact, exposure, assumptions, and existing controls",
      "The scorer's seniority",
      "The longest report",
      "A vendor's reputation"
    ],
    "why": "Severity disagreement should be resolved with evidence and a shared risk method rather than authority or presentation."
  },
  {
    "id": "ai-extra-6-056",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A report treats every hallucination as data exfiltration. What distinction should be made?",
    "answers": [
      "Fabrication differs from disclosure of actual protected information",
      "All invented data came from training",
      "Every incorrect answer proves compromise",
      "Accurate answers can cause harm"
    ],
    "why": "Reliability failures and confidentiality failures can overlap, but classification requires evidence of what actually occurred."
  },
  {
    "id": "ai-extra-6-057",
    "domain": 6,
    "objective": "6.5",
    "topic": "Assessment and reporting",
    "q": "A technical report is sent to leadership without business context. What should be added?",
    "answers": [
      "Affected processes, consequences, choices, and accountable next steps",
      "Additional exploit syntax",
      "More model architecture details",
      "A longer appendix"
    ],
    "why": "Decision-makers need the implications and available actions, not just mechanics of the technical finding."
  },
  {
    "id": "ai-extra-6-058",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A prompt-only fix stops one known attack string. What should validation assess?",
    "answers": [
      "Generalization to related inputs and enforced downstream boundaries",
      "Exact-string rejection",
      "Whether the prompt is longer",
      "Whether the model apologizes"
    ],
    "why": "A patch may overfit the demonstrated input; validate the boundary against variants and independent controls."
  },
  {
    "id": "ai-extra-6-059",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A team blocks one attacker domain after an unauthorized export. What broader control should be considered?",
    "answers": [
      "Destination restrictions and action authorization for data exports",
      "That domain's spelling variants",
      "A more emphatic system prompt",
      "Daily model restarts"
    ],
    "why": "Blocking one indicator may leave the underlying export capability exploitable through another destination."
  },
  {
    "id": "ai-extra-6-060",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A rate limit reduces extraction speed. What should the risk owner understand?",
    "answers": [
      "It may increase attack cost without eliminating extraction risk",
      "It cryptographically prevents all model copying",
      "It validates every dataset license",
      "It removes the need for authentication"
    ],
    "why": "Mitigations can reduce feasibility or impact without removing the threat; assess residual exposure explicitly."
  },
  {
    "id": "ai-extra-6-061",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A model is adversarially trained on a test set and then evaluated on that same set. What is needed?",
    "answers": [
      "Independent held-out evaluation including relevant unseen attacks",
      "A higher score on the reused set",
      "More training epochs",
      "A new name for the set"
    ],
    "why": "Reusing training examples for final evaluation can overstate robustness; evaluate generalization independently."
  },
  {
    "id": "ai-extra-6-062",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A fix denies all retrieval, eliminating leaks but breaking the approved function. What should be tested?",
    "answers": [
      "Both unauthorized denial and authorized successful use",
      "Whether leaks disappear",
      "Frontend availability",
      "The total number of denials"
    ],
    "why": "An effective control should meet security requirements while preserving intended permitted behavior where required."
  },
  {
    "id": "ai-extra-6-063",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A team chooses a complex control it cannot operate reliably. What should mitigation planning consider?",
    "answers": [
      "Operational feasibility, coverage, failure behavior, and ownership",
      "Theoretical sophistication",
      "How many features it offers",
      "The vendor's demo"
    ],
    "why": "A control's practical effectiveness depends on being correctly deployed, maintained, observed, and handled when it fails."
  },
  {
    "id": "ai-extra-6-064",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A watermark is proposed as the sole defense against confidential output disclosure. What is the limitation?",
    "answers": [
      "Attribution markings do not independently prevent disclosure",
      "A watermark automatically enforces access",
      "A watermark revokes leaked credentials",
      "A watermark removes every sensitive fact"
    ],
    "why": "Watermarks can support provenance or attribution; prevention requires controls on data access and output paths."
  },
  {
    "id": "ai-extra-6-065",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A sandboxed agent can still use an approved tool to disclose restricted records. What should be remediated?",
    "answers": [
      "The tool's authorization and data-release policy",
      "The sandbox's filesystem settings",
      "The model's vocabulary",
      "The operating-system wallpaper"
    ],
    "why": "Isolation does not replace resource authorization; an allowed interface can still enable excessive access."
  },
  {
    "id": "ai-extra-6-066",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A vulnerability is fixed, but monitoring has no signal for recurrence. What should be added?",
    "answers": [
      "A relevant regression case and ongoing detection where appropriate",
      "A closed ticket",
      "A new model version number",
      "A renamed alert folder"
    ],
    "why": "Verification and monitoring help establish that a fix remains effective as data, tools, and configurations change."
  },
  {
    "id": "ai-extra-6-067",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A control reduces false positives by allowing every uncertain output. What should evaluation examine?",
    "answers": [
      "Whether harmful false negatives and consequences increase",
      "The improved acceptance rate",
      "Faster response time",
      "Fewer helpdesk complaints"
    ],
    "why": "Optimizing one metric can worsen another; evaluate both error types and their operational impact."
  },
  {
    "id": "ai-extra-6-068",
    "domain": 6,
    "objective": "6.6",
    "topic": "Mitigation validation",
    "q": "A release passes the original exploit test but fails a related delegated-action test. What should the release decision be?",
    "answers": [
      "Address the remaining boundary failure before claiming remediation",
      "Declare success based on the original test alone",
      "Exclude the related test silently",
      "Disable the test permanently"
    ],
    "why": "Remediation claims should reflect the relevant failure class and unresolved evidence, not one favorable test result."
  }
];
