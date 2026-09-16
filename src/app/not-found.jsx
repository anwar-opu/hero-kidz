import Link from "next/link";
import React from "react";
import { TbError404 } from "react-icons/tb";

const Error404 = () => {
  return (
    <div className="flex flex-col  justify-center items-center gap-5">
      <TbError404 size={100} className="text-primary" />
      <h2 className="text-4xl text-center font-bold">Page Not Found</h2>
      <Link href={"/"} className="btn btn-primary ">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
