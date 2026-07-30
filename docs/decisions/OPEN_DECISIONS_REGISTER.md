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
- **Decision record:** [MHE-002 — MIND Off-Chain Reference Decision](MHE-002_MIND_OFFCHAIN_REFERENCE_DECISION.md).
- **Confirmed boundaries:** contracts use fixed MIND amounts; no USD oracle, peg, redemption promise, price guarantee, or treasury obligation.
- **Still required:** OD-01 approval of exact tier amounts and legal/communications review.
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

- **Decision/status:** Supply cap and allocation; Open.
- **Why it matters:** Fundamental utility economics and liabilities.
- **Options:** fixed cap; capped emissions; uncapped governed emissions.
- **Recommended:** defer until independently modeled; prefer transparent hard constraints.
- **Risks:** inflation, scarcity mismatch, regulatory messaging.
- **Approver/dependencies:** Constitutional governance/legal; utility design.

## OD-07 — HEAVEN emission model

- **Decision/status:** Release schedule and authorization; Open.
- **Why it matters:** Determines sustainability.
- **Options:** pre-minted allocation; capped epochs; governed budget.
- **Recommended:** pre-funded epoch budgets with published caps.
- **Risks:** over-emission, capture, unfunded promises.
- **Approver/dependencies:** Governance/economic review; supply and treasury.

## OD-08 — HEAVEN reward-vault funding

- **Decision/status:** Funding sources and cadence; Open.
- **Why it matters:** No reward can exceed available HEAVEN.
- **Options:** treasury epochs; protocol revenue; approved contributions.
- **Recommended:** pre-fund isolated epochs before qualification/finalization.
- **Risks:** insolvency, commingling, source legality.
- **Approver/dependencies:** Treasury governance/legal; emission, budgets.

## OD-09 — Weekly staking reward formula

- **Decision/status:** Whether/how active nodes accrue HEAVEN; Open.
- **Why it matters:** Largest potential recurring liability.
- **Options:** no automatic reward; funded fixed epochs; performance-based budget.
- **Recommended:** no formula until HEAVEN economics and funding are approved; never guaranteed.
- **Risks:** unsustainable yield, APY marketing, gaming.
- **Approver/dependencies:** Constitutional governance/legal; HEAVEN model, vault funding.

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

- **Decision/status:** Evidence, reviewers, appeals, commitments; Open.
- **Why it matters:** Pool points depend on genuine contribution.
- **Options:** committees; attestations; signed data providers; hybrid review.
- **Recommended:** multi-reviewer process, evidence rubric, appeal window, Merkle commitment.
- **Risks:** bias, bribery, privacy, centralization.
- **Approver/dependencies:** Governance/privacy/legal; categories and suspension.

## OD-21 — MindGlobal point assignment

- **Decision/status:** Category weights, caps, and period rules; Open.
- **Why it matters:** Determines proportional distribution.
- **Options:** fixed rubric; governance-set future weights; quadratic/capped categories.
- **Recommended:** published per-period rubric with category caps and prospective governance updates.
- **Risks:** gaming, popularity bias, opaque scoring.
- **Approver/dependencies:** Governance/community review; verification model.

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

- **Decision/status:** Expiry for referral and pool claims; Open.
- **Why it matters:** Defines long-term liabilities and user fairness.
- **Options:** no expiry; 12/24/36 months; governance sweep after notice.
- **Recommended:** long, published deadline with repeated notice and legally reviewed exceptions.
- **Risks:** forfeiture disputes, permanent liabilities.
- **Approver/dependencies:** Governance/legal; vault and user communications.

## OD-29 — Unclaimed HEAVEN handling

- **Decision/status:** Destination after claim expiry; Open.
- **Why it matters:** Prevents arbitrary treasury capture.
- **Options:** roll to future pool; return to source; community treasury; burn.
- **Recommended:** return to designated reward reserve after deadline and public reconciliation.
- **Risks:** unfair enrichment, accounting ambiguity.
- **Approver/dependencies:** Governance/legal; claim deadlines and emission rules.

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

