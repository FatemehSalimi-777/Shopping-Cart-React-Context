import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Cart Project</Link>
        <Link to="/checkout">
          <div>
            {" "}
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Fatemeh From 🌎 </p>
      </footer>
    </>
  );
}

export default Layout;
