//components/Pagination.js
import Router from "next/router";
import Link from "next/link";

type PaginationProps = { totalCount: number; perPage: number };

export const Pagination = (props: PaginationProps) => {
  const { totalCount, perPage } = props;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index}>
          <Link href={`/article/paginate/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
