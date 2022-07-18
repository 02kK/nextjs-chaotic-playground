import Link from "next/link";

import LinkButton from "../component/LinkButton";
import styles from "../../styles/sitemap.module.sass";

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
      <LinkButton href="/" buttonText="Transition to Top Page" />
    </div>
  );
};

export default Sitemap;
