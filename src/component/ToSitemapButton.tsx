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
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #0577b4;
  color: #fff;
  text-align: center;
  font-size: 30px;
  &:hover {
    cursor: pointer;
    border: 1px solid #0577b4;
    background-color: #fff;
    color: #0577b4;
  }
`;

export default ToSitemapButton;
