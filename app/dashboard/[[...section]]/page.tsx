import { notFound } from "next/navigation";
import { DashboardApp } from "../DashboardApp";

const sections = new Set([
  "wallet",
  "mind",
  "heaven",
  "nodes",
  "staking",
  "referrals",
  "governance",
  "treasury",
  "transactions",
  "profile",
  "settings",
]);

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ section?: string[] }>;
}) {
  const { section = [] } = await params;
  if (section.length > 1 || (section[0] && !sections.has(section[0]))) notFound();

  return <DashboardApp section={section[0] ?? "overview"} />;
}
