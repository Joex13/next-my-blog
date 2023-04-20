import React from 'react';

type Props = {
  className?: string;
  children: any;
};

const List = ({ children, className }: Props) => {
  return (
    <nav>
      <ul className={className}>
        {children}
      </ul>
    </nav>
  );
};

export default List;
