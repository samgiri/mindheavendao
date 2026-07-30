# Founder Node Reward Claim Options Decision

**Document ID:** MHE-005  
**Version:** 1.0  
**Status:** Approved  
**Classification:** Economic and Founder Node reward policy decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related decision:** OD-09 — Founder Node HEAVEN reward formula  
**Related record:** MHE-004 — Founder Node Variable Reward Ceiling Decision

## Approved policy wording

> **Participants may select weekly claims with a 2% protocol claim fee, monthly claims with no protocol claim fee, or maturity settlement with an eligible loyalty bonus of up to 5%. Network gas remains payable. All rewards, fees and bonuses are variable, paid in HEAVEN from pre-funded budgets, and remain within the applicable maximum total reward ceiling.**

## Approved claim options

| Claim option | Protocol claim fee | Loyalty bonus | Network gas |
|---|---:|---:|---|
| Weekly | 2% of HEAVEN claimed | None | Payable by claimant |
| Monthly | 0% | None | Payable by claimant |
| At maturity | 0% | Up to 5% of the eligible accrued reward | Payable by claimant |

“Zero protocol claim fee” does not mean zero blockchain cost. BSC network gas remains payable whenever an on-chain claim transaction is submitted.

## Contract requirements

- Fees, base rewards, and bonuses are denominated and settled only in HEAVEN.
- The 2% weekly protocol claim fee is deducted from the claimable HEAVEN amount and routed to the designated HEAVEN reward reserve or another governance-approved destination; it is not hidden.
- Monthly claims have no DAO protocol claim fee.
- A maturity bonus is variable, requires an approved and pre-funded budget, and may be lower than 5% or zero.
- Base reward plus maturity bonus must remain inside the applicable 38% / 78% / 122% maximum total reward ceiling.
- No claim, fee, or bonus may create an unfunded liability, mint MIND, compound automatically, or increase MIND principal.
- Claimed amounts, fees, bonuses, remaining entitlement, and funding must be publicly reconcilable on-chain.
- Active-epoch rules and existing earned amounts cannot be changed retroactively.
- Failed or insufficiently funded operations must not partially update claim accounting.

## Anti-gaming boundary

The final contract specification must prevent a participant from taking early claims and later receiving a maturity-only bonus for the same accrual. Claim-mode selection, switching, cooldown, forfeiture, and position-upgrade rules remain to be finalized and tested before deployment.

## Illustration boundary

Any example must clearly separate:

1. maximum reward ceiling;
2. actual governance-approved funded rate;
3. accrued HEAVEN;
4. protocol claim fee;
5. network gas; and
6. eligible maturity bonus.

Examples cannot portray the maximum ceiling or bonus as guaranteed.

## Matters still open

This decision does not approve:

- the performance formula that determines the actual funded rate;
- the MIND-reference-to-HEAVEN calculation;
- claim-mode switching or cooldown rules;
- exact weekly/monthly time constants;
- rounding and minimum-claim thresholds;
- early withdrawal, emergency exit, forfeiture, or claim expiry;
- HEAVEN supply, funding source, emissions, or treasury budgets;
- legal approval or deployment.

## Effective scope

This decision resolves the available claim cadences and their protocol-fee/bonus structure under OD-09. OD-09 remains open for the performance formula, HEAVEN calculation, funding model, timing constants, and anti-gaming implementation.
