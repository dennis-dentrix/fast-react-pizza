import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./Cartslice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartprice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="text-stone sm-px-6 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase placeholder-gray-200 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartprice)}</span>
      </p>
      <Link to="/cart" className="font-semibold text-stone-400">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
