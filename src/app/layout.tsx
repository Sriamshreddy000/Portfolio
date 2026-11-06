import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Sriamsh Reddy Enugu — Portfolio",
  description: "Software Engineer — Next.js portfolio",
};

// Runs before the page paints so a saved light-mode choice never flashes dark first
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased noise" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
