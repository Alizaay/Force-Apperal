import { Link } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-[52px]">
      <h2
        className="
          text-[26px]
          md:text-[28px]

          font-black
          uppercase

          tracking-[-1px]

          mb-[24px]

          text-black
        "
      >
        Related Products
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4

          gap-[14px]
        "
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="
              bg-[#f3efea]

              rounded-[8px]

              overflow-hidden

              group

              transition-all
              duration-300

              hover:shadow-md
            "
          >
            <div className="w-full h-[130px] overflow-hidden">
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
                p-[10px]

                flex
                justify-between
                items-center

                gap-[10px]
              "
            >
              <p
                className="
                  text-[9px]

                  font-black
                  uppercase

                  text-black

                  leading-[1.3]
                "
              >
                {product.title}
              </p>

              <span className="text-[#e1811f] text-[18px] leading-none">
                ›
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;