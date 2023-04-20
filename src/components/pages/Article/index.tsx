import { Header, Footer, Heading, TextBox } from '@/components/Base';
import { useEffect } from 'react';
import Link from 'next/link';

function ArticleId({ article }: any) {
  useEffect(() => {
    console.log(article);
  }, []);
  return (
    <>
      <Header />
      <main className="mt-8">
        <div className="text-center">
          <Heading level={2} className="font-bold text-2xl">
            {article.title}
          </Heading>
          <Heading level={3} className="mt-2">
            {article.category ? (
              <>
                <Link href={`/articles/categories/${article.category.id}`}>
                  {article.category.name}
                </Link>
              </>
            ) : (
              'カテゴリー設定なし'
            )}
          </Heading>
          <TextBox className="mt-2">
            投稿時間:{article.publishedAt.slice(0, 10)}
          </TextBox>
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
