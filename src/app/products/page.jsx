import styles from "./page.module.css";

import { getProducts } from "@/services/productService";
import ProductCard from "@/components/products/ProductCard/ProductCard";

export default async function ProductsPage()  {
  const products = await getProducts();
  
  return (
    <section className={styles.products}>
      <h1>All Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

