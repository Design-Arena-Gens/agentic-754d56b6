import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aftab | SRE & DevOps Engineer",
  description:
    "Portfolio website for Aftab, a Site Reliability and DevOps engineer specialising in scalable cloud infrastructure, observability, and platform automation.",
  openGraph: {
    title: "Aftab | SRE & DevOps Engineer",
    description:
      "Discover Aftab's expertise in SRE and DevOps, including reliability engineering, Kubernetes, Terraform, and automation projects.",
    type: "website"
  },
  metadataBase: new URL("https://agentic-754d56b6.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: "Aftab | SRE & DevOps Engineer",
    description:
      "Discover Aftab's expertise in SRE and DevOps, including reliability engineering, Kubernetes, Terraform, and automation projects."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-midnight-950 text-white`}
      >
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-teal-400/10 blur-[140px]" />
        </div>
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
