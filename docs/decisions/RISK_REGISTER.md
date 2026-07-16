# Risk Register

Likelihood and impact are preliminary: Low, Medium, or High.

| Risk | Description | Likelihood | Impact | Mitigation | Residual | Owner |
|---|---|---:|---:|---|---:|---|
| Smart-contract risk | Defects cause loss or incorrect state | M | H | minimal design, audits, fuzz/invariant tests, bounty, pause | M | Security Council |
| Governance capture | Coordinated holders control decisions | M | H | quorum tiers, timelock, delegation transparency, monitoring | M | Governance |
| Whale voting | Concentrated MIND dominates outcomes | H | H | distribution reporting, delegation diversity, conflict rules | M-H | Governance |
| Referral abuse | Fake/reversed qualifications extract rewards | H | H | direct-only registry, uniqueness, delay, funded reservations, review | M | Referral Operations |
| Sybil accounts | One actor appears as many contributors | H | H | privacy-preserving uniqueness, evidence rubric, appeals | M | Verification Council |
| Unfunded rewards | Liabilities exceed HEAVEN | M | H | pre-funding, atomic reservation, solvency invariants | L | Treasury/Vault |
| Treasury misuse | Authorized actors divert assets | M | H | multisig, timelock, budgets, simulation, public reporting | M | Treasury Council |
| Regulatory classification | Tokens/nodes/rewards trigger obligations | H | H | multi-jurisdiction counsel, restrained communications, launch controls | M-H | Legal Foundation |
| Medical/wellness claims | Unsupported claims harm users | M | H | content policy, qualified review, disclaimers, escalation | M | Health & Ethics Council |
| Data privacy | Sensitive identity/wellness data is exposed | M | H | off-chain minimization, encryption, retention, DPIA, access logs | M | Privacy Officer |
| Founder mis-selling | Nodes presented as equity or guaranteed returns | H | H | approved materials, training, monitoring, sanctions, refunds policy | M | Compliance |
| Liquidity risk | Thin/volatile markets impair users/treasury | H | H | no price promises, exposure caps, reserves, transparent policy | M-H | Treasury/Risk |
| Oracle risk | Manipulated/stale data changes calculations | M | H | avoid launch dependency, redundancy, bounds, circuit breakers | L-M | Engineering |
| Upgrade-admin risk | Admin upgrades malicious/unsafe code | M | H | minimize proxies, multisig, timelock, audit and simulation | M | Security/Governance |
| Multisig compromise | Signer keys or process fail | M | H | diverse signers, hardware keys, threshold, rotation, drills | M | Multisig Signers |
| Launch centralization | Foundation control persists or is opaque | H | M-H | published powers, milestones, expiry and reporting | M | Foundation Board |
| Reputation manipulation | Points/governance influenced by popularity or brigading | H | M | evidence rubrics, caps, reviewers, appeals, audits | M | Verification Council |
| Physical hub liability | Events/hubs create safety and employment liability | M | H | local entities, insurance, safety standards, contracts | M | Hub Operations/Legal |
| Cross-border exposure | Conflicting token, privacy, tax, referral laws | H | H | jurisdiction gating, counsel, localized terms, monitoring | M-H | Legal Foundation |

