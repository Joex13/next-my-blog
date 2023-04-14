import List from '@/components/pages/List';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';

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

const Index = ({ articles, infoSearched }: Props) => {
  return (
    <>
      <List articles={articles} infoSearched={infoSearched} />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.get({
    endpoint: 'articles',
    queries: {
      offset: 0,
      limit: 10,
    },
  });
  return {
    props: {
      articles: articles.contents,
      infoSearched: {
        totalCount: articles.totalCount,
        offset: articles.offset,
        limit: articles.limit,
      },
    },
  };
};
