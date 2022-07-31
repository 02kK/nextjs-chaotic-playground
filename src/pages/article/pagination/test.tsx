import { GetStaticProps, NextPage } from "next";

import { Pagination } from "../../../component/Pagination";
import { ArticleCard } from "../../../component/ArticleCard";
import mockData from "../../../mock/mockData";

type TestProps = {};

const Test: NextPage<TestProps> = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      {mockData.map((id) => (
        <ArticleCard
          key={id}
          id={id}
          thumbnailImg="/img/shared/my_icon.jpeg"
          articleTitle="This is Article Title"
          summaryText={String.fromCodePoint(Number(id) + 12400).repeat(500)}
        />
      ))}
      <Pagination totalCount={mockData.length} perPage={5} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<TestProps> = async () => {
  return {
    props: {},
  };
};

export default Test;
