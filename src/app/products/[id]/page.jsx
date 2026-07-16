
import { use, useContext } from "react";
import { CartContext } from "@/context/CartContext";

import { getProducts } from "@/services/productService";
import styles from "./page.module.css";

export default async function ProductDetails({ params }) {
  const { id } = use(params);

  const { cartItems, setCartItems } =
    useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

if (!product) {
  return <h1>Product Not Found</h1>;
}

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };

  return (
  <section className={styles.product}>
    <div className={styles.imageBox}>
      Product Image
    </div>

    <div className={styles.info}>
      <h1>{product.title}</h1>

      <p className={styles.price}>
        ₹{product.price}
      </p>

      <p>{product.description}</p>

      <p>
        Category: {product.category}
      </p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  </section>
);
}