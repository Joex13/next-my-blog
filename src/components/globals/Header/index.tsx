import Link from 'next/link';
import { NavHeader } from '@/components/molecules';
import { useSelector } from 'react-redux';

function Header() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <header>
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <h1>
          <Link href="/" className="font-bold text-2xl">
            Next My Blog
          </Link>
        </h1>
        <NavHeader />
      </div>
    </header>
  );
}

export default Header;
