import { GetStaticPaths, NextPage } from "next";

import { Pagination } from "../../../component/Pagination";
import { ArticleCard } from "../../../component/ArticleCard";
import mockData from "../../../mock/mockData";

type PageProps = { id: string };

const Page: NextPage<PageProps> = (props) => {
  const { id } = props;
  const targetMockData = mockData.slice(5 * (Number(id) - 1), 5 * Number(id));
  return (
    <div style={{ margin: "10px" }}>
      {targetMockData.map((id) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = Array.isArray(context.params["id"])
    ? context.params["id"][0]
    : context.params["id"];
  return {
    props: { id },
  };
};

export default Page;
