import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header/Header";
import { Main } from "src/components/Main/Main";
// import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      {/* <Main page="index" />
      <Footer /> */}
    </div>
  );
}
