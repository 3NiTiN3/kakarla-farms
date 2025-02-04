"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext"; // ✅ Import useCart
import styles from "./ProductGrid.module.css";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart(); // ✅ Get addToCart from useCart

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    }
  };

  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} width={250} height={200}   className={styles.cardImage}/>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <p className={styles.cardPrice}>₹{product.price} / Kg</p>

        {/* Quantity Selector */}
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton} onClick={decreaseQuantity}>-</button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button className={styles.quantityButton} onClick={increaseQuantity}>+</button>
        </div>

        {/* Add to Cart Button */}
        <button className={styles.addtocartButton} disabled={quantity === 0} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
