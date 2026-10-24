
import Link from "next/link";
import "./ProductDetails.css";
import AddToCartButton from "../../components/AddToCartButton";
async function getProduct(id) {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <main className="product-details">
      <Link href="/" className="back-link">
        &larr; Back to Store
      </Link>

      <div className="details-container">
        <div className="details-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="details-info">
          <p className="details-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="details-rating">
            Rating: {product.rating} / 5
          </p>

          <p className="details-price">
            ${product.price}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <p>
            Brand: {product.brand || "Not specified"}
          </p>

          <p>
            Stock: {product.stock}
          </p>
          <AddToCartButton product={product} />

         
        </div>
      </div>
    </main>
  );
}
