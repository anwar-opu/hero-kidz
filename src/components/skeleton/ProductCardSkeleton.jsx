const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      {/* Image Skeleton */}
      <div className="h-56 bg-base-200 animate-pulse" />

      <div className="card-body p-4">
        {/* Title */}
        <div className="skeleton h-5 w-4/5" />
        <div className="skeleton h-5 w-3/5" />

        {/* Rating */}
        <div className="flex gap-2 mt-2">
          <div className="skeleton h-4 w-12" />
          <div className="skeleton h-4 w-24" />
        </div>

        {/* Sold */}
        <div className="skeleton h-4 w-20 mt-1" />

        {/* Price */}
        <div className="flex gap-2 mt-2">
          <div className="skeleton h-6 w-20" />
          <div className="skeleton h-4 w-14" />
        </div>

        {/* Button */}
        <div className="skeleton h-8 w-full mt-2" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;