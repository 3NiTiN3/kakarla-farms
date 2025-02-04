import Hero from "@/components/Hero/Hero";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main>
      <Analytics/>
      <Hero />
      <ProductGrid />
    </main>
  );
}
