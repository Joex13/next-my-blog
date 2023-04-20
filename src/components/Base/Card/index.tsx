import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

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
  bgColor: string;
};

const Card: React.FC<Props> = ({ article, bgColor }) => {
  return (
    <li
      key={article.id}
      className={"flex flex-col p-2 text-center h-80 " + bgColor}
    >
      <div className="relative aspect-square">
        <NextImage
          // className="object-fill"
          src={article.eyecatch.url}
          alt={article.title}
          fill
        />
      </div>
      <Link className="relative" href={`/articles/detail/${article.id}`}>
        <span>{article.title}</span>
      </Link>
      <span>{article.createdAt.slice(0, 10)}</span>
    </li>
  );
};

export default Card;
