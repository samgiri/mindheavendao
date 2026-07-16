import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mind-heaven-dao-sample.blockchain444.chatgpt.site"),
  title: "MindHeavenDAO | Human Intelligence, Evolved",
  description: "MindHeavenDAO is a decentralized ecosystem bringing together AI, neuroscience, wellness, human potential, and community ownership.",
  alternates: { canonical: "/" },
  icons: { icon: "/mindheaven-official-logo.png", shortcut: "/mindheaven-official-logo.png", apple: "/mindheaven-official-logo.png" },
  openGraph: {
    title: "MindHeavenDAO — Human Intelligence, Evolved",
    description: "AI, neuroscience, wellness, and community ownership—one ecosystem built to enhance human intelligence.",
    images: [{ url: "/mindheaven-official-logo.png", width: 1536, height: 1024, alt: "MindHeavenDAO — The Future of Human Intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "MindHeavenDAO — Human Intelligence, Evolved", images: ["/mindheaven-official-logo.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@type":"Organization", name:"MindHeavenDAO", url:"https://mind-heaven-dao-sample.blockchain444.chatgpt.site", description:"An evolving ecosystem bringing together AI, neuroscience, wellness, human potential, and community ownership." };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
