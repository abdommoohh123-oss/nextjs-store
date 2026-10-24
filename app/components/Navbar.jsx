
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          My<span>Store</span>
        </Link>

        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/#products">Products</Link>
          <Link href="/cart">Cart</Link>
        </nav>

        <Link href="/#products" className="navbar-btn">
          Shop Now
        </Link>
      </div>
    </header>
  );
}
