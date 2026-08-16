export type View =
  | "dashboard"
  | "identity"
  | "nodes"
  | "governance"
  | "contributions"
  | "rewards"
  | "treasury"
  | "documents";

export type Proposal = {
  id: string;
  title: string;
  className: "Ordinary" | "Major" | "Constitutional";
  stage: "Discussion" | "Review" | "Passed";
  support: number;
  turnout: string;
  closes: string;
  summary: string;
};

export const NAVIGATION: { id: View; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "⌂" },
  { id: "identity", label: "Identity", icon: "◎" },
  { id: "nodes", label: "Founder Nodes", icon: "◇" },
  { id: "governance", label: "Governance", icon: "◫" },
  { id: "contributions", label: "Contributions", icon: "✦" },
  { id: "rewards", label: "Rewards", icon: "◌" },
  { id: "treasury", label: "Treasury", icon: "▤" },
  { id: "documents", label: "Documents", icon: "≡" },
];

export const VIEW_PATHS: Record<View, string> = {
  dashboard: "",
  identity: "identity",
  nodes: "founder-nodes",
  governance: "governance",
  contributions: "contributions",
  rewards: "rewards",
  treasury: "treasury",
  documents: "documents",
};

export const PROPOSALS: Proposal[] = [
  {
    id: "MHP-001",
    title: "Founding Community Code of Conduct",
    className: "Ordinary",
    stage: "Review",
    support: 74,
    turnout: "12 / 16",
    closes: "4 days",
    summary: "Create a shared conduct standard for civil participation, conflicts, disclosures, and community safety.",
  },
  {
    id: "MHP-002",
    title: "Phase 1 Wellness Research Circle",
    className: "Major",
    stage: "Discussion",
    support: 58,
    turnout: "Forum",
    closes: "8 days",
    summary: "Define a bounded research circle for evidence review without presenting wellness education as clinical care.",
  },
  {
    id: "MHP-003",
    title: "Public Documentation Standard",
    className: "Ordinary",
    stage: "Passed",
    support: 91,
    turnout: "15 / 16",
    closes: "Complete",
    summary: "Adopt versioned, status-controlled records and preserve GitHub as the official source of record.",
  },
];

export const CONTRIBUTIONS = [
  { title: "Foundation Charter review", area: "Governance", points: 120, date: "Jul 29", state: "Verified" },
  { title: "Governance Constitution audit", area: "Research", points: 85, date: "Jul 30", state: "Verified" },
  { title: "Founder system feedback", area: "Product", points: 45, date: "Jul 30", state: "Review" },
];

export const NODE_TIERS = [
  { name: "Seed", reference: "$5K", purpose: "Early mission participation", state: "Specification open" },
  { name: "Builder", reference: "$10K", purpose: "Community and ecosystem building", state: "Specification open" },
  { name: "Visionary", reference: "$25K", purpose: "Strategic ecosystem contribution", state: "Specification open" },
  { name: "Pioneer", reference: "$50K", purpose: "Regional and program leadership", state: "Specification open" },
  { name: "Genesis", reference: "$100K", purpose: "Foundational ecosystem stewardship", state: "Specification open" },
];

export const DOCUMENTS = [
  { id: "MHF-000", name: "Foundation Charter", status: "Draft", group: "Foundation" },
  { id: "MHF-001", name: "Founding Manifesto", status: "Draft", group: "Foundation" },
  { id: "MHF-002", name: "Documentation Standards", status: "Draft", group: "Foundation" },
  { id: "MHC-000", name: "Governance Constitution", status: "Draft", group: "Governance" },
  { id: "MHR-001", name: "Constitution Internal Audit", status: "Completed", group: "Review" },
];

export const READINESS = [
  { label: "Product interface", state: "Ready", tone: "ready" },
  { label: "Wallet identity", state: "Preview", tone: "progress" },
  { label: "Governance contracts", state: "Not deployed", tone: "blocked" },
  { label: "Founder Node contracts", state: "Not deployed", tone: "blocked" },
  { label: "HEAVEN reward vault", state: "Specification open", tone: "blocked" },
  { label: "Legal launch review", state: "Required", tone: "blocked" },
] as const;
