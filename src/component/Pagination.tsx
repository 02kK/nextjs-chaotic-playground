//components/Pagination.js
import Router from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

type PaginationProps = { totalCount: number; perPage: number };

export const Pagination = (props: PaginationProps) => {
  const { totalCount, perPage } = props;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <SPagination>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index}>
          <Link href={`/article/pagination/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </SPagination>
  );
};

const SPagination = styled.ul`
  display: flex;
  li {
    margin-right: 20px;
    padding: 2px 5px;
    border: 1px solid #777;
    list-style: none;
    background-color: #555;
    color: #fff;
  }
`;
