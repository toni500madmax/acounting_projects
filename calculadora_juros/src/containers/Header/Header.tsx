import NavBar from "./../../components/navbar/index";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Finaje</h1>
          <p>Elementos de finanças</p>
        </div>
        <div className={styles.container}>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
