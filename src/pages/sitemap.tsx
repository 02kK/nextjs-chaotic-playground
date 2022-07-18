import Link from "next/link";

import StyledContainer from "../component/StyledPGContainer";
import LinkButton from "../component/LinkButton";

const Sitemap = () => {
  return (
    <StyledContainer>
      <>
        <h1>ページリンク集</h1>
        <ul>
          <li>
            マークアップの練習：
            <Link href="/playground/markup">
              <a>/playground/markup</a>
            </Link>
          </li>
          <li>
            スタイルの練習：
            <Link href="/playground/style">
              <a>/playground/style</a>
            </Link>
          </li>
        </ul>
        <LinkButton href="/" buttonText="Transition to Top Page" />
      </>
    </StyledContainer>
  );
};

export default Sitemap;
