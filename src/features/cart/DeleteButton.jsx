import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./Cartslice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteButton;
