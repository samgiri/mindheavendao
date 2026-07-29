import type { Metadata } from "next";
import { SystemApp } from "./SystemApp";

export const metadata: Metadata = {
  title: "Founder System | MindHeavenDAO",
  description: "Phase 1 prototype for MindHeavenDAO member identity, governance, contributions, and transparent reporting.",
};

export default function SystemPage() {
  return <SystemApp />;
}
