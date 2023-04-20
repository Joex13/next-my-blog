import Link from 'next/link';
import { useSelector } from 'react-redux';

function Header() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <header className="p-4 bg-orange-200">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <Link href="/" className="font-bold text-2xl">
          Next My Blog
        </Link>
        <nav className='my-auto'>
          <ul className="flex gap-4">
            <li>
              <Link href="/articles/1">記事一覧</Link>
            </li>
            <li>
              <Link href="/categories">カテゴリ一覧</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
