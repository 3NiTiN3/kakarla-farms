import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Punasa", price: 149, image: "/mangos/punasa.jpg" },
  { id: 2, name: "Banganapalli", price: 129, image: "/mangos/Banganpalli.jpg" },
  { id: 3, name: "Imam Pasand", price: 139, image: "/mangos/imam.jpg" },
  { id: 4, name: "Totapuri", price: 119, image: "/mangos/totapuri.jpg" },
];

export default function ProductGrid() {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold py-4">Our Mango Collection</h2>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
