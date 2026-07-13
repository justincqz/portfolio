# Justin Chong — Portfolio Content Strategy

## Site job

Help Justin get hired into a hybrid technical-lead / staff-principal / AI-product-engineering role.

## Desired impression

Precise and formidable.

## Core positioning

Justin combines hands-on architecture and product engineering with technical leadership.

Working thesis:

> I build complex products and lead the teams that bring them to life.

Supporting territory:

- Architecture and implementation
- Product and team delivery
- Data-intensive and AI systems
- Production deployment and operations
- Regulated and high-trust environments

## Editorial rule

Every featured item must prove at least one of:

1. Justin can make difficult technical decisions.
2. Justin can turn ambiguity into a shipped product.
3. Justin can lead people and delivery without losing technical depth.
4. Justin can operate software in constrained, high-trust environments.
5. Justin continues to build and experiment independently.

Avoid generic skill inventories and unsupported claims.

## Featured work

### 1. Metalynx Scatter — visual/product flagship

**Core problem:** AI developers need to understand model outputs and learned representations across classification and regression models.

**Workflow:**

1. Import model logits and per-input metadata from CSV.
2. Compute PCA into three dimensions.
3. Render an interactive OpenGL point cloud.
4. Color points by a selected differentiating factor/class.
5. Inspect metadata on hover.
6. Identify clusters, overlap, poorly separated classes, and outliers.
7. Select spatial cohorts for deeper inspection.
8. Filter samples through a gallery with complex conditions.
9. Export curated selections to CSV.

**Ownership:** Justin designed and implemented the whole product.

**External testing wording:**

> Tested with and refined through feedback from individual AI researchers, including researchers affiliated with NASA, Waymo, and Mastercard.

Always clarify that these were individual researchers, not organizational customers, partners, adopters, or endorsements. Healthcare-AI testers remain undisclosed.

**Portfolio treatment:** Full case study with real-product evidence, newly created data-flow diagrams, refreshed presentation visuals, and potentially a portfolio-specific interactive demonstration. Do not misrepresent a visual redesign as the historical product UI.

### 2. Kikan — systems/autonomous-engineering flagship

**Core problem:** Reliable autonomous software execution from a minimally specified idea.

**Working description:**

> An opinionated autonomous engineering harness that turns a one-line feature idea into a researched, designed, planned, implemented, and tested change—with minimal technical supervision.

**Key workflow stages:**

1. Idea intake and intent expansion
2. Repository/context discovery
3. Research and design exploration
4. Plan creation and validation
5. Isolated implementation
6. Automated testing and review
7. Failure recovery and iteration
8. Final deliverable with evidence

**Current evidence:** Kikan is developed through its own workflow; the harness plans, implements, tests, and iterates on features that extend Kikan itself.

**Claim guardrail:** Present this as early-stage dogfooding, not proven production autonomy. Do not claim a success rate, time saving, or reliability metric until repository history supports it.

**Portfolio treatment:** Full architecture-led case study. After source inspection, reconstruct one or two feature histories from idea through implementation and tests.

### 3. Aival — leadership and regulated-delivery proof

**Publicity constraint:** High-level only.

**Safe themes:**

- Led a five-person engineering function.
- Owned product/platform delivery from architecture through production support.
- Worked across cloud, Linux VM, and physical on-premises deployments.
- Built and operated data-intensive clinical-AI validation/monitoring products.
- Worked within ISO 27001, GDPR, DTAC, and HIPAA constraints.
- Translated client and regulatory needs into roadmaps, delivery plans, engineering processes, and releases.

**Portfolio treatment:** Concise leadership story with newly drawn conceptual diagrams. No internal screenshots, proprietary architecture, sensitive metrics, named client sites, confidential workflows, or security-relevant deployment detail.

### 4. Netcraft phishing classifier — quantified engineering story

**Safe known facts:**

- Autonomous phishing classifier using Docker Swarm, Puppeteer, Logstash, Kibana, and React.
- Improved classifier and image-processing memory usage by 13× and 7× across key components.
- Improved robustness for popup overlays, OCR content, dynamically generated HTML, and browser-rendered phishing patterns.

**Portfolio treatment:** Compact project note focused on profiling, constraints, adversarial inputs, and measurable optimization. Use reconstructed diagrams or public imagery only.

### 5. AI Lab — living experiments

A flexible collection rather than a conventional case study:

- Hermes-based assistant environment
- Agent workflows and scheduled automations
- Memory and orchestration experiments
- Local/hybrid model workflows
- Homelab services
- Small open-source contributions

**Relationship to Kikan:** Kikan is the product/case study; AI Lab is the surrounding experimentation environment.

**Portfolio treatment:** Gallery or lab notebook with concise entries. Sanitize conversations, identifiers, credentials, paths, private infrastructure, and personal data.

## Secondary material

### Emotech

Java/Spring Boot REST/OAuth services, NLP/video-recognition product features, multi-region operations, and trial launches exceeding 20,000 users. Use as career-timeline proof or a compact work note rather than a flagship case study.

### Children’s mental-health platform

Backend APIs, administrative workflows, mobile application, and gamified experiences. Use only with client permission; otherwise anonymize and reconstruct.

### Academic credibility

Imperial College London MEng Computing with Artificial Intelligence, First Class Honours. Research/publication count requires verification before publication because existing source documents disagree between three and four papers.

## Media and disclosure rules

Generally safe:

- Personal projects Justin owns
- Licensed open-source material with attribution
- Publicly released product imagery
- Newly drawn conceptual architecture/data-flow diagrams
- Sanitized screenshots using fake data

Do not publish without explicit permission:

- Internal dashboards/admin interfaces
- Former-employer source code or proprietary architecture
- Client-confidential work
- Real patient/user/customer information
- Logs, identifiers, credentials, internal URLs, or security-sensitive topology

Building a product does not automatically grant publication rights.

## Source-access status

Repositories provided:

- https://github.com/justincqz/kikan
- https://github.com/justincqz/metalynx-scatter

Both appear private. Current environment has no authenticated GitHub CLI or signed-in browser access. Source inspection is deferred until local paths or authenticated read access are available.

## Open factual checks

- Confirm whether the product name is “Metalynx Scatter” or “Metascatter.”
- Verify current publication count and canonical publication list.
- Reconcile any case-study metrics against source records before publishing.
- Inspect Kikan repository history to select traceable dogfooded features.
- Inspect Metalynx Scatter source to confirm full interaction and processing behavior.
