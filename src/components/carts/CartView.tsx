import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import { toCurrencyFormat } from "../../helpers/helpers";

interface CartViewProps {
  items: {
    id: string;
    title: string;
    price: number;
    image: string;
    count: number;
  }[];
  totalPrice: number;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartView = ({ items, totalPrice, onAdd, onRemove }: CartViewProps) => {
  const isEmpty = items.length === 0;

  return (
    <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {isEmpty ? (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        ) : (
          <div className="lg:flex justify-between mb-20">
            {items.map((item) => (
              <div
                key={item.id}
                className="lg:flex lg:items-center mt-4 px-2 lg:px-0"
              >
                <a href={`/product/${item.id}`}>
                  <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full h-48"
                    />
                  </figure>
                </a>

                <div className="card-body px-1 lg:px-12">
                  <h2 className="card-title">
                    <a className="link link-hover" href={`/product/${item.id}`}>
                      {item.title}
                    </a>
                  </h2>
                  <p className="mt-2 mb-4 text-3xl">
                    {toCurrencyFormat(item.price)}{" "}
                    <span className="text-2xl">
                      ({toCurrencyFormat(item.price)})
                    </span>
                  </p>

                  <div className="card-actions">
                    <div className="btn-group">
                      <button
                        className="btn btn-primary"
                        onClick={() => onRemove(item.id)}
                      >
                        -
                      </button>
                      <button className="btn btn-ghost no-animation">
                        {item.count}
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => onAdd(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">
            총 : {toCurrencyFormat(totalPrice)}
          </span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>
      <Confirm />
    </div>
  );
};

export default CartView;
