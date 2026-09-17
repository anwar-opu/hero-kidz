"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialButton = () => {
  const params = useSearchParams();
  //   console.log(params.get("callbackUrl") || "/");

  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (result?.error) {
      Swal.fire("error", result.error, "error");
    } else if (result?.url) {
      window.location.href = result.url; // manually redirect to Google
    }
  };

  return (
    <div>
      <button onClick={handleSignIn} className="btn btn-outline w-full">
        <FaGoogle></FaGoogle>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialButton;
