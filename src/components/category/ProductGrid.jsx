import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full min-w-0">
      {/* TOP BAR */}
      <div className="flex justify-end mb-[22px]">
        <select
          className="h-[36px] px-[14px] text-[12px] border border-[#d8d2ca] rounded-[4px] bg-white outline-none"
        >
          <option>Features</option>
          <option>Newest</option>
          <option>Popular</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-x-[24px]
          gap-y-[24px]
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;