import styles from "src/components/Feature.module.css";
import { Titles } from "src/components/Titles/Titles.jsx";

const SALES = [
  {
    img: (
      <img
        src="/img/feature1.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    title: "技術",
    text1: "伸びても気にならないグラデーション",
    text2: "カラー、骨格にあわせたカット&パーマなど",
    text3: "時間が経っても綺麗に素敵でいられる",
    text4: "再現性の高い技術にこだわっています",
  },

  {
    img: (
      <img
        src="/img/feature2.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    title: "空間",
    text1: "席と席の間隔を広くとり、周りを気にせず",
    text2: "プライベートな空間でリラックスできます。",
    text3: "シャンプースペースも思わず眠ってしまう",
    text4: "空間で癒しのひと時をお過ごしください",
  },

  {
    img: (
      <img
        src="/img/feature3.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    title: "洗髪",
    text1: "まるでベッドのようなシャンプー台",
    text2: "ヘッドクッションにより首の負担がありません",
    text3: "眠気を誘うちょうどいい明るさの空間で",
    text4: "まさに「夢心地」の時間を過ごしていただけます",
  },

  {
    img: (
      <img
        src="/img/feature4.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    title: "補修",
    text1: "お客様に合わせたオーダーメイドトリートメント",
    text2: "高濃度高濃度オーガニック美容液による",
    text3: "ヘッドスパで髪だけでなく日々のストレスや心身の",
    text4: "トラブルを空間で癒しのひと時をお過ごしください",
  },
];

const Feature = (props) => {
  return (
    <div className={styles.feature}>
      <Titles />
      {SALES.map((sale) => {
        return (
          <div className={styles.feature_main_body}>
            <div className={styles.feature_image}>{sale.img}</div>
            <div className={styles.feature_body}>
              <span className={styles.feature_title}>{sale.title}</span>
              <p className={styles.feature_text}>{sale.text1}</p>
              <p className={styles.feature_text}>{sale.text2}</p>
              <p className={styles.feature_text}>{sale.text3}</p>
              <p className={styles.feature_text}>{sale.text4}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Feature };
