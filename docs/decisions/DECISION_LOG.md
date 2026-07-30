# Decision Log

## 2026-07-16 — Step 1 confirmed inputs recorded

Confirmed for documentation:

- MindHeavenDAO brand; MIND governance layer/token; HEAVEN utility layer/token; MindGlobal Pool.
- Initial BNB Smart Chain target with practical EVM portability.
- Fixed 20,000,000 MIND supply; no future mint, inflation, tax, blacklist, or hidden balance adjustment.
- 75% Founder allocation and 25% Foundation/protocol treasury allocation.
- Five reference Founder Node tiers and 365/730-day locks; exact MIND amounts remain open.
- Direct-only HEAVEN referrals, active-node requirement, immutable parent, anti-self/cycle rules, prospective 7/8/10% brackets.
- MindGlobal Pool initial 100 BPS, ordinary range 0–500, future-only changes, finalized-period immutability.
- Governance V1 ordinary baseline: one MIND one vote, seven days, 10% quorum, >50% approval, 48-hour delay.
- 60/25/15 operating-surplus policy is indicative and governance-controlled.

No open recommendation in these documents is recorded as approved. No production implementation or deployment is authorized.

## 2026-07-29 — GitHub designated as official source of record

Confirmed:

- The `samgiri/mindheavendao` GitHub repository is the official source of record for MindHeavenDAO Foundation documents, decision history, versioned policies, technical specifications, and application code.
- Material work must be preserved through scoped branches, commits, and pull requests.
- Drafts must remain visibly classified as drafts until approved.
- Approved records must not be silently overwritten; material changes require a new version and decision entry.
- External presentation files may be generated from repository records, but GitHub remains the authoritative version unless a binding legal record requires a different system.

This decision improves transparency, professionalism, continuity, and auditability. It does not make a draft authoritative merely because it is stored in the repository.

## 2026-07-30 — MIND transferability approved

Confirmed by the Founder:

- MIND will use the transferable-token model rather than the non-transferable Step 2 recommendation.
- Maximum supply remains fixed at 20,000,000 MIND with no future minting.
- Transferability does not authorize a sale, listing, liquidity program, price promise, guaranteed return, HEAVEN entitlement, or deployment.
- New technical and economic drafts must follow [MHE-001](MHE-001_TRANSFERABLE_MIND_DECISION.md); historical drafts remain preserved.

OD-15 is resolved. Allocation vesting, governance safeguards, Founder Node amounts, reward formulas, legal review, and deployment remain separate approval gates.

## 2026-07-30 — MIND dollar reference limited to off-chain planning

Confirmed by the Founder:

- “1 MIND = $1” is an off-chain Founder Node allocation reference only.
- Contracts will use fixed MIND amounts and will not calculate USD value or depend on a price oracle.
- The reference is not a peg, guaranteed price, redemption promise, treasury obligation, or market-value representation.
- New drafts must follow [MHE-002](MHE-002_MIND_OFFCHAIN_REFERENCE_DECISION.md).

OD-02 is resolved. Exact Founder Node MIND amounts remain pending under OD-01.

## 2026-07-30 — Five fixed Founder Node allocations approved

Confirmed by the Founder:

- The minimum Founder Node commitment is 5,000 MIND.
- The fixed tiers are Seed 5,000; Builder 10,000; Visionary 25,000; Pioneer 50,000; and Genesis 100,000 MIND.
- No 500-MIND or sub-5,000-MIND Founder Node category is created.
- Dollar figures remain off-chain planning references under MHE-002.
- New drafts must follow [MHE-003](MHE-003_FOUNDER_NODE_MIND_ALLOCATION_DECISION.md).

OD-01 is resolved. Lock terms, rewards, withdrawals, multiple-node rules, legal review, and deployment remain separate approval gates.

## 2026-07-30 — Variable Founder Node reward ceilings approved

Confirmed by the Founder:

- Six-, twelve-, and twenty-four-month business lock terms use maximum total reward references of up to 38%, 78%, and 122% respectively.
- These figures are variable ceilings, not APY, fixed income, guaranteed yield, or automatic liabilities.
- Actual rewards depend on DAO performance, governance-approved budgets, and sufficient pre-funded HEAVEN and may be lower or zero.
- New drafts must follow [MHE-004](MHE-004_VARIABLE_REWARD_CEILING_DECISION.md).

OD-09 is partially resolved. The performance formula, HEAVEN conversion, cadence, exact duration constants, and funding model remain open.

## 2026-07-30 — Founder Node reward claim options approved

Confirmed by the Founder:

- Weekly HEAVEN claims carry a 2% protocol claim fee.
- Monthly HEAVEN claims carry no DAO protocol claim fee; BSC network gas remains payable.
- Maturity settlement may receive a pre-funded loyalty bonus of up to 5%.
- All base rewards, fees, and bonuses remain variable and inside the applicable maximum total reward ceiling.
- New drafts must follow [MHE-005](MHE-005_REWARD_CLAIM_OPTIONS_DECISION.md).

OD-09 remains partially open for the performance formula, HEAVEN calculation, funding model, timing constants, and anti-gaming rules.

## 2026-07-30 — Founder Node epoch model and legal-first launch gates approved

Confirmed by the Founder:

- Founder Node tiers retain fixed MIND quantities.
- MindHeavenDAO will not use an automatic bonding curve, participation-linked price increase, price oracle, peg, or programmed appreciation mechanism.
- A future allocation epoch may use a governance-approved off-chain contribution reference rate that remains fixed during that epoch.
- The Genesis planning reference may remain 1 MIND = USD 1 under MHE-002; no later reference rate is approved in advance.
- Allocation epochs and pre-funded HEAVEN reward epochs remain separate approval controls.
- Jurisdiction-specific legal, regulatory, AML/KYC, sanctions, tax, privacy, treasury, governance, and security approvals are mandatory before activation.
- New drafts and communications must follow [MHE-006](MHE-006_FOUNDER_NODE_EPOCH_AND_LEGAL_READINESS_DECISION.md).

This decision is not a legal opinion and does not authorize a public offer, contribution flow, reward epoch, contract deployment, liquidity program, or launch.
