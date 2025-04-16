import products from "../../data/products";
import ProductItem from "../productItem/ProductItem";


export default function Products () {
  return (
    <div className="grid grid-cols-4 gap-y-6 p-10">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
