import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import styles from "../../../styles/markup.module.sass";

// Property does not exist on type 'JSX.IntrinsicElements'のコンパイルエラーとなった際の妥協策
declare global {
  namespace JSX {
    interface IntrinsicElements {
      rb: any;
    }
  }
}

const dateToday = new Date();

const Markup = () => {
  // 再レンダリング検知
  // console.log("rerender");

  // JSXの場合にはscript要素を使うのではなく副作用はuseEffectで記述
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `this is useEffect!but...?`;
    setTimeout(() => {
      document.title = "Create Next App";
    }, 5000);
  }, []);

  // Warning: X did not match.Server: y Client: z が出るため一旦コメントアウト
  // const [dateNow, setDateNow] = useState(new Date());
  // const refreshNowDate = () => setDateNow(() => new Date());

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
          <Image
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
        {/* Chromeなどでの二重なルビの付け方 */}
        <ruby>
          <ruby>
            <rb>関</rb>
            <rt>せき</rt>
          </ruby>
          <rt>かん</rt>
        </ruby>
      </p>
      {/* Warning: X did not match.Server: y Client: z が出る */}
      {/* TODO: 下記記事参照して理解して必ず解決すること */}
      {/* https://qiita.com/aiji42/items/748bf3ef3c7ca65535db */}
      {/* <time>
        本日の日付は
        {`${dateToday.getFullYear()}/${dateToday.getMonth()}/${dateToday.getDay()}`}
      </time>
      <br />
      <time>只今の時刻は{`${dateNow}`}</time>
      <button onClick={refreshNowDate}>refresh time!</button> */}
      <p>&copy; &lt;Playground Markup Sample&gt;</p>
    </main>
  );
};

export default Markup;
