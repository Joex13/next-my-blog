import { useSelector } from 'react-redux';

type Props = {
  value: string | number;
  onClickFn?: Function;
};

function Button({ value, onClickFn }: Props) {
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
      >
        {value}
      </button>
    </>
  );
}

export default Button;
