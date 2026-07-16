import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BackgroundVideo } from "@/components/background-video";
import { ProjectJumpSidebar } from "@/components/project-jump-sidebar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteTitle = "AI Research Laboratory Portfolio";
const siteDescription =
  "A modern AI research portfolio for foundation models, autonomous AI agents, knowledge intelligence, machine learning, and AI for science.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://ai-research-laboratory.vercel.app"),
  icons: {
    icon: [
      {
        url: "/assets/web_page/logo.png",
        type: "image/png",
      },
    ],
    shortcut: ["/assets/web_page/logo.png"],
    apple: [
      {
        url: "/assets/web_page/logo.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-video-backdrop" aria-hidden="true">
          <BackgroundVideo />
          <div className="site-video-scrim" />
        </div>
        <SiteHeader />
        <div className="site-page-shell">
          <main>{children}</main>
          <SiteFooter />
        </div>
        <ProjectJumpSidebar />
      </body>
    </html>
  );
}
