import type { Metadata } from "next";
import CartProviderWrapper from "@/components/CartProviderWrapper";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Kakarla Farma",
  description: "Fresh mangoes from Kakarla Farma, delivered to your doorstep!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProviderWrapper>
          <Navbar />
          {children}
          <Footer /> 
        </CartProviderWrapper>
      </body>
    </html>
  );
}
