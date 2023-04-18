import { useState } from 'react';

type Props = {};

function Hamburger(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        isOpen
          ? 'md:hidden z-10 flex flex-col h-6'
          : 'md:hidden z-10 flex flex-col justify-between h-6'
      }
    >
      <span
        className={
          isOpen
            ? 'block w-8 h-0.5 bg-slate-950 duration-300 rotate-45'
            : 'block w-8 h-0.5 bg-slate-950 duration-300'
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
            ? 'block w-8 h-0.5 bg-slate-950 duration-300 -rotate-45'
            : 'block w-8 h-0.5 bg-slate-950 duration-300'
        }
      />
    </button>
  );
}

export default Hamburger;
