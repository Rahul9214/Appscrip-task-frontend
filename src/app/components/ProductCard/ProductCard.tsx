import { productType } from "@/type";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useAppDispatch } from "../../redux/Store";
import { likeDislikeProduct } from "../../redux/reducers/productsSlice";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }: { product: productType }) => {
  const dispatch = useAppDispatch();

  const handleLikeDislike = () => {
    dispatch(likeDislikeProduct(product));
  };

  return (
    <div className={styles.card}>
      <span className={styles.rating}>
        {product.ratings}
        <FaStar />
      </span>

      <div className={styles.imageContainer}>
        <div className={styles.imageCard}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <h1 className={styles.productName}>{product.name}</h1>
            <button
              className={`${styles.likeButton} ${
                product.isLiked ? styles.liked : styles.notLiked
              }`}
              onClick={handleLikeDislike}
            >
              {product.isLiked ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          </div>

          <p className={styles.pricingInfo}>
            <span style={{ borderBottom: "1px solid black" }}>Sign in</span> or
            Create an account to see pricing
          </p>
        </div>
      </div>
    </div>
  );
};
