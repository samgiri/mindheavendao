# Reward Accounting Outline

## Direct referral

1. Participant registers one immutable direct referrer.
2. Approved process verifies a unique qualification and active-node eligibility.
3. Contract reads qualified count before increment: counts 0–8 produce 7%, 9–18 produce 8%, and 19+ produce 10% for the new qualification.
4. Reward equals approved eligible base multiplied by rate, using safe fixed-point rounding.
5. Vault atomically reserves sufficient HEAVEN; otherwise the qualification does not finalize.
6. Count increments and claim entitlement is emitted.

## MindGlobal Pool

1. Governance parameters are snapshotted when a period opens.
2. The approved 1% (or future BPS) allocation is funded in HEAVEN.
3. Verifiers calculate contribution points under snapshotted weights.
4. A review/appeal window closes before a commitment is finalized.
5. For nonzero total points, each claim is `funded × userPoints / totalPoints`.
6. Claims use proofs and a bitmap/mapping; aggregate claims cannot exceed funding.

## Required reconciliation

Expose credited funding, available balance, reserved liability, paid amount, period allocation, claimed amount, and token balance. Define rounding dust, refunds/cancellations, claim expiry, and unclaimed handling before implementation.

