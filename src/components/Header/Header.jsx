import styles from "src/components/Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_list}>
            <li className={styles.header_nav_item}>
              <a className={styles.header_nav_link}>Concept</a>
            </li>
            <li className={styles.header_nav_item}>
              <a className={styles.header_nav_link}>Features</a>
            </li>
            <li className={styles.header_nav_item}>
              <a className={styles.header_nav_link}>Menu</a>
            </li>
            <li className={styles.header_nav_item}>
              <a className={styles.header_nav_link}>Staff</a>
            </li>
            <li className={styles.header_nav_item}>
              <a className={styles.header_nav_link}>Access</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header_reserve}>
          <a className={styles.header_reserve_link} target="_blank">
            <span className={styles.header_reserve_en}>Reserve</span>
            <span className={styles.header_reserve_ja}>ご予約はこちら</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
