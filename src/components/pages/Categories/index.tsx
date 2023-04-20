import React from 'react';
import { Footer, Header } from '@/components/Base';
import { GetStaticPaths, GetStaticProps } from 'next';

function Categories() {
  return (
    <>
      <Header />
      <main>カテゴリー</main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Categories;
