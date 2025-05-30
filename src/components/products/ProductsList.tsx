import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../store";
import { fetchProducts } from "../../store/productsSlice";
import ProductsView from "./ProductsView";
import ProductsViewLoad from "./ProductsViewLoad";
import { cartState, addToCart } from "../../store/cart";
import { useRecoilState } from "recoil";

const ProductsList = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading } = useSelector(
    (state: RootState) => state.products,
  );

  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (productId: number) => {
    setCart(addToCart(cart, productId.toString()));
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <ProductsViewLoad />;

  if (id) {
    const product = products.find((item) => item.id === Number(id));
    if (!product) return <div>제품을 찾을 수 없습니다.</div>;
    return (
      <ProductsView
        product={product}
        onAddToCart={() => handleAddToCart(product.id)}
      />
    );
  }
};

export default ProductsList;
