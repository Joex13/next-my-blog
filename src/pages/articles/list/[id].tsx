import { client } from '@/libs/client';
import { List } from '@/components/pages';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useSelector } from 'react-redux';

type Props = {};

const PER_PAGE = 10;

function Index({ articles, infoSearched }: any) {
  const isDarkMode = useSelector((state: any) => state.isDarkMode.isDarkMode);
  const styleDarkMode = useSelector(
    (state: any) => state.isDarkMode.styleDarkMode
  );
  const styleLightMode = useSelector(
    (state: any) => state.isDarkMode.styleLightMode
  );

  return (
    <div className={isDarkMode ? styleDarkMode : styleLightMode}>
      <List articles={articles} infoSearched={infoSearched} />
    </div>
  );
}

export default Index;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const articles = await client.get({ endpoint: 'articles' });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(articles.totalCount / PER_PAGE)).map(
    (article) => `/articles/list/${article}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = Number(ctx.params?.id);
  const articles = await client.get({
    endpoint: 'articles',
    queries: {
      offset: (id - 1) * 10,
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
