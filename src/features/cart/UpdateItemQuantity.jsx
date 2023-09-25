import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, inreaseItemQuantity } from "./Cartslice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-baseline gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium ">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(inreaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
