import styles  from "../../styles/sitemap.module.sass";

const Sitemap = () => {
  return (
    <div className={styles.sitemap}>
      <h1>ページリンク集</h1>
      <ul>
        <li>
          マークアップの練習：
          <a href="/playground/markup">/playground/markup</a>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
