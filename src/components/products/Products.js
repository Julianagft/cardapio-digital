import products from "../../data/products";
import ProductItem from "../productItem/ProductItem";


export default function Products () {
  return (
    <div className="grid grid-cols-4 justify-start p-10 gap-y-5 md:flex md:flex-col">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
