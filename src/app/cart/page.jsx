"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

import styles from "./page.module.css";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className={styles.cart}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <h3>{item.title}</h3>

              <p>₹{item.price}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
}