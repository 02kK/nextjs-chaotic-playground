import styled from "@emotion/styled";

import StyledPGContainer from "../../component/StyledPGContainer";

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

  // class="x"に完全一致した場合のみ適用
  [class="x"] {
    display: none;
  }

  // classは複数あってもよく、その中にxに部分一致するclassがあれば適用
  [class*="x"] {
    :hover {
      cursor: pointer;
    }
  }

  // classは複数あってもいいが、その中にxに完全一致するclassがあれば適用
  [class~="x"] {
    :active {
      // styled-componentを使えばいわばJS-in-CSSができる
      background-color: ${sDiv1TestColor1};
    }
  }

  // classが全体でxから始まった場合に適用
  [class^="x"] {
    :active {
      background-color: ${sDiv1TestColor2};
    }
  }

  // class名が全体で3で終わった場合に適用
  [class$="3"] {
    display: none;
  }

  // class名全体がx-で始まる場合に適用
  [class|="x"] {
    display: none;
  }

  [class^="y-xx x-xx"] {
    display: none;
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
`;

export default Style;
