import type { NextPage } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { useEffect } from 'react';
import { Header, Footer } from '@/components/globals';
import Link from 'next/link';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  articles: Article[];
};

type Article = {
  id: string;
  title: string;
  content: string;
};

const List = ({ articles }: Props) => {
  useEffect(() => {
    console.log(articles);
  }, []);

  return (
    <div className={notoSansJp.className}>
      <Header />
      <main className="px-2">
        <h1 className={`text-red-500 font-bold mt-4`}>記事一覧</h1>
        <ul className="flex flex-col gap-4 mt-4">
          {articles.map((article: Article) => {
            return (
              <li key={article.id}>
                <Link href={`article/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default List;
