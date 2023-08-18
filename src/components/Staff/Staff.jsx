import styles from "src/components/Staff/Staff.module.css";
import { Titles } from "src/components/Titles/Titles.jsx";

const STYLISTS = [
  {
    img: (
      <img
        src="/img/stylist1.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    name: "堀北結菜",
    text1: "一緒に楽しくスタイルを決めていきましょう",
    text2: "お客様にあったスタイルをご提案します。",
    text3: "お客様の人生に少しでも関わることができ",
    text4: "たら幸いでございます。",
  },

  {
    img: (
      <img
        src="/img/stylist2.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    name: "クリッシーコスタンザ",
    text1: "席と席の間隔を広くとり、周りを気にせず",
    text2: "プライベートな空間でリラックスできます。",
    text3: "シャンプースペースも思わず眠ってしまう",
    text4: "空間で癒しのひと時をお過ごしください",
  },

  {
    img: (
      <img
        src="/img/stylist3.jpg"
        alt="コンセプト"
        width="320px"
        height="480px"
      ></img>
    ),
    name: "アヴィリルラヴィーン",
    text1: "お客様に合わせたオーダーメイドトリートメント",
    text2: "高濃度高濃度オーガニック美容液による",
    text3: "ヘッドスパで髪だけでなく日々のストレスや心身の",
    text4: "トラブルを空間で癒しのひと時をお過ごしください",
  },
];

const Staff = (props) => {
  return (
    <div className={styles.staff}>
      <Titles />
      <div className={styles.stylist_main}></div>
      {STYLISTS.map((stylist) => {
        return (
          <div className={styles.stylist_main_body}>
            <div className={styles.stylist_image}>{stylist.img}</div>
            <div className={styles.stylist_body}>
              <span className={styles.stylist_name}>{stylist.name}</span>
              <p className={styles.stylist_text}>{stylist.text1}</p>
              <p className={styles.stylist_text}>{stylist.text2}</p>
              <p className={styles.stylist_text}>{stylist.text3}</p>
              <p className={styles.stylist_text}>{stylist.text4}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Staff };
