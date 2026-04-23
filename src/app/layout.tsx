import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarBackground } from "@/components/layout/StarBackground";

export const metadata: Metadata = {
  title: "Chiêm Tinh Học - Khám Phá Vũ Trụ",
  description: "Khám phá bản đồ sao của bạn, tính hợp tuổi, pha mặt trăng và những dự báo hành tinh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-cosmic-bg text-cosmic-text">
        <StarBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
