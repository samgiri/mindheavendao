# Open Decisions Register

**Status key:** Open means no final approval. Recommended options are proposals, not decisions.

## OD-01 — Exact MIND per Founder Node tier

- **Decision/status:** **Approved 2026-07-30 — five fixed Founder Node allocation levels.**
- **Decision record:** [MHE-003 — Founder Node MIND Allocation Decision](MHE-003_FOUNDER_NODE_MIND_ALLOCATION_DECISION.md).
- **Approved amounts:** Seed 5,000; Builder 10,000; Visionary 25,000; Pioneer 50,000; Genesis 100,000 MIND.
- **Confirmed boundary:** 5,000 MIND is the minimum Founder Node commitment; no sub-5,000 tier.
- **Still required:** lock terms, rewards, withdrawal, upgrades, multiple-node rules, legal/security review, and deployment approval.
- **Risks:** exclusion, concentration, inconsistent marketing, and confusion between planning reference and market value.
- **Approver/dependencies:** Founder approved amounts; MHE-002 controls reference language.

## OD-02 — MIND reference-price methodology

- **Decision/status:** **Approved 2026-07-30 — 1 MIND = $1 is an off-chain Founder Node allocation reference only.**
- **Decision records:** [MHE-002 — MIND Off-Chain Reference Decision](MHE-002_MIND_OFFCHAIN_REFERENCE_DECISION.md) and [MHE-006 — Founder Node Epoch and Legal Readiness Decision](MHE-006_FOUNDER_NODE_EPOCH_AND_LEGAL_READINESS_DECISION.md).
- **Confirmed boundaries:** contracts use fixed MIND amounts; no USD oracle, peg, redemption promise, price guarantee, or treasury obligation.
- **Still required:** Any future epoch reference rate requires a separate prospective governance decision and jurisdiction-specific legal/communications approval.
- **Risks:** users may misunderstand a planning reference as promised market value.
- **Approver/dependencies:** Founder approved methodology; legal/finance review remains required for public materials.

## OD-03 — Accepted payment assets

- **Decision/status:** Assets accepted for any contribution flow; Open.
- **Why it matters:** Affects custody, volatility, sanctions, and accounting.
- **Options:** MIND only; selected stablecoins; native asset; off-chain payment.
- **Recommended:** minimal allowlist of audited assets after legal review.
- **Risks:** depeg, token quirks, chargebacks, AML exposure.
- **Approver/dependencies:** Treasury governance/legal; node acquisition design.

## OD-04 — Eligible referral reward base

- **Decision/status:** Amount to which 7/8/10% applies; Open.
- **Why it matters:** Determines liabilities and user expectations.
- **Options:** approved protocol fee; fixed HEAVEN amount; net eligible contribution.
- **Recommended:** bounded protocol-defined base excluding taxes, refunds, and pass-through funds.
- **Risks:** unfunded rewards, mis-selling, ambiguous refunds.
- **Approver/dependencies:** Governance/legal; funding and qualification rules.

## OD-05 — Qualified referral definition

- **Decision/status:** Exact qualification event and finality; Open.
- **Why it matters:** Controls fraud, brackets, and rewards.
- **Options:** active paid node after review; time-delayed finality; verified contribution milestone.
- **Recommended:** unique eligible founder with active node after refund/fraud window.
- **Risks:** Sybil, reversals, delayed rewards.
- **Approver/dependencies:** Governance/compliance; identity, refunds, active-status snapshot.

## OD-06 — HEAVEN total supply

- **Decision/status:** **Approved 2026-07-30 — fixed 177,000,000 lifetime and genesis supply.**
- **Decision record:** [MHE-009 — HEAVEN Fixed Supply and Nine-Year Release Decision](MHE-009_HEAVEN_FIXED_SUPPLY_AND_NINE_YEAR_RELEASE_DECISION.md).
- **Approved allocation:** 60% Founder Node/verified service reward reserve; 12% ecosystem/user programs; 10% DAO treasury; 8% development/operations; 5% partners/practitioners; 5% emergency/community reserve.
- **Confirmed boundaries:** 18 decimals; one genesis mint into locked vaults; no future minting, inflation, re-mint after burn, public-sale allocation, guaranteed value, peg, redemption, or automatic burn at launch.
- **Still required:** audited token/vault implementation, named roles and vaults, non-reward schedules and beneficiaries, legal review, deployment, and activation.
- **Risks:** vault compromise, premature circulation, insider concentration, allocation misuse, misleading scarcity claims, and regulatory classification.
- **Approver/dependencies:** Founder approved supply/allocation; constitutional governance, legal, economic, treasury, and security review remain required for activation.

## OD-07 — HEAVEN emission model

- **Decision/status:** **Partially approved 2026-07-30 — genesis-locked supply and nine-year reward-reserve release ceilings.**
- **Decision records:** [MHE-009 — HEAVEN Fixed Supply and Nine-Year Release Decision](MHE-009_HEAVEN_FIXED_SUPPLY_AND_NINE_YEAR_RELEASE_DECISION.md) and [MHE-010 — Reward Vault Lifecycle and Dormant Claims Decision](MHE-010_REWARD_VAULT_LIFECYCLE_AND_DORMANT_CLAIMS_DECISION.md).
- **Approved timing:** the schedule begins at a separately approved non-backdated timestamp; each Release Year is 365 days; an epoch cannot cross a Release Year boundary.
- **Approved annual ceilings:** 12%, 10%, 8%, 7%, 6%, 5%, 4%, 4%, and 4% of total supply for Years 1–9, totaling the 60% / 106,200,000 HEAVEN reward reserve.
- **Confirmed boundaries:** annual ceilings are maximums, not promised emissions; no future-year borrowing; unused capacity remains locked and does not roll automatically; the historical ten-year schedule is superseded.
- **Still open:** actual commencement timestamp, exact recurring epoch duration, epoch budgets, claim-mode timing interaction, vault implementation, administrators, reporting, legal/security approval, and activation.
- **Risks:** over-release, schedule ambiguity, governance capture, vault compromise, unfunded promises, and misleading emissions language.
- **Approver/dependencies:** Founder approved architecture; governance/economic/legal/security approval remains required for implementation and each activation.

## OD-08 — HEAVEN reward-vault funding

- **Decision/status:** **Partially approved 2026-07-30 — genesis-locked reserve, isolated pre-funding, lifecycle states, and unused-fund return.**
- **Decision records:** [MHE-009 — HEAVEN Fixed Supply and Nine-Year Release Decision](MHE-009_HEAVEN_FIXED_SUPPLY_AND_NINE_YEAR_RELEASE_DECISION.md) and [MHE-010 — Reward Vault Lifecycle and Dormant Claims Decision](MHE-010_REWARD_VAULT_LIFECYCLE_AND_DORMANT_CLAIMS_DECISION.md).
- **Approved funding architecture:** HEAVEN moves from the locked 60% reward reserve into a separately approved isolated epoch vault before reward activation; final approval is due at least seven days before start and full funding at least 48 hours before start.
- **Approved lifecycle:** funded-unallocated, provisional, disputed, finalized-claimable, claimed, unused, dormant, returned, and burned states must reconcile exactly; unused funds return within seven days after finalization.
- **Confirmed boundaries:** no commingling with MIND principal; no guaranteed liability; no price/liquidity support; no future-year borrowing; returned funds retain provenance and do not automatically restore or roll annual capacity.
- **Still open:** exact vault contracts, recurring epoch duration, budgets, release authority, funding transactions, claim-mode interaction, reconciliation implementation, administrators, security review, legal approval, and activation.
- **Risks:** vault insolvency, accounting error, commingling, admin compromise, claim-state corruption, source/destination misuse, and legal classification.
- **Approver/dependencies:** Founder approved architecture; treasury governance/legal/security approval remains required for implementation and each funded epoch.

## OD-09 — Founder Node HEAVEN reward formula

- **Decision/status:** **Partially approved 2026-07-30 — variable maximum total reward ceilings.**
- **Decision records:** [MHE-004 — Variable Reward Ceilings](MHE-004_VARIABLE_REWARD_CEILING_DECISION.md), [MHE-005 — Reward Claim Options](MHE-005_REWARD_CLAIM_OPTIONS_DECISION.md), [MHE-006 — Founder Node Epoch and Legal Readiness Decision](MHE-006_FOUNDER_NODE_EPOCH_AND_LEGAL_READINESS_DECISION.md), and [MHE-007 — Service-Based HEAVEN Reward Formula Decision](MHE-007_SERVICE_BASED_HEAVEN_REWARD_FORMULA_DECISION.md).
- **Approved ceilings:** up to 38% for 6 months; up to 78% for 12 months; up to 122% for 24 months.
- **Approved claims:** weekly with 2% protocol claim fee; monthly with no protocol claim fee; maturity with an eligible loyalty bonus up to 5%; network gas remains payable.
- **Approved formula architecture:** eligible fixed MIND quantity × actual epoch rate × calculation-only HEAVEN allocation factor × verified participation score, followed by a common pro-rata funded-pool adjustment.
- **Approved participation scores:** 0 for inactive/ineligible; 0.50 for verified partial completion; 1.00 for verified full completion.
- **Confirmed boundaries:** holding or locking MIND alone does not earn or guarantee HEAVEN; not APY or guaranteed; actual rewards and bonuses may be lower or zero; HEAVEN only; allocation and reward epochs are separately approved; future reward epochs must be pre-funded; all amounts remain inside the ceiling; no auto-compounding or unfunded liability.
- **Still open:** actual epoch rates, HEAVEN allocation factors, service duties and evidence rules, reviewers and appeals, mode switching/anti-gaming, timing and rounding constants, funding source, unused-fund handling, and legal approval.
- **Risks:** subjective scoring, verification disputes, privacy exposure, unsustainable reward cost, misleading APY language, gaming, governance capture, and funding shortfall.
- **Approver/dependencies:** Founder approved ceilings; constitutional governance/legal/economic review must approve the remaining formula and HEAVEN model.

## OD-10 — HEAVEN auto-compounding meaning

- **Decision/status:** Operational definition; Open.
- **Why it matters:** HEAVEN is distinct from MIND staking.
- **Options:** no compounding; opt-in utility lock; claim-and-restake workflow.
- **Recommended:** avoid “auto-compounding” until a real HEAVEN utility position exists.
- **Risks:** misleading returns, custody/tax complexity.
- **Approver/dependencies:** Governance/legal; HEAVEN utility and reward formula.

## OD-11 — Founder Node early withdrawal

- **Decision/status:** Whether principal can exit before maturity; Open.
- **Why it matters:** User safety and lock credibility.
- **Options:** prohibited; penalty; cooldown and governance-set conditions.
- **Recommended:** transparent opt-in terms with bounded penalty, subject to legal review.
- **Risks:** bank-run dynamics, unfair penalties, accounting complexity.
- **Approver/dependencies:** Governance/legal/security; reward clawbacks.

## OD-12 — Emergency withdrawal

- **Decision/status:** Safe exit during prolonged pause; Open.
- **Why it matters:** Protects principal when operations fail.
- **Options:** principal-only escape hatch; timelocked migration; none.
- **Recommended:** delayed principal-only escape hatch that cannot claim unearned rewards.
- **Risks:** bypass, exploitation during incident.
- **Approver/dependencies:** Governance/security; pause and upgrade model.

## OD-13 — Founder Node transferability

- **Decision/status:** Transfer of positions; Open.
- **Why it matters:** Affects identity, referrals, and secondary markets.
- **Options:** non-transferable; governed transfer; freely transferable.
- **Recommended:** non-transferable at launch, with reviewed migration path.
- **Risks:** market speculation, sanctions evasion, status ambiguity.
- **Approver/dependencies:** Constitutional governance/legal; NFT and inheritance.

## OD-14 — Founder Node inheritance

- **Decision/status:** Succession after death/incapacity; Open.
- **Why it matters:** Long locks require continuity.
- **Options:** wallet estate process; nominated beneficiary; legal executor review.
- **Recommended:** documented off-chain legal process plus bounded on-chain recovery.
- **Risks:** fraud, privacy, jurisdiction conflict.
- **Approver/dependencies:** Foundation/legal/governance; identity and transferability.

## OD-15 — MIND token transferability

- **Decision/status:** **Approved 2026-07-30 — standard transferable governance token.**
- **Decision record:** [MHE-001 — Transferable MIND Decision](MHE-001_TRANSFERABLE_MIND_DECISION.md).
- **Confirmed boundaries:** fixed 20,000,000 genesis supply; no future mint, tax, blacklist, confiscation, guaranteed value, or automatic MIND/HEAVEN conversion.
- **Still required:** allocation vesting, governance safeguards, legal review, liquidity policy, and deployment approval.
- **Risks:** speculation, concentration, governance capture, classification, and misleading market communications.
- **Approver/dependencies:** Founder approved transferability; constitutional governance and legal/security review retain authority over dependent rules.

## OD-16 — Foundation jurisdiction

- **Decision/status:** Incorporation location; Open.
- **Why it matters:** Determines duties, taxation, reporting, liability.
- **Options:** jurisdiction-specific foundation/association/company structures.
- **Recommended:** comparative counsel-led review based on operations and users.
- **Risks:** enforcement, tax, banking, credibility.
- **Approver/dependencies:** Founding board and counsel; launch markets.

## OD-17 — DAO legal wrapper

- **Decision/status:** Entity connecting governance to legal acts; Open.
- **Why it matters:** Contracts, liability, employment, IP, treasury.
- **Options:** foundation; association; purpose trust; paired entities.
- **Recommended:** counsel-selected structure with explicit on-chain/off-chain authority map.
- **Risks:** governance decisions unenforceable, member liability.
- **Approver/dependencies:** Foundation/counsel/governance; jurisdiction.

## OD-18 — Upgradeability model

- **Decision/status:** Proxy, migration, or immutable per component; Open.
- **Why it matters:** Balances fixes against admin risk.
- **Options:** immutable; UUPS/transparent proxies; versioned migration.
- **Recommended:** immutable token/timelock; migration-first for custody; bounded proxies only where justified.
- **Risks:** upgrade capture, storage corruption, frozen bugs.
- **Approver/dependencies:** Governance/security/auditors; component design.

## OD-19 — Governance proposal eligibility

- **Decision/status:** Who can submit proposals and required threshold; Open.
- **Why it matters:** Controls access and spam.
- **Options:** token threshold; active node plus threshold; endorsed forum process.
- **Recommended:** modest delegated-MIND threshold plus documented community pathway.
- **Risks:** exclusion, spam, whale gatekeeping.
- **Approver/dependencies:** Constitutional governance; voting distribution.

## OD-20 — Off-chain contribution verification

- **Decision/status:** **Partially approved 2026-07-30 — evidence, review, conflict, appeal, and privacy architecture.**
- **Decision record:** [MHE-008 — Participation Duties and Evidence Decision](MHE-008_PARTICIPATION_DUTIES_AND_EVIDENCE_DECISION.md).
- **Approved controls:** prospective task criteria; attributable evidence; two independent reviewers for qualitative work; conflict declarations; reason codes; at least 14 days to appeal; non-originating appeal review; sensitive evidence kept off-chain; minimal public commitments.
- **Still open:** evidence platform, exact schemas, reviewer appointment and compensation, automated-rule validation, retention periods, controller/processor roles, security assessment, legal review, and activation.
- **Risks:** bias, bribery, collusion, privacy exposure, reviewer concentration, automation errors, and centralization.
- **Approver/dependencies:** Founder approved architecture; governance/privacy/legal/security approval remains required for implementation, categories, reviewers, suspension, and activation.

## OD-21 — MindGlobal point assignment

- **Decision/status:** **Partially approved 2026-07-30 for Founder Node participation — categories, caps, thresholds, and prospective task-catalog rules.**
- **Decision record:** [MHE-008 — Participation Duties and Evidence Decision](MHE-008_PARTICIPATION_DUTIES_AND_EVIDENCE_DECISION.md).
- **Approved Founder Node framework:** governance stewardship capped at 25 points; education/community, verification/research, technical/design/operations, and human-potential mission work each capped at 40; overall cap 100; ordinarily at least two tasks; no more than 60 points from one category.
- **Approved MHE-007 score mapping:** 0–49 points = 0; 50–79 = 0.50; 80–100 = 1.00.
- **Still open:** exact epoch tasks and values, repetition rules, quality rubrics, accessibility alternatives, MindGlobal Pool applicability, reviewer system, legal review, and activation.
- **Risks:** gaming, popularity bias, opaque scoring, category capture, exclusion, employment/tax misclassification, and unverifiable work.
- **Approver/dependencies:** Founder approved Founder Node architecture; governance/community/legal/privacy/security review remains required for implementation and any MindGlobal Pool use.

## OD-22 — Suspension and appeal process

- **Decision/status:** Grounds, authority, evidence, remedy; Open.
- **Why it matters:** Protects protocol and due process.
- **Options:** elected council; foundation review; independent panel.
- **Recommended:** published grounds, multi-person decision, notice, appeal, and time limits.
- **Risks:** arbitrary exclusion, slow fraud response.
- **Approver/dependencies:** Governance/legal/ethics; identity and verification.

## OD-23 — Treasury allocation breakdown

- **Decision/status:** Operational detail beneath indicative 60/25/15 policy; Open.
- **Why it matters:** Budget control and sustainability.
- **Options:** annual budgets; epoch caps; proposal-by-proposal.
- **Recommended:** annual budget plus epoch spending caps and public variance reports.
- **Risks:** rigidity, misuse, hidden liabilities.
- **Approver/dependencies:** Governance/treasury committee; revenue and reserve policy.

## OD-24 — Oracle requirements

- **Decision/status:** Whether price/status data is needed on-chain; Open.
- **Why it matters:** Oracles add manipulation and liveness risk.
- **Options:** no price oracle; audited TWAP; decentralized feed; signed attestations.
- **Recommended:** avoid price dependence at launch; use redundant feeds only when necessary.
- **Risks:** manipulation, outage, stale data.
- **Approver/dependencies:** Technical governance/security; pricing and accepted assets.

## OD-25 — Audit and bug-bounty budget

- **Decision/status:** Scope, providers, and funding; Open.
- **Why it matters:** Essential before custody or governance deployment.
- **Options:** one audit; multiple audits; staged review plus bounty.
- **Recommended:** independent audit(s), remediation verification, ongoing tiered bounty and monitoring.
- **Risks:** inadequate coverage, budget pressure, false assurance.
- **Approver/dependencies:** Treasury/security governance; final code and launch scope.

## OD-26 — Founder NFT design

- **Decision/status:** Whether an NFT exists and its semantics; Open.
- **Why it matters:** Could confuse credentials with tradable assets.
- **Options:** no NFT; soulbound credential; transferable position token.
- **Recommended:** omit unless needed; if used, non-transferable credential at launch.
- **Risks:** speculation, metadata/IP, transfer loopholes.
- **Approver/dependencies:** Governance/legal/brand; node transfer and inheritance.

## OD-27 — Liquidity policy

- **Decision/status:** Treasury/market liquidity approach; Open.
- **Why it matters:** Affects volatility, access, and regulation.
- **Options:** no protocol liquidity; capped governed provision; external venues only.
- **Recommended:** counsel-reviewed, transparent policy with caps and no price promises.
- **Risks:** loss, manipulation, impermanent loss, classification.
- **Approver/dependencies:** Governance/legal/treasury; transferability and assets.

## OD-28 — Claim deadlines

- **Decision/status:** **Policy approved 2026-07-30 — 24-month standard claim period plus 12-month dormant protection.**
- **Decision record:** [MHE-010 — Reward Vault Lifecycle and Dormant Claims Decision](MHE-010_REWARD_VAULT_LIFECYCLE_AND_DORMANT_CLAIMS_DECISION.md).
- **Approved timeline:** finalized claims remain normally claimable for 24 months, then remain segregated and late-claimable through month 36; deadlines extend for protocol-caused unavailability, protected appeals, and applicable legal processes.
- **Approved notices:** availability notice; approximately 12- and 18-month reminders; notice before dormancy; 90- and 30-day notices before potential disposition.
- **Still required:** contract implementation, contact permissions, recovery/inheritance rules, jurisdiction-specific unclaimed-property analysis, legal review, security audit, and activation.
- **Risks:** forfeiture disputes, inaccessible wallets, notice failure, succession fraud, sanctions holds, custody classification, and permanent liabilities.
- **Approver/dependencies:** Founder approved policy; governance/legal/privacy/security approval remains required for implementation.

## OD-29 — Unclaimed HEAVEN handling

- **Decision/status:** **Policy approved 2026-07-30 — segregated dormancy and legally reviewed return to originating reward reserve.**
- **Decision record:** [MHE-010 — Reward Vault Lifecycle and Dormant Claims Decision](MHE-010_REWARD_VAULT_LIFECYCLE_AND_DORMANT_CLAIMS_DECISION.md).
- **Approved treatment:** after 24 months an unclaimed finalized allocation remains protected in a Dormant Claims Vault through month 36; after repeated notice it may return only to the originating reward reserve and only where legal review confirms no different unclaimed-property, escheat, trust, succession, or similar treatment is required.
- **Confirmed boundaries:** dormant claims are not treasury property; a hold does not create DAO ownership; no automatic burn, insider allocation, liquidity use, or annual-capacity restoration.
- **Still required:** operating entity, jurisdiction map, recovery and succession process, notice implementation, vault code, legal review, security audit, and activation.
- **Risks:** unfair enrichment, legal noncompliance, accounting ambiguity, identity fraud, privacy exposure, and trapped balances.
- **Approver/dependencies:** Founder approved policy; governance/legal/privacy/security approval remains required for implementation and disposition.

## OD-30 — Data privacy model

- **Decision/status:** Data minimization, roles, retention, and rights; Open.
- **Why it matters:** Wellness, identity, and contribution evidence may be sensitive.
- **Options:** pseudonymous minimal data; regional processors; decentralized credentials.
- **Recommended:** keep sensitive evidence off-chain, minimize collection, encrypt, set retention, and complete privacy impact assessment.
- **Risks:** irreversible disclosure, breach, cross-border violations.
- **Approver/dependencies:** Privacy/legal/security governance; verification and jurisdictions.

## OD-31 — Governance voting mechanics

- **Decision/status:** Eligible-supply denominator, abstention treatment, delegation, late-quorum protection, cancellation, and inaccessible-token treatment; Open.
- **Why it matters:** These rules determine whether the confirmed ordinary-governance baseline operates fairly and resists manipulation.
- **Options:** circulating-vote supply; delegated active supply; total eligible supply with defined exclusions; standard or extended quorum protections.
- **Recommended:** use auditable snapshot-based voting with treasury and provably inaccessible balances handled under a published denominator, revocable delegation, explicit abstention rules, and late-quorum protection.
- **Risks:** double counting, quorum manipulation, disenfranchisement, proposal capture.
- **Approver/dependencies:** Constitutional governance and security review; MIND distribution, Governor implementation, legal readiness.

## OD-32 — Proposal classification and materiality thresholds

- **Decision/status:** Financial and operational boundaries between ordinary and major proposals; Open.
- **Why it matters:** Undefined boundaries permit inconsistent classification or proposal splitting.
- **Options:** fixed asset thresholds; percentage-of-treasury limits; annual budget caps; risk-based classification; combined model.
- **Recommended:** combine approved annual/epoch caps with percentage-of-treasury and risk triggers, and aggregate related proposals to prevent threshold avoidance.
- **Risks:** treasury loss, governance bypass, arbitrary classification, slow routine operations.
- **Approver/dependencies:** Constitutional and treasury governance; treasury valuation, budgets, legal obligations.

## OD-33 — Emergency authority configuration

- **Decision/status:** Emergency council composition, threshold, exact pause scope, expiry, renewal, and post-incident review deadline; Open.
- **Why it matters:** Emergency powers must respond quickly without becoming a permanent governance bypass.
- **Options:** security multisig; elected security council; dual Foundation/community confirmation; automated bounded pause.
- **Recommended:** diverse threshold council with named subsystem powers, short automatic expiry, recorded rationale, prompt governance review, and no custody or policy-changing authority.
- **Risks:** delayed incident response, abusive pause, signer compromise, permanent centralization.
- **Approver/dependencies:** Constitutional governance and independent security review; contract architecture, incident plan, signer policy.

## OD-34 — Founder-stewardship review and transition

- **Decision/status:** Review cadence, activation evidence, transition authority, and removal of residual founder privileges; Open.
- **Why it matters:** Progressive decentralization requires a verifiable transfer rather than an indefinite promise.
- **Options:** milestone review; time-based review; independent readiness panel; combined founder/community approval.
- **Recommended:** published milestone assessment at a fixed review cadence, independent legal/security input, explicit transition decision, and a post-activation role map showing every retained or removed authority.
- **Risks:** premature decentralization, founder lock-in, unclear accountability, hidden administrative access.
- **Approver/dependencies:** Founder before activation and constitutional governance after activation; legal wrapper, security, participation, treasury readiness.

