import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import CustomButton from "../customButton/CustomButton";

export default function ProductItem ({ product }) {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="flex flex-col w-full max-w-[300px] mx-auto">
      <div>
        <div
          className="h-[380px] w-[300px] bg-cover bg-center bg-no-repeat rounded-lg shadow-md flex items-end transition-all duration-300 hover:bg-black/50"
          style={{ backgroundImage: `url('${product.imageUrl}')` }}
        >
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-base font-medium">{product.name}</p>
          <p className="text-base font-medium">R${product.price}</p>
        </div>
        <div className="w-full h-auto text-sm text-gray-700 px-1">{product.descricao}</div>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={handleProductClick}
          className="invisible opacity-0 transition-all duration-500 m-5 group-hover:visible group-hover:opacity-100"
        >
          Adicionar ao carrinho
        </CustomButton>
      </div>

      
    </div>
  );
};

