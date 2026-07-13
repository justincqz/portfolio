# 004 / Concept Folio

## Stance

Concept Folio is a concept-led homepage for a technical leader who remains close to architecture and implementation. Its evidence sequence is identity, systems architecture, product portfolio, experience, skills, and the resume action.

The visual position combines quiet editorial structure with precise systems notation: a warm near-white canvas, restrained typography, compact monospaced labels, dark rules, and a limited lime accent. Whitespace establishes hierarchy, but every major section carries a claim, interaction, diagram, or career evidence.

## Refined Hero

- The initial viewport has no visible navigation. A compact fixed navigation fades and slides in after 128px of scroll, leaves the keyboard order again at the top, and removes its transition for reduced-motion users.
- The hero headline was removed. A generated field of equal square cells now occupies the upper screen and recomputes its column count for the available width.
- Each character in `justincqz` occupies one normal cell in the middle row. Identity cells differ only through darker ink and weight; surrounding cells periodically flip to replacement letters.
- Reduced-motion users receive the same static field without letter flips.
- The lower row grounds the abstract field with a larger edge-faded portrait, name and role metadata, a concise leadership profile, and a prominent resume action.
- The location reflects the supplied live LinkedIn source: Kuala Lumpur, MY.

## Systems Model

The architecture section is a newly drawn, high-level clinical-AI delivery model rather than a literal infrastructure diagram. Its domains are:

- Hospital / NHS: RIS trigger, PACS archive, patient health-record metadata service, and radiologist workstation.
- Hospital-hosted integration: a de-identification, synchronization, and tunnel VM operated and supported by Aival.
- Cloud routing: a DICOM router in a GCP virtual private cloud.
- AI vendors and products: visibly plural CXR, CT head, and additional model containers.
- Aival: Aival Analysis Suite for monitoring and analysis.

The numbered flow is:

1. RIS requests an image from PACS and signals when the image is ready.
2. The integration VM pulls DICOM from PACS and de-identifies its tags.
3. The VM pulls and synchronizes patient health-record metadata.
4. The VM sends de-identified DICOM to the cloud DICOM router.
5. The VM sends patient metadata directly to Aival Analysis Suite via rsync.
6. The router chooses an AI product container according to metadata, modality, and use case.
7. AI output reaches Aival Analysis Suite for monitoring and analysis.
8. Radiologists access Aival's web endpoint through the integration VM tunnel.

### Exact Flow Legend

- Blue: DICOM / CXR image objects.
- Orange: patient metadata.
- Green: AI output / results.
- Yellow: web service/page hosting and radiologist access.

Selecting a node updates `OWNER`, `PURPOSE`, `INPUT / OUTPUT`, and `DEPLOYMENT` evidence. At mobile widths, the desktop SVG is replaced by a selectable eight-step flow list carrying the same semantics. The model deliberately omits client data, vendor-specific implementation, credentials, and security configuration.

## Preserved Product Interactions

- The portfolio remains a compact timed stage that advances every eight seconds when unattended, pauses for hover or keyboard focus, and stops for reduced-motion users.
- Metalynx Scatter remains the complete interactive example, with class and cohort inspection in a conceptual PCA model-space visualization.
- Kikan and Radiology Viewer remain clearly labeled prototype directions and make no shipped-capability or performance claims.
- The concise experience timeline remains intact with a shorter chapter heading.
- Skills remain keyboard-operable tabs, now expanded into truthful grouped capabilities and evidence from the supplied resume and LinkedIn material. Go, Kotlin, Rust, Logstash, and Kibana are explicitly secondary or familiar.
- The final resume section remains calm and dominant, with LinkedIn, email, and About subordinate.

## Disclosure And Claims

- Large enterprise healthcare customers are described generically; no named endorsement, customer relationship, or adoption claim is implied.
- Aival evidence stays high-level and avoids internal screenshots, proprietary architecture, sensitive metrics, named client sites, confidential workflows, and security-relevant detail.
- Scatter's interactive visual is portfolio-specific rather than represented as historical product UI.
- Kikan is described as early-stage dogfooding, not proven production autonomy.
- The Radiology Viewer is a neutral schematic containing no patient data.

## Implementation Notes

- Standalone HTML with inline CSS, JavaScript, and SVG.
- Local dependency: `assets/headshot.jpeg`.
- System fonts only, with a Red Hat Mono-like system monospace stack for the identity field and technical labels.
- Semantic landmarks, an accessible hidden page heading, visible focus states, keyboard-operable tabs and diagram nodes, skip navigation, and 44px minimum interactive targets.
- The 004 variant label is hidden at widths of 900px and below.
- Mobile layouts recompose the architecture, product stage, timeline, skill interface, and CTA rather than shrinking desktop content.
- The first portfolio and skills panels remain meaningful static fallback content if JavaScript is unavailable.
