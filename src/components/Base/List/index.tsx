import React from 'react';

type Props = {
  className: string;
  children: React.ReactNode;
};

const List = ({ children, className }: Props) => {
  return (
    <nav>
      <ul className={className}>{children}</ul>
    </nav>
  );
};

export default List;
