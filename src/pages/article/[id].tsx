// pages/article/[id].js
import { useEffect } from 'react';
import { client } from '../../libs/client';

export default function ArticleId({ article }: any) {
  useEffect(() => {
    console.log(article);
  }, []);

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.publishedAt.slice(0, 10)}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: any) => `/article/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};
