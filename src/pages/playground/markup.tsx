import { useEffect } from "react";
import { ReactDOM } from "react";

import styles from "../../../styles/markup.module.css";

// Property does not exist on type 'JSX.IntrinsicElements'のコンパイルエラーとなった際の妥協策
declare global {
  namespace JSX {
    interface IntrinsicElements {
      rb: any;
    }
  }
}

const Markup = () => {
  // JSXの場合にはscript要素を使うのではなく副作用はuseEffectで記述
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `this is useEffect!but...?`;
    setTimeout(() => {
      document.title = "Create Next App";
    }, 5000);
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
      <p>
        {/* ルビのつけかた */}
        <ruby>
          <rb>局地</rb>
          <rt>きょくち</rt>
          <rb>気象</rb>
          <rt>きしょう</rt>
          <rb>予報</rb>
          <rt>よほう</rt>
        </ruby>
      </p>

      <p>&copy; &lt;Playground Markup Sample&gt;</p>
    </main>
  );
};

export default Markup;
