
import "./page.css";

import ProductCard from "./components/ProductCard";

async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=12"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
     

      <main className="home-page">
        <h1 className="home-title">
          Our Products
        </h1>

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </>
  );
}
