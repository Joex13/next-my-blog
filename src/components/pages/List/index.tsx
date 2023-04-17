import { Header, Footer } from '@/components/globals';
import { Pagination } from '@/components/molecules';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggle } from '@/store/slices/isDarkModeSlice';
import { Button } from '@/components/atoms';

type Props = {
  articles: Article[];
  infoSearched: InfoSearched;
};

type Article = {
  id: string;
  title: string;
  content: string;
};

type InfoSearched = {
  totalCount: number;
  offset: number;
  limit: number;
};

function List({ articles, infoSearched }: Props) {
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    dispatch(toggle());
  };
  return (
    <>
      <Header />
      <main className="pt-12 px-2">
        <h1 className="font-bold">記事一覧</h1>
        <Button value={'トグル'} handleClick={toggleDarkMode} />
        <h2>全{infoSearched.totalCount}件中</h2>
        <p>{infoSearched.offset}</p>
        <ul className="flex flex-col gap-4 mt-4">
          {articles.map((article: Article) => {
            return (
              <li key={article.id}>
                <Link href={`/articles/detail/${article.id}`}>
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Pagination totalCount={infoSearched.totalCount} />
      </main>
      <Footer />
    </>
  );
}

export default List;
