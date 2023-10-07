import "./globals.css";
import { Inter } from "next/font/google";
import SeoSettings from "@/components/Tsumugi/SeoSettings/SeoSettings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "【公式】G.I.Ps | 国産の安心・安全なサプリメント",
  description: "【公式】G.I.Ps | 国産の安心・安全なサプリメント",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SeoSettings
        pageTitle={metadata.title}
        pageDescription={metadata.description}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
