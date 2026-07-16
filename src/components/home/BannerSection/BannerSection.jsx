import styles from "./BannerSection.module.css";

export default function BannerSection() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>Shop Smart, Live Better</h1>

        <p>
          Discover premium products at amazing prices.
        </p>

        <button>Shop Now</button>
      </div>
    </section>
  );
}