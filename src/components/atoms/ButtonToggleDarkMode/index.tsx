import { toggle } from '@/store/slices/darkModeSlice';
import { useSelector, useDispatch } from 'react-redux';

type Props = {};

const ButtonToggleDarkMode = (props: Props) => {
  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    dispatch(toggle());
  };
  return <button onClick={toggleDarkMode}>{isDarkMode ? '太陽' : '月'}</button>;
};

export default ButtonToggleDarkMode;
