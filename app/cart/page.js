"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import "./cart.css";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link href="/" className="continue-shopping-btn">
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <Link href={`/products/${item.id}`} className="cart-item-title">
                  {item.title}
                </Link>
                <p className="cart-item-price">${item.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="qty-btn"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="qty-btn"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
                aria-label="Remove item"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <Link href="/" className="back-to-shop">
            &larr; Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

