const ProductInfo = ({ product }) => {
  return (
    <div
      className="
        w-full
        pt-[45px]
      "
    >
      {/* STATUS */}
      <p
        className="
          text-[#e1811f]
          text-[9px]
          uppercase
          tracking-[2px]
          mb-[10px]
        "
      >
        In Production
      </p>

      {/* TITLE */}
      <h1
        className="
          text-[30px]
          md:text-[34px]

          font-black
          uppercase

          leading-[1.05]
          tracking-[-1px]

          text-black

          mb-[14px]
        "
      >
        {product.title}
      </h1>

      {/* SHORT DESCRIPTION */}
      <p
        className="
          text-[11px]
          leading-[1.7]
          text-[#777]

          max-w-[360px]

          mb-[24px]
        "
      >
        {product.shortDescription}
      </p>

      {/* INFO GRID */}
      <div
        className="
          grid
          grid-cols-2

          gap-y-[16px]
          gap-x-[46px]

          mb-[24px]
          max-w-[390px]
        "
      >
        {product.info.map((item, index) => (
          <div key={index}>
            <p
              className="
                text-[9px]
                text-[#777]
                mb-[5px]
              "
            >
              {item.label}
            </p>

            <h4
              className="
                text-[12px]
                font-black
                uppercase
                text-black
              "
            >
              {item.value}
            </h4>
          </div>
        ))}
      </div>

      {/* COLORS */}
      <div className="mb-[20px]">
        <p
          className="
            text-[9px]
            text-[#777]
            mb-[9px]
          "
        >
          Available Colors
        </p>

        <div className="flex items-center gap-[9px]">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="
                w-[18px]
                h-[18px]

                rounded-full

                border
                border-[#999]
              "
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* CUSTOMIZATION */}
      <div className="mb-[28px]">
        <p
          className="
            text-[9px]
            text-[#777]
            mb-[9px]
          "
        >
          Customization
        </p>

        <div
          className="
            flex
            flex-wrap

            gap-[8px]

            max-w-[380px]
          "
        >
          {product.customization.map((item) => (
            <span
              key={item}
              className="
                border
                border-black

                rounded-[4px]

                px-[10px]
                py-[5px]

                text-[8px]
                uppercase

                text-black
              "
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div
        className="
          flex
          flex-wrap
          gap-[10px]
        "
      >
        <button
          className="
            h-[42px]
            px-[24px]

            rounded-[6px]

            bg-[#e1811f]
            text-white

            text-[10px]
            uppercase
            tracking-[0.8px]
            font-semibold

            transition-all
            duration-300

            hover:bg-[#d07018]
          "
        >
          Request Quote
        </button>

        <button
          className="
            h-[42px]
            px-[24px]

            rounded-[6px]

            border
            border-black

            text-black

            text-[10px]
            uppercase
            tracking-[0.8px]
            font-semibold

            transition-all
            duration-300

            hover:bg-black
            hover:text-white
          "
        >
          Download Catalogue
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;