import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Heading } from '@/components/Base';

function Header() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <header className="p-4 bg-orange-200">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <Link href="/" className="font-bold text-2xl">
          Next My Blog
        </Link>
      </div>
    </header>
  );
}

export default Header;
