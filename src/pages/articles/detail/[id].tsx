import { Article } from '@/components/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '@/libs/client';

function ArticlePage({ article }: any) {
  return (
    <>
      <Article article={article} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'articles',
    queries: {
      offset: 0,
      limit: 99, // 100件取得
    },
  });
  const paths = data.contents.map(
    (content: any) => `/articles/detail/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};

export default ArticlePage;
