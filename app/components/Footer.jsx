import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <Link className="site-footer__brand" href="/">
          My Store
        </Link>
        <p className="site-footer__tagline">
          Thoughtfully chosen essentials for everyday living.
        </p>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} My Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
