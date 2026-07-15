import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind Heaven Dao — Find the Heaven Within",
  description: "Ancient wisdom for the modern spirit. A path of stillness, clarity, and return.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
