import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";

import { getSingleProducts } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getSingleProducts(id);

  if (!product?._id) {
    return {
      title: "Product Not Found | Hero Kidz",
      description: "The requested product could not be found.",
    };
  }

  const description =
    product.description?.replace(/\s+/g, " ").slice(0, 160) ||
    `Buy ${product.title} from Hero Kidz.`;

  const productUrl = `/products/${product._id.toString()}`;

  return {
    title: `${product.title} - Educational Toy`,

    description,

    openGraph: {
      type: "website",

      title: `${product.title} | Hero Kidz`,

      description,

      url: productUrl,

      siteName: "Hero Kidz",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: `${product.title} | Hero Kidz`,

      description,

      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProducts(id);

  if (!product?._id) {
    notFound();
  }

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link href="/products" className="btn btn-ghost mb-6 gap-2">
        <FaArrowLeft />
        Back to Products
      </Link>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="rounded-2xl bg-base-200 p-6">
          <div className="relative h-100 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {product.discount > 0 && (
              <span className="badge badge-error absolute top-3 right-3 text-white text-sm">
                -{product.discount}%
              </span>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>

          <p className="text-lg text-base-content/60 mt-2">{product.bangla}</p>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex items-center gap-1">
              <FaStar className="text-warning" />
              <span className="font-semibold">{product.ratings}</span>
            </div>

            <span className="text-base-content/60">
              ({product.reviews} reviews)
            </span>

            <span className="text-base-content/60">{product.sold} sold</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-4xl font-bold text-primary">
              ৳{discountedPrice.toFixed(0)}
            </span>

            {product.discount > 0 && (
              <span className="text-lg line-through text-base-content/50">
                ৳{product.price}
              </span>
            )}
          </div>

          {/* Product Info */}
          {product.info?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-3">Product Features</h2>

              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {product.info.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart */}
          <CartButton product={product}></CartButton>
        </div>
      </div>

      {/* Description */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>

        <div className="bg-base-200 rounded-xl p-6">
          <p className="whitespace-pre-line leading-8 text-base-content/80">
            {product.description}
          </p>
        </div>
      </section>

      {/* Q&A */}
      {product.qna?.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {product.qna.map((item, index) => (
              <div key={index} className="collapse collapse-arrow bg-base-200">
                <input
                  type="radio"
                  name="product-qna"
                  defaultChecked={index === 0}
                />

                <div className="collapse-title font-semibold">
                  {item.question}
                </div>

                <div className="collapse-content">
                  <p className="text-base-content/70">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
