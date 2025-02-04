"use client";

import styles from "./Cart.module.css";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const increaseQuantity = (id: number) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
      addToCart({ ...item, quantity: 1 });
    }
  };

  const decreaseQuantity = (id: number) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else {
      removeFromCart(id);
    }
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Your cart is empty!</p>
          <Link href="/products">
            <button className={styles.shopNowButton}>Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                {/* Product Image and Name */}
                <div className={styles.cartItemDetails}>
                  <Image src={item.image} alt={item.name} width={80} height={80} className={styles.cartImage} />
                  <div>
                    <h2 className={styles.itemName}>{item.name}</h2>
                    <p className={styles.itemPrice}>₹{item.price} / Kg</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className={styles.quantityContainer}>
                  <button className={styles.quantityButton} onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button className={styles.quantityButton} onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                {/* Total Price */}
                <p className={styles.cartPrice}>₹{(item.price * item.quantity).toFixed(2)}</p>

                {/* Remove Button */}
                <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <h2 className={styles.totalAmount}>Total: ₹{totalAmount.toFixed(2)}</h2>
            <div className={styles.cartButtons}>
              <button className={styles.clearCart} onClick={clearCart}>Clear Cart</button>
              <button className={styles.checkout}>Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
