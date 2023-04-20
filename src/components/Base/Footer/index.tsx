import { useSelector } from 'react-redux';
import { TextBox } from '@/components/Base';

function Footer() {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  return (
    <footer className="p-4 mt-4 bg-orange-200">
      <div className="flex justify-between max-w-screen-lg mx-auto">
        <TextBox>this is footer</TextBox>
      </div>
    </footer>
  );
}

export default Footer;
