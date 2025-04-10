import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import {useDispatch} from "react-redux";
// import {Plus, X, Minus } from "phosphor-icons";  

import { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } from "../../redux/cart/actions";

export default function CartItem ({ product }) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id))
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id))
  };

  return (
    <div className="flex items-center mb-4">
      <div
        className="h-[250px] w-[170px] bg-cover bg-center bg-no-repeat rounded-lg shadow-md"
        style={{ backgroundImage: `url('${product.imageUrl}')` }}
      ></div>

      <div className="flex flex-col ml-5 flex-1">
        <p className="font-semibold mb-1">{product.name}</p>
        <p className="font-medium">R${product.price}</p>

        <div className="flex items-center mt-2">
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            className="cursor-pointer"
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p className="mx-2">{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            className="cursor-pointer"
            aria-label={`Increase quantity of ${product.name}`}
          />
        </div>
      </div>

      <div
        className="mr-5 cursor-pointer"
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </div>
    </div>
  );
};


