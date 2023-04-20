import { useSelector } from 'react-redux';
import { TextBox } from '@/components/Base';
import Link from 'next/link';

function Footer() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <footer className="p-4 mt-4 bg-orange-200">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <TextBox>this is footer</TextBox>
        <nav className="my-auto">
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
    </footer>
  );
}

export default Footer;
