import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TextBox: React.FC<Props> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default TextBox;
