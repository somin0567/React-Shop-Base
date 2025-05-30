import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchProducts } from "../../store/productsSlice";
import ProductsLoad from "../products/ProductsLoad";
import { toCurrencyFormat } from "../../helpers/helpers";

type ItemListProps = {
  category: "fashion" | "accessory" | "digital";
  limit?: number;
  scrollable?: boolean;
};

const categoryMap: Record<ItemListProps["category"], string[]> = {
  fashion: ["men's clothing", "women's clothing"],
  accessory: ["jewelery"],
  digital: ["electronics"],
};

const ItemList = ({
  category,
  limit,
  scrollable,
}: ItemListProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const skeletonLimit = typeof limit === "number" ? limit : 8;

  if (loading) return <ProductsLoad limit={skeletonLimit} />;

  const filterCategories = categoryMap[category];
  const filtered = Array.isArray(products)
  ? products.filter((item) => filterCategories.includes(item.category))
  : [];
  const items = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

  const gridClass = scrollable
    ? "flex overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 item_list md:overflow-x-visible md:flex-none"
    : "grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list";

  return (
    <div className={gridClass} data-scroll={!scrollable}>
      {items.map((item) => (
        <a
          href={`/product/${item.id}`}
          key={item.id}
          className={
            "card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal " +
            (scrollable ? "flex-shrink-0 w-60 md:w-auto" : "w-full")
          }
        >
          <figure className="flex h-80 bg-white overflow-hidden">
            <img
              src={item.image}
              alt="상품 이미지"
              className="max-w-[50%] max-h-[50%] transition-transform duration-300"
            />
          </figure>
          <div className="card-body bg-gray-100 dark:bg-gray-700">
            <p className="card-title text-base">{item.title}</p>
            <p className="text-base">{toCurrencyFormat(item.price)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ItemList;
