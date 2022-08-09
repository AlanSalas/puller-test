import { useEffect } from "react";
import CardProduct from "components/CardProduct";
import useStore from "store/useStore";
import "./style.css";

const ListProduct = () => {
  const products = useStore((state) => state.products);
  const category = useStore((state) => state.filterCategory);
  const search = useStore((state) => state.querySearchProduct);
  const fetchProducts = useStore((state) => state.fetchProducts);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  return (
    <>
      {loading && <p className="color-tertiary font-lg bold">Loading...</p>}
      {products.length > 0 && !loading && (
        <div className="list-product">
          {products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))}
        </div>
      )}
      {products.length === 0 && !loading && <p className="color-tertiary font-lg bold">No products found...</p>}
    </>
  );
};

export default ListProduct;
