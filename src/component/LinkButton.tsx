import Link from "next/link";
import styled from "styled-components";

type LinkButtonProps = {
  href: string;
  buttonText: string;
};

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link href={props.href}>
      <SButton>{props.buttonText}</SButton>
    </Link>
  );
};

const SButton = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #0070f3;
  color: #fff;
  text-align: center;
  font-size: 30px;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    border: 1px solid #0070f3;
    background-color: #fff;
    color: #0070f3;
    transform: scale(1.1);
  }
`;

export default LinkButton;
