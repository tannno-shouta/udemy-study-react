import styles from "src/components/Titles/Titles.module.css";

const Titles = (props) => {
  return (
    <div className={styles.titles}>
      <div className={styles.title_body}>
        <span className={styles.title}>Features</span>
      </div>
    </div>
  );
};

export { Titles };
