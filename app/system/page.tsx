import type { Metadata } from "next";
import { SystemApp } from "./SystemApp";

export const metadata: Metadata = {
  title: "Founder dApp | MindHeavenDAO",
  description: "MindHeavenDAO Phase 2 founder dApp interface for identity, Founder Nodes, governance, contribution, rewards, treasury transparency, and official records.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SystemPage() {
  return <SystemApp />;
}
