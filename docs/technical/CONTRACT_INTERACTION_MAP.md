# Contract Interaction Map

```mermaid
flowchart LR
  User[Founder] -->|stake MIND| Staking[FounderNodeStaking]
  Staking -. status .-> Referral[DirectReferralRegistry]
  Staking -. status .-> Pool[MindGlobalPool]
  Qualifier[Approved qualification process] --> Referral
  Allocator[Off-chain contribution verification] -->|points commitment| Pool
  Referral -->|reserve HEAVEN| Vault[HeavenRewardVault]
  Pool -->|reserve HEAVEN| Vault
  Vault -->|claim| User
  MIND[MindToken] -->|voting power| Governor
  Governor --> Timelock[TimelockController]
  Timelock --> Staking
  Timelock --> Referral
  Timelock --> Pool
  Timelock --> Treasury
  Treasury -->|pre-fund| Vault
```

Dashed status reads do not confer mutation authority. Reward accounting modules authorize reservations; the vault controls custody and settlement. Proposed names are not final.

