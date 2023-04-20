import { Card } from '@/components/Base';

type Props = {
  article: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    eyecatch: {
      url: string;
    };
  };
};

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Card article={article} bgColor="bg-cyan-400" />
    </>
  );
};

export default ArticleCard;
