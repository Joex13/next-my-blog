import Link from 'next/link';
import { Hamburger } from '@/components/atoms';

function NavHeader() {
  return (
    <>
      <nav className="my-auto">
        <ul className="fixed top-0 left-[100%] md:flex md:static gap-4">
          <li>
            <Link href="/articles">記事一覧</Link>
          </li>
          <li>
            <Link href="/categories">カテゴリ一覧</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
        <Hamburger />
      </nav>
    </>
  );
}

export default NavHeader;
