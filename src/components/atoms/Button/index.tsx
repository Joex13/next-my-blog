import { useSelector } from 'react-redux';

type Props = {
  value: string | number;
  handleClick?: () => void;
};

function Button({ value, handleClick }: Props) {
  const isDarkMode = useSelector((state: any) => state.isDarkMode.isDarkMode);
  const styleDarkMode = useSelector(
    (state: any) => state.isDarkMode.styleDarkMode
  );
  const styleLightMode = useSelector(
    (state: any) => state.isDarkMode.styleLightMode
  );
  return (
    <>
      <button
        className={isDarkMode ? styleDarkMode : styleLightMode}
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
