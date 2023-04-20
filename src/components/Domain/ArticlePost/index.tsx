import { Post } from '@/components/Base';

import React from 'react';

type Props = {
  className?: string;
  innerHtml: string;
};

const ArticlePost = ({ className, innerHtml }: Props) => {
  return (
    <>
      <Post className={className} innerHtml={innerHtml} />
    </>
  );
};

export default ArticlePost;
