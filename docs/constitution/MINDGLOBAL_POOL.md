# MindGlobal Pool Policy

MindGlobal Pool recognizes genuine contribution by qualified active founders. It is not a second referral level.

## Baseline

- Initial parameter: `mindGlobalPoolBps = 100` (1%).
- Ordinary governance range: 0–500 BPS.
- Changes affect future periods only.
- Periods are expected to be monthly.
- Finalized periods and point weights are immutable.
- Total allocations and claims cannot exceed HEAVEN funded for that period.

For period `p`, a participant's allocation is conceptually:

`periodFundedAmount × participantPoints / totalEligiblePoints`

Rounding policy and dust handling remain open. Zero-point periods must finalize safely without division by zero.

Contribution categories may include active nodes, governance, community support, qualified referrals, training, education, wellness initiatives, events, hubs, country expansion, and approved work. Evidence should remain off-chain; only commitments, totals, and allocations needed for auditability should be public. Point assignment, verification, appeals, claim deadlines, and unclaimed HEAVEN handling remain open.

