import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '@/libs/client';
import { Header, Footer } from '@/components/globals';
import Link from 'next/link';
import { useEffect } from 'react';

function CategoriesPage({ articles }: any) {
  useEffect(() => {
    console.log(articles);
  }, []);

  return (
    <>
      <Header />
      <main className="mt-8">
        <nav>
          <ul className="flex flex-col gap-2">
            {articles.map((article: any) => {
              return (
                <li key={article.id}>
                  <Link href={`/articles/detail/${article.id}`}>
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' });

  const paths = data.contents.map(
    (content: any) => `/articles/categories/${content.id}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categoryId = ctx.params?.categoryId;

  const data = await client.get({
    endpoint: 'articles', // 記事一覧を取得する
    queries: { filters: `category[equals]${categoryId}` }, // カテゴリIDでフィルタリングする
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default CategoriesPage;
