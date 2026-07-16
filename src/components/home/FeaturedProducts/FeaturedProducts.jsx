import styles from "./FeaturedProducts.module.css";
import ProductCard from "@/components/products/ProductCard/ProductCard";
import { getProducts } from "@/services/productService";

export default async function FeaturedProducts() {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 4);

  return (
    <section className={styles.featured}>
      <h2>Featured Products</h2>

      <div className={styles.grid}>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}