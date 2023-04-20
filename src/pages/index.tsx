import { List } from '@/components/pages';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';

const PER_PAGE = 10;

type Props = {
  articles: Article[];
  infoSearched: InfoSearched;
};

type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  eyecatch: {
    url: string;
  };
};

type InfoSearched = {
  totalCount: number;
  offset: number;
  limit: number;
};

function Index({ articles, infoSearched }: Props) {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  const styleDarkMode = useSelector(
    (state: any) => state.darkMode.styleDarkMode
  );
  const styleLightMode = useSelector(
    (state: any) => state.darkMode.styleLightMode
  );

  return (
    <div>
      <List articles={articles} infoSearched={infoSearched} />
    </div>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const articles = await client.get({
    endpoint: 'articles',
    queries: {
      offset: 0,
      limit: PER_PAGE,
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
