type Props = {};

function Hamburger(props: Props) {
  return (
    <button type="button" className="md:hidden z-10 space-y-2">
      <div className="w-8 h-0.5 bg-red-950" />
      <div className="w-8 h-0.5 bg-red-950" />
      <div className="w-8 h-0.5 bg-red-950" />
    </button>
  );
}

export default Hamburger;
