import BreadCrumb from "../common/Breadcrumb";
import Rating from "../common/Rating";
import { IProduct } from "../../store/productsSlice";
import { toCurrencyFormat } from "../../helpers/helpers";

interface ProductProps {
  product: IProduct;
  onAddToCart?: () => void;
}

const ProductsView = ({ product, onAddToCart }: ProductProps) => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={product.category} crumb={product.title} />
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view-image">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-72"
          />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="flex items-center mt-3">
            <Rating rate={product.rating?.rate} count={product.rating?.count} />
          </div>
          <p className="mt-2 mb-4 text-3xl">
            {toCurrencyFormat(product.price)}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={onAddToCart}>
              장바구니에 담기
            </button>
            <a className="btn btn-outline ml-1" href="/cart">
              장바구니로 이동
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsView;
