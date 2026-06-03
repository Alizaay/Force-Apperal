import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        bg-[#f5f3ef]
        rounded-[8px]

        p-[12px]

        flex
        items-center
        justify-between

        gap-[12px]

        min-h-[125px]

        border
        border-[#efe7dd]
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-0">
        <Link to={`/product/${product.id}`} className="block">
          <h3
            className="
              text-[16px]
              font-black
              uppercase
              text-black
              leading-[1.25]
              mb-[7px]
            "
          >
            {product.title}
          </h3>

          <p className="text-[12px] text-[#777] mb-[3px]">
            {product.moq}
          </p>

          <p className="text-[12px] text-[#777] mb-[12px]">
            {product.desc}
          </p>
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="
            inline-flex
            items-center
            justify-center

            bg-[#e1811f]
            rounded-[4px]

            px-[12px]
            py-[6px]

            text-[12px]
            text-black

            transition-all
            duration-300

            hover:bg-[#d07018]
          "
        >
          Quick Inquiry
        </Link>
      </div>

      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="
          w-[78px]
          h-[102px]

          rounded-[6px]
          overflow-hidden

          shrink-0
        "
      >
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </Link>
    </div>
  );
};

export default ProductCard;