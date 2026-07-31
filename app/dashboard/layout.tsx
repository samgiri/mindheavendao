import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | MindHeavenDAO",
  description: "MindHeavenDAO test environment dashboard preview.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
