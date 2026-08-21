import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SystemApp } from "@/app/system/SystemApp";
import { VIEW_PATHS, type View } from "@/app/system/dapp-data";

export const metadata: Metadata = {
  title: "Founder Dashboard | MindHeavenDAO",
  description: "Read-only BNB Smart Chain Testnet founder workspace.",
  robots: { index: false, follow: false },
};

const viewsByPath = Object.fromEntries(
  Object.entries(VIEW_PATHS).map(([view, path]) => [path, view as View]),
);

export function generateStaticParams() {
  return Object.values(VIEW_PATHS).map(path => ({ view: path ? [path] : [] }));
}

export default async function DashboardPage({ params }: { params: Promise<{ view?: string[] }> }) {
  const { view: segments = [] } = await params;
  if (segments.length > 1) notFound();
  const view = viewsByPath[segments[0] ?? ""];
  if (!view) notFound();

  return <SystemApp key={view} initialView={view} routeBase="/dashboard" />;
}
