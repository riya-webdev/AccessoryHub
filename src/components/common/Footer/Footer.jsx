import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
          <div className={styles.brand}>
              <h3>AccessoryHub</h3>
              <p>
              Premium Accessories For Everyday Style and Fashion 
              </p>
          </div>
        <div className={styles.Link}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
       <div className={styles.bottom}>
        <p>© 2026 AccessoryHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}