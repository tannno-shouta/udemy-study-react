import styles from "src/components/Menu/Menu.module.css";

const MENUS = [
  {
    label: "Cut Menu",
    name1: "カット",
    price1: "¥4200",
    name2: "フロントカット",
    price2: "¥1200",
    name3: "サイドカット",
    price3: "¥1200",
    name4: "デザインカット",
    price4: "¥5200",
  },

  {
    label: "Treatment Menu",
    name1: "クイック",
    price1: "¥3700",
    name2: "ベーシック",
    price2: "¥4700",
    name3: "アドバンス",
    price3: "¥6200",
    name4: "プレミアム",
    price4: "¥8200",
  },

  {
    label: "Color Menu",
    name1: "カラー",
    price1: "¥6200",
    name2: "イルミナカラー",
    price2: "¥8200",
    name3: "ハイライト,ブリーチ",
    price3: "¥10200",
    name4: "リタッチ",
    price4: "¥4700",
  },

  {
    label: "Parm Menu",
    name1: "パーマ",
    price1: "¥6200",
    name2: "ストレートパーマ",
    price2: "¥14400",
    name3: "縮毛",
    price3: "¥25200",
    name4: "デジタルパーマ",
    price4: "¥14700",
  },

  {
    label: "Other Menu",
    name1: "シャンプーブロー",
    price1: "¥2000",
    name2: "アイブロー",
    price2: "¥1500",
    name3: "セット",
    price3: "¥5200",
    name4: "和装セット",
    price4: "¥7700",
  },

  {
    label: "Spa Menu",
    name1: "アロマスパ",
    price1: "¥3700",
    name2: "エイジングアロマスパ",
    price2: "¥6200",
    name3: "メディカルスパ",
    price3: "¥4700",
    name4: "プレミアムスパ",
    price4: "¥7700",
  },
];

const Menu = (props) => {
  return (
    <div className={styles.menus}>
      <div className={styles.menus_body}>
        <span className={styles.menus_title}>Menu</span>
      </div>
      <div className={styles.menu_main}>
        {MENUS.map((menu) => {
          return (
            <div className={styles.menus_block}>
              <div className={styles.menu_block}>
                <div className={styles.menu_label_block}>
                  <span className={styles.menu_label}>{menu.label}</span>
                </div>
                <dl className={styles.menu_list}>
                  <dt className={styles.menu_list_name}>{menu.name1}</dt>
                  <dd className={styles.menu_list_price}>{menu.price1}</dd>
                  <dt className={styles.menu_list_name}>{menu.name2}</dt>
                  <dd className={styles.menu_list_price}>{menu.price2}</dd>
                  <dt className={styles.menu_list_name}>{menu.name3}</dt>
                  <dd className={styles.menu_list_price}>{menu.price3}</dd>
                  <dt className={styles.menu_list_name}>{menu.name4}</dt>
                  <dd className={styles.menu_list_price}>{menu.price4}</dd>
                </dl>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Menu };
