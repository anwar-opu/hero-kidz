import Logo from "@/components/layouts/Logo";
import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col  justify-center items-center gap-5">
      <h2 className="text-4xl animate-pulse">Loading...</h2>
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;
