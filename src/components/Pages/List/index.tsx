import {
  Header,
  Footer,
  Pagination,
  TextBox,
  Heading,
} from '@/components/Base';
import { ArticleList } from '@/components/Domain';

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

function List({ articles, infoSearched }: Props) {
  return (
    <>
      <Header />
      <main className="mt-4 px-4">
        <div className="max-w-screen-lg mx-auto">
          <Heading level={2}>全{infoSearched.totalCount}件中</Heading>
          <TextBox>{infoSearched.offset + 1}件目〜</TextBox>
          <ArticleList articles={articles} />
          <Pagination totalCount={infoSearched.totalCount} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default List;
