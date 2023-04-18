import { GetStaticProps } from 'next';
import { client } from '@/libs/client';
import { Header, Footer } from '@/components/globals';
import Link from 'next/link';
import { useEffect } from 'react';

function CategoriesPage({ categories }: any) {
  useEffect(() => {
    console.log(categories);
  }, []);

  return (
    <>
      <Header />
      <main className="mt-8">
        <nav>
          <ul className="flex flex-col gap-2">
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
  const data = await client.get({ endpoint: 'categories' });

  return {
    props: {
      categories: data.contents,
    },
  };
};

export default CategoriesPage;
