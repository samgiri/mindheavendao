# Founder Node MIND Allocation Decision

**Document ID:** MHE-003  
**Version:** 1.0  
**Status:** Approved  
**Classification:** Economic and Founder Node policy decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related decision:** OD-01 — Exact MIND per Founder Node tier  
**Related record:** MHE-002 — MIND Off-Chain Reference Decision

## Question decided

Should Founder Node entry use the original five fixed MIND allocation levels or allow a continuously floating amount beginning below the original Seed level?

## Decision

**The original five fixed Founder Node allocation levels are approved.**

A Founder demonstrates the minimum token commitment by committing **5,000 MIND** to the Seed Founder Node. No Founder Node tier exists below 5,000 MIND.

| Founder Node tier | Required MIND commitment | Off-chain planning reference |
|---|---:|---:|
| Seed | 5,000 MIND | $5,000 reference |
| Builder | 10,000 MIND | $10,000 reference |
| Visionary | 25,000 MIND | $25,000 reference |
| Pioneer | 50,000 MIND | $50,000 reference |
| Genesis | 100,000 MIND | $100,000 reference |

The dollar column follows MHE-002 and is an off-chain planning reference only. It is not a guaranteed price, peg, redemption value, or market-value statement.

## Approved implementation boundary

- Smart contracts use exact MIND quantities, never dollar calculations.
- A valid Founder Node position must match one approved tier amount.
- Amounts below 5,000 MIND do not create Founder Node status.
- Committed MIND remains owned by the participant but is unavailable for transfer until the approved maturity or emergency-exit process.
- Each position snapshots its tier, committed amount, lock duration, and applicable prospective policy version when opened.
- Later governance changes cannot reduce principal or retroactively alter an existing position.
- Tier name alone creates no company equity, guaranteed HEAVEN reward, revenue share, redemption right, or promised return.
- Reward liabilities, if separately approved, must be denominated in HEAVEN and pre-funded.

## Rationale

The 5,000-MIND minimum preserves Founder Node meaning as a visible commitment to MindHeavenDAO’s mission. Five clear levels are easier to understand, audit, test, govern, and communicate than arbitrary floating positions. They also support predictable supply and participation modeling.

## Matters still open

This decision does not approve:

- 365-day versus 730-day terms or the proposed reward rates;
- early withdrawal, penalty, emergency exit, upgrade, or inheritance rules;
- whether one wallet or verified participant may hold multiple nodes;
- tier upgrades or combining existing positions;
- payment assets, acquisition process, refunds, or qualification finality;
- referral or MindGlobal reward calculations;
- deployment, fundraising, liquidity, or guaranteed returns.

## Effective scope

This decision resolves OD-01 for new economic and technical drafts. Contract implementation must not begin beyond a non-production prototype until the remaining lock, reward, withdrawal, legal, and security decisions are approved.
