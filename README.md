# MindHeavenDAO

Official MindHeavenDAO repository containing the approved Version 3 website and draft MIND Protocol documentation.

## Approved website

The current homepage design is frozen as MindHeavenDAO Homepage V3 — Final. Documentation work must not redesign or replace files under `app/` or brand assets under `public/`.

```bash
npm install
npm run dev
npm run build
npm test
```

Node.js 22.13 or newer is required.

## Protocol documentation

Step 1 documentation is organized under [`docs/`](docs/):

- [`constitution/`](docs/constitution/) — Constitution and policy principles.
- [`technical/`](docs/technical/) — proposed architecture and contract specifications; no production Solidity.
- [`decisions/`](docs/decisions/) — open decisions, assumptions, risks, and decision history.
- [`diagrams/`](docs/diagrams/) — protocol, governance, node, referral, and pool flows.

The documents are drafts for governance, legal, economic, privacy, health/ethics, and security review. They do not promise returns, company equity, or medical outcomes, and do not authorize deployment.

## Contribution

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before proposing changes. Material protocol changes must update the decision register and changelog and must not be presented as approved until ratified.
