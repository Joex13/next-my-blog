import Link from "next/link";

function NavHeader() {
  return (
    <>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/articles">記事一覧</Link></li>
          <li><Link href="">カテゴリ一覧</Link></li>
          <li><Link href="">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavHeader;
