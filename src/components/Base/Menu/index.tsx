import React from 'react';
import Link from 'next/link';

type Props = {
  listItems: { value: string; href: string }[];
  className: string;
};

const Menu = ({ className, listItems }: Props) => {
  return (
    <nav className="my-auto">
      <ul className="flex gap-4">
        {listItems.map((listItem) => {
          return (
            <li className={className} key={listItem.value}>
              <Link href={listItem.href}>{listItem.value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
