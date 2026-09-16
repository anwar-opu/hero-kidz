import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <figure className="relative h-56 bg-base-200">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {product.discount > 0 && (
          <span className="badge badge-error absolute top-3 right-3 text-white">
            -{product.discount}%
          </span>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2 min-h-12">
          {product.title}
        </h2>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span className="font-medium">{product.ratings}</span>
          </div>

          <span className="text-base-content/60">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Sold */}
        <p className="text-sm text-base-content/60">{product.sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice.toFixed(0)}
          </span>

          {product.discount > 0 && (
            <span className="text-sm line-through text-base-content/50">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="card-actions grid grid-cols-2 gap-2 mt-2">
          {/* View Details */}
          <Link
            href={`/products/${product._id}`}
            className="btn btn-outline btn-sm"
          >
            View Details
          </Link>

          {/* Add to Cart */}
          <button className="btn btn-primary btn-sm">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
