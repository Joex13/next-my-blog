import React from 'react';

type Props = {
  innerHtml: string;
  className?: string;
};

const Post = ({ className, innerHtml }: Props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: innerHtml,
        }}
        className={className}
      ></div>
    </>
  );
};

export default Post;
