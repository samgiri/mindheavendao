# Founder Node Variable Reward Ceiling Decision

**Document ID:** MHE-004  
**Version:** 1.0  
**Status:** Approved  
**Classification:** Economic and Founder Node reward policy decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related decision:** OD-09 — Founder Node HEAVEN reward formula  
**Related records:** MHE-001, MHE-002, MHE-003

## Question decided

Should the proposed 38%, 78%, and 122% figures become fixed APY commitments or remain variable maximum planning ceilings?

## Decision

The approved public and technical policy is:

> **Maximum Total Reward Reference: up to 38% for 6 months, up to 78% for 12 months, and up to 122% for 24 months, subject to DAO performance, governance-approved budgets, and sufficient pre-funded HEAVEN availability. Actual rewards may be lower or zero.**

These percentages are maximum total lock-period reward references. They are not APY, fixed income, guaranteed yield, accrued debt, or a promise that any participant will receive the maximum.

## Approved ceilings

| Business lock term | Maximum total reward reference | Status |
|---|---:|---|
| 6 months | Up to 38% | Variable ceiling |
| 12 months | Up to 78% | Variable ceiling |
| 24 months | Up to 122% | Variable ceiling |

The exact on-chain duration in seconds/days remains a technical parameter to approve before deployment.

## Contract requirements

- Governance may set a reward rate for a future funded epoch only at or below the ceiling for that lock term.
- An active epoch snapshots its rate, funding, policy version, start, and end; changes apply only prospectively.
- No reward liability exists until sufficient HEAVEN is deposited into the isolated reward vault and reserved.
- The contract must reject or proportionally bound new obligations that would exceed available epoch funding under the final approved formula.
- Rewards are paid only in HEAVEN; MIND principal and MIND supply remain separate.
- No automatic compounding, MIND-denominated reward, retroactive rate increase, emergency mint, or administrator override above a ceiling.
- The interface must display the active funded rate, ceiling, remaining budget, and a warning that actual rewards may be lower or zero.
- Principal withdrawal and emergency-exit rules cannot create entitlement to unearned rewards.

## Required terminology

Use:

- “maximum total reward reference”;
- “up to”;
- “variable and performance-dependent”;
- “subject to governance-approved, pre-funded HEAVEN availability”; and
- “actual rewards may be lower or zero.”

Do not use:

- “APY” for these lock-period percentages;
- “guaranteed,” “assured,” “fixed income,” or “risk-free”;
- “automatic passive income”; or
- any statement that the DAO owes the maximum regardless of funding or performance.

## Calculation boundary

Planning illustrations may multiply the committed MIND amount by the approved ceiling to show a maximum reference. They must not present that result as owed HEAVEN. Exact HEAVEN quantities require a separately approved conversion/allocation methodology and funded epoch.

## Matters still open

This decision does not approve:

- the performance formula or governance process that selects an epoch rate;
- how a MIND-based reference converts to a HEAVEN quantity;
- weekly versus monthly accrual or claim cadence;
- exact on-chain duration constants;
- early withdrawal, penalties, emergency exit, forfeiture, or claim deadlines;
- HEAVEN maximum supply, emissions, funding source, or treasury budget;
- legal approval, marketing approval, or deployment.

## Effective scope

This decision partially resolves OD-09 by approving lock-term ceilings and mandatory non-guarantee language. OD-09 remains open for the exact funded formula and HEAVEN calculation.
