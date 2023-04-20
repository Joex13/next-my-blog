import { Header, Footer, Pagination } from '@/components/Base';
import { ArticleCard } from '@/components/Domain';
import Link from 'next/link';
import NextImage from 'next/image';

type Props = {
  articles: Article[];
  infoSearched: InfoSearched;
};

type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  eyecatch: {
    url: string;
  };
};

type InfoSearched = {
  totalCount: number;
  offset: number;
  limit: number;
};

function List({ articles, infoSearched }: Props) {
  return (
    <div>
      <Header />
      <main className="mt-4 px-4">
        <div className="max-w-screen-lg mx-auto">
          <h2>全{infoSearched.totalCount}件中</h2>
          <p>{infoSearched.offset}</p>
          <ul className="grid grid-cols-2 gap-4 mt-4">
            {articles.map((article: Article) => {
              return <ArticleCard key={article.id} article={article} />;
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
