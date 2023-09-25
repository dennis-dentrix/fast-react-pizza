import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "mt-4 inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "md:px-6 md:py-4 px-4 py-3 ",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "mt-4 text-sm inline-block rounded-full  border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5",
    round: base + "py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        to={to}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} to={to} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
