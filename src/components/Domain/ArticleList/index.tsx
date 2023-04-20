import React from 'react';
import { List } from '@/components/Base';
import { ArticleCard } from '@/components/Domain';

type Props = {
  articles: any;
};

const ArticleList = ({ articles }: Props) => {
  return (
    <List className="grid grid-cols-2 gap-4 mt-4">
      {articles.map((article: any) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </List>
  );
};

export default ArticleList;
