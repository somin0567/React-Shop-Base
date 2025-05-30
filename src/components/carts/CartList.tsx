import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, addToCart, removeFromCart } from "../../store/cart";
import { productsList } from "../../store/products";
import CartView from "./CartView";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  count: number;
}

const CartList = (): JSX.Element => {
  const [cart, setCart] = useRecoilState(cartState);
  const products = useRecoilValue(productsList);

  const items = Object.entries(cart.items || {})
    .map(([id, item]) => {
      const product = products.find((p) => p.id.toString() === id);
      return product
        ? {
            id: product.id.toString(),
            title: product.title,
            price: product.price,
            image: product.image,
            count: item.count,
          }
        : null;
    })
    .filter((item): item is CartItem => item !== null);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const addToCartHandler = (id: string) => {
    setCart(addToCart(cart, id));
  };

  const removeFromCartHandler = (id: string) => {
    setCart(removeFromCart(cart, id));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <CartView
        items={items}
        totalPrice={totalPrice}
        onAdd={addToCartHandler}
        onRemove={removeFromCartHandler}
      />
    </div>
  );
};

export default CartList;
