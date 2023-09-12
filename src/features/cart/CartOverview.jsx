import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-stone sm-px-6 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase placeholder-gray-200 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="font-semibold text-stone-400">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;