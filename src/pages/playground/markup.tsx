import { useEffect } from "react";

const Markup = () => {
  // JSXの場合にはscript要素を使うのではなく副作用はuseEffectで記述
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `this is useEffect`;
  }, []);

  return (
    <div>
      <a href="#">
        <div>
          a要素はトランスペアレントなので親が内包できるコンテンツを内包できる
        </div>
      </a>
      <div>&copy; &lt;Playground Markup Sample&gt;</div>
    </div>
  );
};

export default Markup;
