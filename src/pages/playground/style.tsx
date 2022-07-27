import styled from "@emotion/styled";

import StyledPGContainer from "../../component/StyledPGContainer";

// emotionのstyled-components記法の中でJSを利用するテスト
const sDiv1TestColor1 = "#ff5";
const sDiv1TestColor2 = "#f5f";

const Style = () => {
  return (
    <StyledPGContainer>
      <>
        <SDiv1>
          <h2>属性セレクタの指定の検証</h2>
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
          <h2>構造擬似クラスの指定の検証</h2>
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
          <h2>フローティングボックスの検証</h2>
          <h3></h3>
          <div className="container_block">
            <div className="a">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            <div className="b">
              YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
            </div>
            <div className="c">
              ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
            </div>
          </div>
        </SDiv3>
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
    border: 2px solid #ddd;
    & > div {
      height: auto;
      overflow-wrap: break-word;
      color: #fff;
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
`;

export default Style;
