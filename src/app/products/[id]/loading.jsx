const ProductDetailsSkeleton = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="skeleton h-8 w-32 mb-6"></div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="skeleton h-100 w-full rounded-xl"></div>

        {/* Information */}
        <div className="space-y-4">
          {/* Title */}
          <div className="skeleton h-8 w-4/5"></div>

          {/* Bangla title */}
          <div className="skeleton h-5 w-3/5"></div>

          {/* Rating */}
          <div className="flex gap-2">
            <div className="skeleton h-5 w-12"></div>
            <div className="skeleton h-5 w-24"></div>
            <div className="skeleton h-5 w-20"></div>
          </div>

          {/* Price */}
          <div className="flex gap-3 mt-5">
            <div className="skeleton h-9 w-24"></div>
            <div className="skeleton h-6 w-20"></div>
          </div>

          {/* Features */}
          <div className="space-y-3 mt-6">
            <div className="skeleton h-6 w-40"></div>
            <div className="skeleton h-4 w-4/5"></div>
            <div className="skeleton h-4 w-3/5"></div>
            <div className="skeleton h-4 w-4/5"></div>
            <div className="skeleton h-4 w-2/3"></div>
          </div>

          {/* Button */}
          <div className="skeleton h-12 w-full mt-6"></div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 space-y-4">
        <div className="skeleton h-7 w-32"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-11/12"></div>
        <div className="skeleton h-4 w-4/5"></div>
      </div>

      {/* Q&A */}
      <div className="mt-12 space-y-4">
        <div className="skeleton h-7 w-72"></div>
        <div className="skeleton h-14 w-full"></div>
        <div className="skeleton h-14 w-full"></div>
      </div>
    </main>
  );
};

export default ProductDetailsSkeleton;