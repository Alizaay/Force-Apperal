import { Link } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-[58px]">
      <h2
        className="
          text-[26px]
          md:text-[30px]

          font-black
          uppercase

          tracking-[-1px]

          mb-[26px]

          text-black
        "
      >
        Related Products
      </h2>

      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="
              bg-[#f3efea]
              rounded-[10px]
              overflow-hidden
              group

              transition-all
              duration-300

              hover:shadow-md
            "
          >
            <div className="w-full h-[155px] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="
                  w-full
                  h-full
                  object-cover

                  transition-all
                  duration-300

                  group-hover:scale-[1.04]
                "
              />
            </div>

            <div
              className="
                p-[16px]

                flex
                justify-between
                items-center

                gap-[10px]
              "
            >
              <p
                className="
                  text-[12px]

                  font-black
                  uppercase

                  text-black

                  leading-[1.3]
                "
              >
                {product.title}
              </p>

              <span className="text-[#e1811f] text-[20px] leading-none">
                ›
              </span>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};
export default RelatedProducts;