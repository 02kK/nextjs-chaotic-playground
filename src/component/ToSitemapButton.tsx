import Link from "next/link";
import styled from "styled-components";

const ToSitemapButton = () => {
  return (
    <Link href="/sitemap">
      <SButton>Return Sitemap</SButton>
    </Link>
  );
};

const SButton = styled.div`
  border: solid 1px #0577b4;
  pasdding: 10px 20px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
