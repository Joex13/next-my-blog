import { useSelector } from 'react-redux';

function Footer() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <footer className='p-4 bg-orange-200'>
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <p>this is footer</p>
        <p>this is footer</p>
        <p>this is footer</p>
      </div>
    </footer>
  );
}

export default Footer;
