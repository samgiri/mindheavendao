import type { Metadata } from "next";
import { WalletProviders } from "./WalletProviders";

export const metadata: Metadata = {
  title: "Dashboard | MindHeavenDAO",
  description: "MindHeavenDAO test environment dashboard preview.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <WalletProviders>{children}</WalletProviders>;
}
