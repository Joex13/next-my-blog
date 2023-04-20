import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/slices/hamburgerSlice';

type Props = {};

function Hamburger(props: Props) {
  const isOpen = useSelector((state: any) => state.hamburger.isOpen);
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(toggle());
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="md:hidden z-10 h-6 relative"
    >
      <span
        className={
          isOpen
            ? 'block w-8 h-0.5 bg-slate-950 duration-300 rotate-45 top-1/2'
            : 'block w-8 h-0.5 bg-slate-950 duration-300 absolute top-0'
        }
      />
      <span
        className={
          isOpen
            ? 'block w-8 h-0.5 bg-slate-950 duration-300 opacity-0'
            : 'block w-8 h-0.5 bg-slate-950 duration-300'
        }
      />
      <span
        className={
          isOpen
            ? 'block w-8 h-0.5 bg-slate-950 duration-300 -rotate-45 absolute bottom-1/2'
            : 'block w-8 h-0.5 bg-slate-950 duration-300 absolute bottom-0'
        }
      />
    </button>
  );
}

export default Hamburger;
