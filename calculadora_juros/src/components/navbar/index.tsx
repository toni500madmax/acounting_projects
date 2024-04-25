import styles from "./Style.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className={styles.container}>
      <li className={styles.list_item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.list_item}>
        <Link to="/calculadoraSimples">Juros Simples</Link>
      </li>
      <li className={styles.list_item}>
        <Link to="/calculadoraComposto">Juros Compostos</Link>
      </li>
    </ul>
  );
}
