import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.pageTitle}>About Accessory Hub</h1>

        <p className={styles.pageContent}>
          Welcome to <strong>Accessory Hub</strong>, your one-stop destination
          for stylish and premium-quality fashion accessories. We offer
          fashionable watches, bags, jewellery, sunglasses, and more to help
          you complete your perfect look.
        </p>

        <div className={styles.aboutSection}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality accessories at affordable
            prices while delivering an excellent shopping experience to every
            customer.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h2>Why Choose Accessory Hub?</h2>

          <ul>
            <li>✔ Premium Quality Products</li>
            <li>✔ Affordable Prices</li>
            <li>✔ Secure Online Shopping</li>
            <li>✔ Fast Delivery</li>
            <li>✔ Friendly Customer Support</li>
          </ul>
        </div>
      </div>
    </main>
  );
}