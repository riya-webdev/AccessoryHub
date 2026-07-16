import Link from "next/link";
import styles from "./ProductCard.module.css";
export default function ProductCard({product}){

    return(
          <Link href={`/products/${product.id}`}>
        <div className={styles.card}>
<div className={styles.imageContainer}>
  <img
    src={product.thumbnail}
    alt={product.title}
    className={styles.image}
  />
</div>
        <div className={styles.content}>
<h3>{product.title}</h3>

<p className={styles.price}>
             ₹{product.price} 
</p>
 <button className={styles.button}>
          Add To Cart
        </button>
        </div>
</div></Link>
    );
}