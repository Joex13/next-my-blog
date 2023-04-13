import List from '@/components/pages/list';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';

type Props = {
  articles: Article[];
};

type Article = {
  id: string;
  title: string;
  content: string;
};

const Index = ({ articles }: Props) => {
  return (
    <>
      <List articles={articles} />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.get({ endpoint: 'blogs' });
  return {
    props: {
      articles: articles.contents,
    },
  };
};
