import styled from "@emotion/styled";

const StyledPGContainer = (props: { children: JSX.Element }) => {
  return <SContainer>{props.children}</SContainer>;
};

const SContainer = styled.div`
  padding: 20px 30px;
  a {
    color: #0070f3;
  }
`;

export default StyledPGContainer;
