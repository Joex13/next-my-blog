import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '@/libs/client';
import { Header, Footer } from '@/components/Base';
import { CategoryList } from '@/components/Domain';

function CategoriesPage({ categories }: any) {
  return (
    <>
      <Header />
      <main className="mt-8">
        <CategoryList categories={categories} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' });

  const paths = data.contents.map(
    (content: any) => `/articles/categories/${content.id}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categoryId = ctx.params?.categoryId;

  const data = await client.get({
    endpoint: 'articles', // 記事一覧を取得する
    queries: { filters: `category[equals]${categoryId}` }, // カテゴリIDでフィルタリングする
  });

  return {
    props: {
      categories: data.contents,
    },
  };
};

export default CategoriesPage;
