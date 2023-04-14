import { Header, Footer } from '@/components/globals';

export default function ArticleId({ article }: any) {
  return (
    <>
      <Header />
      <main>
        <h1>{article.title}</h1>
        <p>日時:{article.publishedAt.slice(0, 10)}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
