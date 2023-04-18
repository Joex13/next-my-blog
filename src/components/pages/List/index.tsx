import { Header, Footer } from '@/components/globals';
import { Pagination } from '@/components/molecules';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggle } from '@/store/slices/darkModeSlice';
import { Button } from '@/components/atoms';

type Props = {
  articles: Article[];
  infoSearched: InfoSearched;
};

type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
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
    <div>
      <Header />
      <main className="mt-4 px-4">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="font-bold">記事一覧</h1>
          <Button value={'トグル'} handleClick={toggleDarkMode} />
          <h2>全{infoSearched.totalCount}件中</h2>
          <p>{infoSearched.offset}</p>
          <ul className="grid grid-cols-2 gap-4 mt-4">
            {articles.map((article: Article) => {
              return (
                <li
                  key={article.id}
                  className="flex flex-col bg-cyan-400 px-2 text-center min-h-[250px]"
                >
                  <Link href={`/articles/detail/${article.id}`}>
                    {article.title}
                  </Link>
                  <span>{article.createdAt.slice(0, 10)}</span>
                </li>
              );
            })}
          </ul>
          <Pagination totalCount={infoSearched.totalCount} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default List;
