# Founder Node Service-Based HEAVEN Reward Formula Decision

**Document ID:** MHE-007  
**Version:** 1.0  
**Status:** Approved formula architecture; inactive pending dependent approvals  
**Classification:** Economic, participation, and reward-accounting decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-003, MHE-004, MHE-005, and MHE-006  
**Related open decisions:** OD-07, OD-08, OD-09, OD-20, and OD-21

## Approved objective

Founder Node HEAVEN allocations will use a service-based, governance-approved, pre-funded epoch formula. Holding, purchasing, receiving, or locking MIND alone does not earn or guarantee HEAVEN.

This decision approves the calculation architecture and mandatory funding cap. It does not approve an epoch, an actual reward rate, a HEAVEN allocation factor, a funded budget, participation duties, verification procedures, token issuance, deployment, public offer, or legal activation.

## Approved formula

For participant (i) in epoch (e) and approved duration (d):

```text
Calculated allocation:
C_i = Q_i × R_e,d × F_e × S_i

Pool adjustment:
A_e = min(1, B_e ÷ Σ C_i)

Final payable reward:
P_i = C_i × A_e
```

Where:

| Symbol | Meaning | Mandatory boundary |
|---|---|---|
| (Q_i) | Participant's eligible fixed MIND quantity | Fixed token quantity; not USD value |
| (R_{e,d}) | Actual reward rate approved for epoch and duration | Must not exceed the applicable MHE-004 ceiling |
| (F_e) | HEAVEN allocation factor for the epoch | Calculation parameter only; not price, peg, exchange rate, or redemption value |
| (S_i) | Verified participation score | From 0 to 1; MIND holding alone is insufficient |
| (B_e) | HEAVEN actually available in the isolated pre-funded epoch pool | Must be funded before activation |
| (C_i) | Participant's calculated allocation before the pool adjustment | Not a debt or guaranteed entitlement |
| (A_e) | Common pool adjustment factor | Proportionally reduces allocations if the pool is insufficient |
| (P_i) | Final payable HEAVEN reward | Cannot exceed the participant calculation or funded pool |

The sum in the pool adjustment includes every eligible calculated allocation finalized for the same epoch and settlement set.

## Approved participation-score framework

| Verified status | Score | Effect |
|---|---:|---|
| Inactive, non-compliant, or ineligible | 0.00 | No reward allocation |
| Verified partial completion | 0.50 | Half of the otherwise calculated allocation |
| Verified full completion | 1.00 | Full calculated allocation, subject to the pool cap |

The final participation specification must define objective, documented and auditable duties. Permitted categories may include governance participation, community contribution, education, verification, ecosystem support, or other genuine services approved prospectively for the epoch.

No administrator may assign scores arbitrarily. Evidence requirements, reviewers, conflicts of interest, appeals, privacy controls, finality, and on-chain commitments remain subject to separate approval under OD-20 and OD-21.

## Mandatory funding and solvency controls

- Each reward epoch must use an isolated, identifiable HEAVEN pool.
- The approved budget must be deposited before the epoch is activated.
- No reward accounting may create a claim beyond available HEAVEN.
- If total calculated allocations exceed the pool, the same pool adjustment factor applies proportionally to every eligible allocation in the settlement set.
- If the funded pool is zero, every final payable reward is zero.
- Unused funds remain governed by the approved treasury and unclaimed-reward policy.
- MIND principal, MIND governance balance, and HEAVEN reward accounting remain separate.
- No automatic compounding, future mint assumption, treasury guarantee, or off-chain debt is created.

## Ceiling application

For every duration:

```text
0 ≤ R_e,d ≤ applicable maximum total reward ceiling
```

The approved maximum total reward ceilings remain:

| Duration | Maximum total reward ceiling |
|---|---:|
| 6 months | Up to 38% |
| 12 months | Up to 78% |
| 24 months | Up to 122% |

These are maximum total ceilings, not APY, fixed income, promised returns, target rates, or default epoch rates. Governance may approve a lower actual rate or zero, subject to legal approval and available funding.

Base rewards, weekly claim fees, and any maturity loyalty bonus remain subject to MHE-004 and MHE-005 and must not cause the applicable ceiling to be exceeded.

## Reward and allocation separation

The HEAVEN allocation factor (F_e):

- converts an eligible MIND-based calculation unit into a HEAVEN accounting quantity solely for that epoch;
- has no guaranteed relationship to USD, MIND market value, HEAVEN market value, or any secondary-market price;
- creates no purchase, exchange, redemption, or treasury obligation;
- remains fixed for a finalized active epoch; and
- requires a new prospective governance approval for a future epoch.

No public material may describe (F_e) as a token price or exchange rate.

## Required epoch publication

Before activation, each proposed reward epoch must publish:

1. the exact duration and eligibility window;
2. the actual rate (R_{e,d});
3. the HEAVEN allocation factor (F_e);
4. the pre-funded pool (B_e) and verifiable vault address;
5. the eligible MIND quantity rules;
6. the service duties, evidence rubric, and score rules;
7. the reviewer, conflict, appeal, privacy, and finality process;
8. the settlement-set definition and calculation timestamp;
9. the rounding, dust, claim, fee, bonus, and expiry rules;
10. treasury reconciliation and unused-fund treatment;
11. jurisdictional eligibility and exclusions; and
12. the applicable legal, security, and governance activation approvals.

No parameter may be changed retroactively after epoch activation except through a previously disclosed emergency control that protects users and does not create additional rewards.

## Communications standard

Approved wording:

> Founder Node HEAVEN allocations are variable participation rewards, not passive investment returns. Each epoch requires documented eligibility, a governance-approved actual rate, a calculation-only HEAVEN allocation factor and a pre-funded reward pool. Final payments are proportionally reduced where calculated allocations exceed available funding and may be zero.

Public materials must not describe Founder Node participation as passive income, guaranteed profit, fixed yield, assured APY, or a reward earned merely by holding MIND.

## Legal and operational boundary

This formula does not establish compliance with securities, financial-promotion, consumer-protection, payments, custody, tax, AML, sanctions, privacy, or other laws. Labels do not override economic substance.

MHE-006 legal-readiness gates apply independently in every market. A legal reviewer may require modification, restriction, registration, exemption, exclusion, or cancellation before activation.

## Matters still open

This decision does not approve:

- an actual epoch reward rate;
- a HEAVEN allocation factor;
- participation duties or evidence rules;
- score reviewers, disputes, appeals, or privacy implementation;
- HEAVEN supply, emissions, pool source, or vault contract;
- settlement timing, rounding, claim expiry, or unused funds;
- accepted contribution assets;
- any jurisdiction, legal wrapper, offering, deployment, or launch.

## Effective scope

This decision partially resolves OD-09 by approving the service-based formula architecture, the 0 / 0.50 / 1 participation framework, and the mandatory pro-rata pre-funded pool cap. OD-09 remains open for actual epoch parameters and implementation. OD-07, OD-08, OD-20, and OD-21 remain open.
