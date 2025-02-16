import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I.SATO Portforio Website",
  description: "フロントエンド好きなpiiiikminのポートフォリオサイト",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        { children }
      </body>
    </html>
  );
}
