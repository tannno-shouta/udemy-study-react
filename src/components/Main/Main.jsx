import styles from "src/components/Main/Main.module.css";
import { FirstView } from "src/components/FirstView/FirstView";
import { Concept } from "src/components/Concept/Concept";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <FirstView />
      <Concept />
    </main>
  );
};

export { Main };
