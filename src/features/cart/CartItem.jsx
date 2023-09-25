import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import DeleteButton from "./DeleteButton";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./Cartslice";
function CartItem({ item }) {
  const { pizzaID, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaID));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaID}
          currentQuantity={currentQuantity}
        />
        <DeleteButton pizzaId={pizzaID} />
      </div>
    </li>
  );
}

export default CartItem;
