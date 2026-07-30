# MIND Off-Chain Reference Decision

**Document ID:** MHE-002  
**Version:** 1.0  
**Status:** Approved  
**Classification:** Economic and token policy decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related decision:** OD-02 — MIND reference-price methodology  
**Related record:** MHE-001 — Transferable MIND Decision

## Question decided

How should the business statement “1 MIND = $1” be represented in Founder Node planning and smart-contract rules?

## Decision

**1 MIND = $1 is approved only as an off-chain Founder Node allocation reference.**

The reference exists to express the intended number of MIND assigned to each Founder Node tier during planning. It is not a guaranteed market price, redemption value, stablecoin peg, treasury obligation, exchange rate, accounting promise, or investment representation.

## Approved implementation boundary

- Founder Node specifications publish exact MIND amounts directly.
- Smart contracts operate in MIND units and do not calculate a USD value.
- No USD oracle, price feed, TWAP, automated repricing, redemption mechanism, or peg-maintenance function is required for the launch design.
- The reference does not require MindHeavenDAO, the Foundation, SatoshiLab.ai, a treasury, or any other party to buy or sell MIND at $1.
- Transfers may occur at values independently determined by participants or external venues; the protocol makes no market-price representation.
- User interfaces and documents must label dollar figures as “planning reference” or equivalent and display the actual MIND amount as the executable quantity.
- Changes to Founder Node MIND amounts require a prospective, documented governance decision and cannot alter an existing locked position.

## Founder Node planning table

Subject to separate approval of OD-01, the current planning references map one-to-one:

| Founder Node tier | Off-chain planning reference | Proposed MIND amount |
|---|---:|---:|
| Seed | $5,000 | 5,000 MIND |
| Builder | $10,000 | 10,000 MIND |
| Visionary | $25,000 | 25,000 MIND |
| Pioneer | $50,000 | 50,000 MIND |
| Genesis | $100,000 | 100,000 MIND |

This table remains proposed until OD-01 is explicitly approved. The dollar column does not establish token value.

## Required language

Preferred:

> Founder Node planning uses an off-chain reference of 1 MIND per $1 of tier reference value. Smart contracts use fixed MIND amounts only. This is not a price guarantee, peg, redemption promise, or statement of market value.

Prohibited:

- “MIND is guaranteed to be worth $1.”
- “MIND is backed or redeemable at $1.”
- “The Foundation will maintain a $1 price.”
- “Founder Nodes guarantee a dollar-denominated return.”

## Risks and controls

The reference can be misunderstood as a price promise. Public materials require legal and financial-promotion review, consistent disclaimers, fixed MIND-unit display, and no language implying price support, liquidity, appreciation, or guaranteed return.

## Effective scope

This decision resolves OD-02 for new economic and technical drafts. It does not approve OD-01 tier amounts, payment assets, fundraising, a token sale, liquidity, staking returns, referrals, HEAVEN economics, or deployment.
