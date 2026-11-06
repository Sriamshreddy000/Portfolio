"use client";

import Navbar from "@/components/Navbar";
import PixelMascot from "@/components/PixelMascot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <PixelMascot />
    </>
  );
}
