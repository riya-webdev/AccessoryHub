"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        AccessoryHub
      </div>

      <nav>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
            <li><Link href="/login">Login</Link></li>
          <li><Link href="/contact">Contact</Link></li>

          <li>
            <Link href="/cart">
              🛒 {cartItems.length}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}