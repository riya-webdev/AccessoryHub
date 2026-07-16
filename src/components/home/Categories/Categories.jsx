import styles from "./Categories.module.css";
import { categories } from "@/data/categories";
export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Shop By Category</h2>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.card}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}