import { GetStaticProps } from 'next';
import { client } from '@/libs/client';
import { Header, Footer } from '@/components/globals';
import Link from 'next/link';

function CategoriesPage({ categories }: any) {
  return (
    <>
      <Header />
      <main className='mt-4'>
        <nav>
          <ul className='flex flex-col gap-2'>
            {categories.map((category: any) => {
              return (
                <li key={category.id}>
                  <Link href={`/articles/categories/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await client.get({
    endpoint: 'categories',
  });

  const categories = data.contents.map((content: any) => {
    return {
      id: content.id,
      name: content.name,
    };
  });

  return {
    props: {
      categories,
    },
  };
};

export default CategoriesPage;
