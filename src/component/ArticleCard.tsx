import styled from "@emotion/styled";
import Image from "next/image";

type ArticleCardProps = {
  id: string;
  thumbnailImg: string;
  articleTitle: string;
  summaryText: string;
};

export const ArticleCard = (props: ArticleCardProps) => {
  const { id, thumbnailImg, articleTitle, summaryText } = props;
  return (
    <SDiv>
      <div className="left-wrapper">
        <p>{`ID: ${id}`}</p>
        <Image src={thumbnailImg} width={150} height={150} />
      </div>
      <div className="right-wrapper">
        <h2>{articleTitle}</h2>
        <p>{summaryText}</p>
      </div>
    </SDiv>
  );
};

const SDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid #888;
  width: fit-content;
  .right-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 500px;
    max-height: 200px;
    h2 {
      margin: 15px 0;
      margin-bottom: 0;
    }
    p {
      margin: 0;
      overflow-wrap: break-word;
      max-height: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default ArticleCard;
