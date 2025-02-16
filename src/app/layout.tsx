import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
