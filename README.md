# MindHeavenDAO

Official MindHeavenDAO repository containing the approved Version 3 website, Foundation Volume I, and draft governance and MIND Protocol documentation.

## Approved website

The current homepage design is frozen as MindHeavenDAO Homepage V3 — Final. Documentation work must not redesign or replace files under `app/` or brand assets under `public/`.

```bash
npm install
npm run dev
npm run build
npm test
```

Node.js 22.13 or newer is required.

## Foundation Volume I

The founding records are indexed in [`docs/foundation/`](docs/foundation/):

- [MHF-000 Foundation Charter](docs/foundation/MHF-000_FOUNDATION_CHARTER.md)
- [Founding Manifesto](docs/foundation/FOUNDING_MANIFESTO.md)
- [Documentation Standards](docs/foundation/DOCUMENTATION_STANDARDS.md)
- [Foundation status and index](docs/foundation/README.md)

These records are drafts until reviewed and explicitly approved through the documented governance process.

## Governance constitution

- [MHC-000 Governance Constitution](docs/constitution/MHC-000_GOVERNANCE_CONSTITUTION.md) — the proposed institutional governance layer beneath the Foundation Charter.
- [MIND Protocol Constitution v0.1](docs/constitution/MIND_PROTOCOL_CONSTITUTION_v0.1.md) — the earlier protocol-focused draft retained for history and specialist policy context.

MHC-000 remains a draft until founder approval and requires a separate activation decision before any on-chain governance becomes operational.

## Protocol documentation

Step 1 documentation is organized under [`docs/`](docs/):

- [`constitution/`](docs/constitution/) — Constitution and policy principles.
- [`technical/`](docs/technical/) — proposed architecture and contract specifications; no production Solidity.
- [`decisions/`](docs/decisions/) — open decisions, assumptions, risks, and decision history.
- [`diagrams/`](docs/diagrams/) — protocol, governance, node, referral, and pool flows.

The documents are drafts for governance, legal, economic, privacy, health/ethics, and security review. They do not promise returns, company equity, or medical outcomes, and do not authorize deployment.

## Repository of record

GitHub is the official source of record for MindHeavenDAO documentation, decisions, policies, specifications, code, and review history. Material work should be traceable through branches, commits, and pull requests. External presentation files may derive from these records, but do not replace the authoritative repository copy unless a binding legal record requires otherwise.

## Contribution

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before proposing changes. Material protocol changes must update the decision register and changelog and must not be presented as approved until ratified.
