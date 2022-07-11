import { useEffect } from "react";

import styles from "../../../styles/markup.module.css";

const Markup = () => {
  // JSXの場合にはscript要素を使うのではなく副作用はuseEffectで記述
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `this is useEffect`;
  }, []);

  return (
    <main className={styles.markup}>
      <section>
        <dl>
          <dt>Japan</dt>
          <dd>Tokyo</dd>
          <dd>Chiba</dd>
          <dd>Kanagawa</dd>
          <dd>Saitama</dd>
        </dl>
        <figure>
          <img
            src="/img/shared/my_icon.jpeg"
            alt="my_icon"
            height="300"
            width="300"
          />
          <figcaption>SNSで使っているアイコン</figcaption>
        </figure>
      </section>
      <a href="#">
        <p>
          a要素はトランスペアレントなので親が内包できるコンテンツを内包できる
        </p>
      </a>
      <hr />
      <p>&copy; &lt;Playground Markup Sample&gt;</p>
    </main>
  );
};

export default Markup;
