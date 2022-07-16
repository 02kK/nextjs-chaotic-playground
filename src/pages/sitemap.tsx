import styles from "../../styles/sitemap.module.sass";
import Link from "next/link";

const Sitemap = () => {
  return (
    <div className={styles.sitemap}>
      <h1>ページリンク集</h1>
      <ul>
        <li>
          マークアップの練習：
          <Link href="/playground/markup">
            <a>/playground/markup</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
