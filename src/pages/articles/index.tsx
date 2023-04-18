import List from '@/components/pages/List';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';

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

function Index({ articles, infoSearched }: Props) {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <div className={isDarkMode ? "text-white bg-slate-700" : "text-slate-700 bg-orange-200"}>
      <List articles={articles} infoSearched={infoSearched} />
    </div>
  );
}

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
