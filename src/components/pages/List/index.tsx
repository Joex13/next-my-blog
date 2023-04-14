import { Noto_Sans_JP } from 'next/font/google';
import { Header, Footer } from '@/components/globals';
import { Pagination } from '@/components/molecules';
import Link from 'next/link';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
  return (
    <div className={notoSansJp.className}>
      <Header />
      <main className="px-2">
        <h1 className={`text-red-500 font-bold mt-4`}>記事一覧</h1>
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
    </div>
  );
}

export default List;
