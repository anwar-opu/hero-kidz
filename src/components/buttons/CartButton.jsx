"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const addToCart = () => {
    if (isLogin) {
      alert(product._id);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button onClick={addToCart} className="btn btn-primary btn-lg mt-8">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
