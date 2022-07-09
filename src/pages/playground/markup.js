const Markup = () => {
  return (
    <div>
      <a href="/">
        <div>
          a要素はトランスペアレントなので親が内包できるコンテンツを内包できる
        </div>
      </a>
      <div>&copy; &lt;Playground Markup Sample&gt;</div>
    </div>
  );
};

export default Markup;
