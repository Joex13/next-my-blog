import Link from 'next/link';
import { NavHeader } from '@/components/molecules';

function Header() {
  return (
    <header className="bg-cyan-300 px-2 flex justify-between">
      <h1>
        <Link href="/">AJブログ</Link>
      </h1>
      <NavHeader />
    </header>
  );
}

export default Header;
