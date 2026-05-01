import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";
import { GlowBubbles } from "@/components/GlowBubbles";
import "./globals.css";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mayank-chandak.vercel.app"),
  title: {
    default: "Mayank Chandak - Robotics, RL, and Computer Vision",
    template: "%s - Mayank Chandak",
  },
  description:
    "Portfolio for Mayank Chandak, focused on robotics, reinforcement learning, computer vision, computational imaging, and intelligent systems.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <GlowBubbles />
        <div className="page-shell">
          <Nav />
          <main className="page-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="footer">
            <div className="container footer-inner">
              <div>
                <div className="footer-brand">Mayank Chandak</div>
                <div>(c) 2026 Mayank Chandak. Crafted with precision.</div>
              </div>
              <nav className="footer-links" aria-label="Footer links">
                <a href="/projects">Projects</a>
                <a href="/skills">Skills</a>
                <a href="/journey">Journey</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
