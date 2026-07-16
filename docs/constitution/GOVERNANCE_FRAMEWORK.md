# Governance Framework

## Version 1 baseline

- Voting power: 1 MIND = 1 vote.
- Voting period: 7 days.
- Ordinary quorum: 10% of eligible voting supply.
- Ordinary approval: more than 50% of votes cast.
- Execution delay: 48 hours through a timelock.

Snapshots should prevent vote movement during a proposal from being counted twice. Delegation is recommended. Quorum denominator, proposal threshold, cancellation rules, late-quorum protection, and exclusions for inaccessible treasury tokens remain open.

## Proposal classes

| Class | Examples | Proposed threshold | Status |
|---|---|---:|---|
| Ordinary | future parameters within constitutional bounds | 10% quorum, >50% approval, 48h delay | Confirmed V1 baseline |
| Major | upgrades, large treasury actions, role changes | 15% quorum, 66.67% approval | Recommended, not final |
| Constitutional | constitutional text or protected bounds | 25% quorum, 75% approval, ≥7d delay | Recommended, not final |

## Safeguards

Execution must be transparent, timelocked, bounded by contract invariants, and subject to emergency pause only for defined threats. Finalized reward periods cannot be changed. Conflicted delegates should disclose conflicts. Progressive decentralization milestones are documented separately.

