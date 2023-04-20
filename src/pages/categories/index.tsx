import { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await client.get({ endpoint: 'categories' });

  return {
    props: {
      categories: data.contents,
    },
  };
};

export default CategoriesPage;
