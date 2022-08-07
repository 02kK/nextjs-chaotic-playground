import styled from "@emotion/styled";

import StyledPGContainer from "../../component/StyledPGContainer";

// emotionのstyled-components記法の中でJSを利用するテスト
const sDiv1TestColor1 = "#ff5";
const sDiv1TestColor2 = "#f5f";

const Style = () => {
  return (
    <StyledPGContainer>
      <>
        <h1>■ CSS3の検証</h1>
        <SDiv1>
          <h2>▼ 属性セレクタの指定の検証</h2>
          <div className="cls-1 xyz">
            <div className="cls-2 xy">
              <div className="cls-3 x">
                <div className="xxx y z">
                  <div className="x-xx"></div>
                  <div className="y-xx x-xx zzz"></div>
                </div>
              </div>
            </div>
          </div>
        </SDiv1>
        <SDivider />
        <SDiv2>
          <h2>▼ 構造擬似クラスの指定の検証</h2>
          <ul>
            <li>1番目のli要素</li>
            <li>2番目のli要素</li>
            <p>1番目のp要素</p>
            <li>3番目のli要素</li>
            <p>2番目のp要素</p>
            <li>4番目のli要素</li>
            <li>5番目のli要素</li>
            <li>6番目のli要素</li>
            <li>7番目のli要素</li>
            <li>8番目のli要素</li>
            <li>9番目のli要素</li>
            <li>10番目のli要素</li>
            <li>11番目のli要素</li>
            <li>12番目のli要素</li>
          </ul>
        </SDiv2>
        <SDivider />
        <SDiv3>
          <h2>▼ フローティングボックスの検証</h2>
          <div className="container_block">
            <div className="a">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            <div className="b">
              YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
            </div>
            <div className="c">
              ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
            </div>
          </div>
          <div className="container01">
            <div className="a">AAA</div>
            <div className="b">BBB</div>
            <div className="c">CCC</div>
          </div>
          <div className="container02">
            <div className="d">DDD</div>
            <div className="e">EEE</div>
            <div className="f">FFF</div>
          </div>
        </SDiv3>
        <SDivider />
        <SDiv4>
          <h2>▼ ポジションボックスの検証</h2>
          <div className="sticky-container">
            <div></div>
            <div></div>
            <div className="sticky">Sticky Bannar</div>
            <div className="sticky-next"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="sticky-outer"></div>
          <div className="footer">&copy; Sample Sapmple Corporation</div>
        </SDiv4>
        <SDivider />
        <SDiv5>
          <h2>▼ アウターディスプレイタイプの検証</h2>
          <div className="block">
            block block block block block block block block block block block
            block block block block block block block block block block block
            block block block block block block block block block block block
            block block block block block block block block block block block
            block block block block block block block block block block block
            block block block block block block block block block block
          </div>
          <div className="flex">
            flex flex flex flex flex flex flex flex flex flex flex flex flex
            flex flex flex flex flex flex flex flex flex flex flex flex flex
            flex flex flex flex flex flex flex flex flex flex flex flex flex
            flex flex flex flex flex flex flex flex flex flex flex flex flex
            flex flex flex flex flex flex flex flex flex flex flex{" "}
          </div>
          <div className="grid">
            grid grid grid grid grid grid grid grid grid grid grid grid grid
            grid grid grid grid grid grid grid grid grid grid grid grid grid
            grid grid grid grid grid grid grid grid grid grid grid grid grid
            grid grid grid grid grid grid grid grid grid grid grid grid grid
            grid grid grid grid grid grid grid grid
          </div>
          <div className="table">
            table table table table table table table table table table table
            table table table table table table table table table table table
            table table table table table table table table table table table
            table table table table table table table table table table table
            table table table table
          </div>
          <div className="inline">inline</div>
          <div className="inline-block">inline-block</div>
          <div className="inline-flex">inline-flex</div>
        </SDiv5>
        <SDivider />
        <SDiv6>
          <h2>▼ グリッドレイアウト（グリッドライン）の検証</h2>
          <div className="grid_container">
            <div className="A">A</div>
            <div className="B">B</div>
            <div className="C">C</div>
            <div className="D">D</div>
            <div className="E">EEE EEE EEE EEE EEE</div>
            <div className="F">F</div>
          </div>
        </SDiv6>
        <SDivider />
        <SDiv7>
          <h2>▼ グリッドレイアウト（グリッドエリア）の検証</h2>
          <div className="grid_container">
            <div className="A">A</div>
            <div className="B">B</div>
            <div className="C">C</div>
            <div className="D">D</div>
            <div className="E">EEE EEE EEE EEE EEE</div>
            <div className="F">F</div>
          </div>
        </SDiv7>
        <SDivider />
      </>
    </StyledPGContainer>
  );
};

const SDivider = styled.hr`
  margin: 20px 0;
  border-top: 1px solid #000;
  border-bottom: none;
`;

const SDiv1 = styled.div`
  // カスタムプロパティで変数を定義
  --red-color: #f55;
  --green-color: #5f5;
  --blue-color: #55f;
  --purple-color: #f5f;

  .cls-1 {
    width: 300px;
    height: 300px;
    padding: 20px;
    border: 1px solid var(--red-color);
  }

  .cls-2 {
    height: 100%;
    padding: 20px;
    border: 1px solid var(--green-color);
  }

  .cls-3 {
    height: 100%;
    padding: 20px;
    border: 1px solid var(--blue-color);
  }

  .xxx {
    height: 100%;
    padding: 20px;
    border: 1px solid var(--purple-color);
    border-radius: 999px;
  }

  .x-xx {
    height: 100%;
    padding: 20px;
    border: 1px solid var(--purple-color);
    border-radius: 999px;
  }

  .zzz {
    height: 100%;
    padding: 20px;
    border: 1px solid var(--blue-color);
    border-radius: 999px;
  }

  // class名全体が"x"に完全一致した場合のみ適用
  [class="x"] {
    display: none;
  }

  // classの中に"x"の文字が含まれれば適用
  [class*="x"] {
    :hover {
      cursor: pointer;
    }
  }

  // class名の中に"x"という独立したクラス（space区切り）が含まれていれば適用
  [class~="x"] {
    :active {
      // styled-componentを使えばいわばJS-in-CSSができる
      background-color: ${sDiv1TestColor1};
    }
  }

  // class名全体が"x"で始まれば適用
  [class^="x"] {
    :active {
      background-color: ${sDiv1TestColor2};
    }
  }

  // class名が全体が"3"で終われば適用
  [class$="3"] {
    display: none;
  }

  // class名全体が"x-"で始まる場合に適用
  [class|="x"] {
    display: none;
  }

  // class名全体が"y-xx x-xx"で始まる場合に適用
  [class^="y-xx x-xx"] {
    display: none;
  }
`;

const SDiv2 = styled.div`
  ul {
    & > :nth-child(3n) {
      color: #77f;
    }
    & > :nth-child(-n + 2) {
      font-weight: bold;
    }
    & > :first-child {
      font-style: italic;
    }
    & > :nth-last-child(2) {
      color: #f77;
    }
    // ul配下 && p && 最初の子要素 が存在しないため適用されない
    & > p:first-child {
      display: none;
    }
    & > p:first-of-type {
      color: #7f7;
    }
    & > :last-of-type {
      display: inline-block;
      color: #fff;
      background-color: #62c;
    }
  }
`;

const SDiv3 = styled.div`
  .container_block {
    display: flow-root;
    margin-bottom: 30px;
    border: 2px solid #ddd;
    & > div {
      height: auto;
      overflow-wrap: break-word;
    }
    .a {
      float: right;
      width: 80px;
      background-color: #f44;
    }
    .b {
      background-color: #4f4;
    }
    .c {
      clear: both;
      background-color: #44f;
    }
  }

  .container01 {
    border: 2px solid #ddd;
    margin-bottom: 30px;
    width: 200px;
    .a {
      background-color: #f00;
    }
    .b {
      background-color: #f66;
      float: left;
      height: 50px;
    }
    .c {
      background-color: #faa;
      display: block;
    }
    /* clearfix設定で回り込み回避 */
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .container02 {
    border: 2px solid #ddd;
    margin-bottom: 30px;
    /* clear: both; */
    .d {
      background-color: #00f;
    }
    .e {
      background-color: #66f;
    }
    .f {
      background-color: #aaf;
    }
  }
`;
const SDiv4 = styled.div`
  .sticky-container {
    > div {
      height: 50px;
      border: 2px solid #ddd;
      background-color: #aa1bff;
      &.sticky {
        display: inline-block;
        position: sticky;
        float: right;
        top: 100px;
        padding: 10px 30px;
        background-color: #23ff17;
        font-size: 30px;
        line-height: 30px;
        color: #fff;
      }
      &.sticky-next {
        clear: right;
      }
    }
  }
  .sticky-outer {
    height: 100vh;
    background-color: #23ffb5;
  }
  .footer {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #44f;
    color: #fff;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
  }
`;

const SDiv5 = styled.div`
  div {
    margin-bottom: 10px;
    border: 1px solid #ddd;
    background-color: #444;
    color: #eee;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .table {
    display: table;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
`;

const SDiv6 = styled.div`
  .grid_container {
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 100px;
    border: 1px solid #aaa;
    color: #fff;
    div {
      font-size: 24px;
    }
    .A {
      background-color: #f33;
    }
    .B {
      background-color: #3f3;
      grid-row: 1 / 3;
      grid-column: 2 / 4;
      z-index: 999;
    }
    .C {
      background-color: #33f;
      text-align: right;
      grid-row: 2 / span 2;
      grid-column: 3 / span 3;
    }
    .D {
      background-color: #555;
    }
    .E {
      /* order: -1; */
      margin: 5px;
      background-color: #777;
    }
    .F {
      background-color: #999;
    }
  }
`;

const SDiv7 = styled.div`
  .grid_container {
    display: grid;
    grid-template-areas:
      "area11 area12 area13"
      "area21 area22 area23"
      "area21 area22 area23";
    /* グリッドエリア定義がされていれば暗黙トラック設定すれば自動で同じ大きさのトラックが作られる */
    grid-auto-rows: 100px;
    grid-auto-columns: 1fr;
    border: 1px solid #aaa;
    color: #fff;
    div {
      font-size: 24px;
    }
    .A {
      background-color: #f33;
    }
    .B {
      background-color: #3f3;
    }
    .C {
      background-color: #33f;
    }
    .D {
      background-color: #555;
    }
    .E {
      background-color: #777;
      grid-area: area22;
    }
    .F {
      background-color: #999;
    }
  }
`;

export default Style;
