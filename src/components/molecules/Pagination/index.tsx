import Link from 'next/link';

type Props = {
  totalCount: number;
};

function Pagination({ totalCount }: Props) {
  const PER_PAGE = 10;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <nav className="mt-4 flex flex-col gap-4">
      <h3>ページネーション</h3>
      <ul className="flex gap-2 mx-auto">
        {range(1, Math.ceil(totalCount / PER_PAGE)).map(
          (number: number, index: number) => (
            <li className="bg-teal-400 p-2" key={index}>
              <Link href={`/articles/${number}`}>{number}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
