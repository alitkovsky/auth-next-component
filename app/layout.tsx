import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Reusabel authentication component.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
