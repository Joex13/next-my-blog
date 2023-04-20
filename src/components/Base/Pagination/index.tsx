import Link from 'next/link';

type Props = {
  totalCount: number;
};

const PER_PAGE = 10;

const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

function Pagination({ totalCount }: Props) {
  return (
    <nav className="mt-4 flex flex-col gap-4">
      <ul className="flex gap-2 mx-auto">
        {range(1, Math.ceil(totalCount / PER_PAGE)).map(
          (number: number, index: number) => (
            <li className="bg-cyan-400" key={index}>
              <Link className='p-4' href={`/articles/${number}`}>{number}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
