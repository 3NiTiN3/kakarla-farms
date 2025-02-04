import type { Metadata } from "next";
import CartProviderWrapper from "@/components/CartProviderWrapper";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Kakarla Farms",
  description: "Fresh mangoes from Kakarla Farms, delivered to your doorstep!",
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
