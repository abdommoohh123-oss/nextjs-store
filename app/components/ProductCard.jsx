
import Link from "next/link";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>

      <h2>{product.title}</h2>

      <p className="price">${product.price}</p>

      <p className="rating">
        Rating: {product.rating} / 5
      </p>

      <Link
        href={`/products/${product.id}`}
        className="details-btn"
      >
        View Details
      </Link>
    </div>
  );
}
