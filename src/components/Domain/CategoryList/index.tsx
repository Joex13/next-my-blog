import React from 'react';
import { List } from '@/components/Base';

type Props = {
  className?: string;
  categories: any;
};

const CategoryList = ({ categories, className }: Props) => {
  return (
    <>
      <List className={className}>
        {categories.map((item: any) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </List>
    </>
  );
};

export default CategoryList;
