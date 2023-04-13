import NavHeader from '@/components/molecules/navHeader';

const Header = () => {
  return (
    <header className="bg-cyan-300 px-2 flex justify-between">
      <h1>AJブログ</h1>
      <NavHeader />
    </header>
  );
};

export default Header;
