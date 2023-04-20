import { Header, Footer, Heading, TextBox, Post } from '@/components/Base';
import Link from 'next/link';

function ArticleId({ article }: any) {
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
        <Post innerHtml={article.content} />
      </main>
      <Footer />
    </>
  );
}

export default ArticleId;
