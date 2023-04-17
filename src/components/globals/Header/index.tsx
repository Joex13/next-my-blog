import Link from 'next/link';
import { NavHeader } from '@/components/molecules';

function Header() {
  return (
    <header className="bg-cyan-300 p-2 flex justify-between w-full fixed top-0">
      <h1>
        <Link href="/">Next My Blog</Link>
      </h1>
      <NavHeader />
    </header>
  );
}

export default Header;
