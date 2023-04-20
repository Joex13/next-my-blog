import { Header, Footer } from '@/components/Base';
import { useEffect } from 'react';
import Link from 'next/link';

function ArticleId({ article }: any) {
  useEffect(() => {
    console.log(article);
  }, []);
  return (
    <>
      <Header />
      <main className='mt-8'>
        <div className="text-center">
          <h1 className="font-bold text-2xl">{article.title}</h1>
          <h2 className="mt-2">
            {article.category ? (
              <>
                <Link href={`/articles/categories/${article.category.id}`}>
                  {article.category.name}
                </Link>
              </>
            ) : (
              'カテゴリー設定なし'
            )}
          </h2>
          <p className="mt-2">投稿時間:{article.publishedAt.slice(0, 10)}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
          className="mt-4"
        />
      </main>
      <Footer />
    </>
  );
}

export default ArticleId;
