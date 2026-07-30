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

## 2026-07-30 — Service-based HEAVEN reward formula approved

Confirmed by the Founder:

- Founder Node HEAVEN allocations require verified participation; holding or locking MIND alone does not earn or guarantee HEAVEN.
- The formula uses eligible fixed MIND quantity, an actual epoch-and-duration rate, a calculation-only HEAVEN allocation factor, and a verified participation score.
- Participation scores use 0 for inactive/ineligible, 0.50 for verified partial completion, and 1.00 for verified full completion.
- Every reward epoch must be pre-funded in HEAVEN.
- If calculated allocations exceed the funded pool, a common pro-rata adjustment reduces every eligible allocation so total payments cannot exceed available funding.
- New drafts must follow [MHE-007](MHE-007_SERVICE_BASED_HEAVEN_REWARD_FORMULA_DECISION.md).

OD-09 is further partially resolved. Actual rates, HEAVEN factors, duties, verification, funding source, timing, legal approval, security review, and deployment remain open.

## 2026-07-30 — Founder Node participation duties and evidence framework approved

Confirmed by the Founder:

- Participation points must come from useful, prospectively published service tasks; MIND ownership, holding, locking, referral volume, or financial contribution alone is insufficient.
- Approved service categories cover governance stewardship, education/community, verification/research, technical/design/operations, and human-potential mission work.
- Participants may receive no more than 100 verified points per epoch, must ordinarily complete at least two tasks, and cannot receive more than 60 points from one category.
- Scores are 0 below 50 points, 0.50 from 50–79 points, and 1.00 from 80–100 points.
- Qualitative work requires two independent reviewers, conflict declarations, reasoned decisions, and an appeal period of at least 14 days.
- Sensitive evidence remains off-chain under data-minimization, encryption, access, retention, and privacy-impact controls.
- Accessibility alternatives and applicable labor, tax, IP, sanctions, and jurisdictional review are mandatory.
- New drafts must follow [MHE-008](MHE-008_PARTICIPATION_DUTIES_AND_EVIDENCE_DECISION.md).

OD-20 and OD-21 are partially resolved. Exact task catalogs, reviewer appointments, evidence systems, legal review, security review, and activation remain open.

## 2026-07-30 — HEAVEN fixed supply, allocation, and nine-year release approved

Confirmed by the Founder:

- HEAVEN has a fixed lifetime and genesis supply of 177,000,000 with 18 decimals and no future minting.
- The full supply will be created once into named locked vaults.
- The 60% reward reserve is 106,200,000 HEAVEN and uses nine annual maximum release ceilings of 12%, 10%, 8%, 7%, 6%, 5%, 4%, 4%, and 4% of total supply.
- The remaining allocation is 12% ecosystem/user programs, 10% DAO treasury, 8% development/operations, 5% partners/practitioners, and 5% emergency/community reserve.
- Annual ceilings are not guaranteed emissions. HEAVEN moves into isolated epoch vaults only through prospective governance, pre-funding, legal, and security controls.
- Unused annual capacity remains locked and does not roll forward automatically.
- There is no approved public-sale, liquidity, listing, price-support, peg, redemption, guaranteed-value, or guaranteed-return allocation.
- The conflicting earlier ten-year release schedule is superseded by [MHE-009](MHE-009_HEAVEN_FIXED_SUPPLY_AND_NINE_YEAR_RELEASE_DECISION.md).

OD-06 is resolved. OD-07 and OD-08 are partially resolved; implementation, vault, epoch, legal, security, and activation parameters remain open.

## 2026-07-30 — HEAVEN reward-vault lifecycle and dormant-claim protection approved

Confirmed by the Founder:

- The MHE-009 nine-year schedule begins only at a separately approved, non-backdated commencement timestamp after legal, governance, security, and deployment readiness.
- Release Years are nine consecutive 365-day periods; an epoch cannot cross or draw from more than one Release Year.
- Each epoch requires final approval at least seven days before start and full HEAVEN deposit at least 48 hours before start.
- Evidence, review, appeal, and finalization use a published maximum 56-day post-service-window process.
- Unused epoch HEAVEN returns to its originating reward reserve within seven days after finalization, retains its release-year provenance, and does not automatically restore or roll annual capacity.
- Finalized claims receive 24 months of standard availability plus 12 months of segregated dormant protection.
- Post-36-month return requires repeated notice, legal review, and compliance with applicable unclaimed-property or similar law.
- Claims deadlines extend for protocol-caused unavailability and protected appeals or legal processes.
- New drafts must follow [MHE-010](MHE-010_REWARD_VAULT_LIFECYCLE_AND_DORMANT_CLAIMS_DECISION.md).

OD-28 and OD-29 policy architecture is approved. Exact claim mechanics, vault implementation, legal treatment, security review, and activation remain open.

## 2026-07-30 — Claim timing, switching, and maturity anti-gaming approved

Confirmed by the Founder:

- Founder Node duration labels use exact on-chain periods of 180, 365, and 730 days.
- Positions must explicitly select weekly, monthly, or maturity claim mode before activation; there is no hidden default.
- Weekly and monthly successful-claim intervals are seven and 30 days respectively.
- Mode switches apply prospectively after 14 days and are limited to one effective switch per rolling 90 days.
- Reward lots preserve the mode, fee, and bonus attributes effective for their underlying service/reward interval.
- Weekly-attributed lots retain the 2% HEAVEN protocol fee; monthly and maturity lots have no DAO protocol claim fee.
- Maturity-bonus consideration requires continuous maturity mode from activation through maturity and no early claim.
- Once a non-maturity mode becomes effective, maturity-bonus eligibility for that position is permanently lost.
- No provisional, disputed, unfinalized, or unfunded amount is claimable.
- New drafts must follow [MHE-011](MHE-011_CLAIM_TIMING_SWITCHING_AND_MATURITY_DECISION.md).

OD-09 claim timing and anti-gaming architecture is approved. Actual rates, factors, bonuses, epoch duration, arithmetic details, legal review, security review, and activation remain open.

## 2026-07-30 — Founder Node early withdrawal and emergency exit approved

Confirmed by the Founder:

- Normal maturity and eligible exits return the same number of locked MIND units with no protocol principal fee.
- Ordinary early exit uses a 30-day cooldown.
- Submitting an early-exit request prospectively suspends position status/voting and stops reward eligibility for unfinished intervals.
- Completed pre-request service intervals may still finalize; claimed and finalized HEAVEN is preserved.
- Maturity-bonus eligibility is permanently lost when an ordinary early-exit request is submitted.
- Cancelling an exit does not restore the reward gap or maturity-bonus eligibility and requires 30 days before another ordinary request.
- A valid critical-event or 30-day prolonged-pause path permits principal-only emergency exit without cooldown.
- Participant MIND principal cannot be lent, pledged, bridged, used by treasury, burned as a penalty, or confiscated through ordinary administration.
- New drafts must follow [MHE-012](MHE-012_EARLY_WITHDRAWAL_AND_EMERGENCY_EXIT_DECISION.md).

OD-11 and OD-12 policy architecture is approved. Contract authority, recovery, inheritance, legal review, security review, and activation remain open.
