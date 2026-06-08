const ProductInfo = ({ product }) => {
  return (
    <div className="w-full pt-[28px] lg:pt-[56px]">
      {/* STATUS */}
      <p className="text-[#e1811f] text-[9px] uppercase tracking-[2px] mb-[12px]">In Production</p>

      {/* TITLE */}
      <h1 className="text-[34px] md:text-[40px] lg:text-[46px] font-black uppercase leading-[0.95] tracking-[-1.2px] text-black mb-[14px]">
        {product.title}
      </h1>

      {/* SHORT DESCRIPTION */}
      <p className="text-[16px] leading-[1.65] text-[#777] max-w-[420px] mb-[32px]">
        {product.shortDescription}
      </p>

      {/* INFO GRID */}
      <div className="grid grid-cols-2 gap-y-[18px] gap-x-[48px] mb-[26px] max-w-[620px]">
        {product.info.map((item, index) => (
          <div key={index}>
            <p className="text-[14px] text-[#777] mb-[5px]">{item.label}</p>

            <h4 className="text-[16px] font-black uppercase text-black">{item.value}</h4>
          </div>
        ))}
      </div>

      {/* COLORS */}
      <div className="mb-[22px]">
        <p className="text-[14px] text-[#777] mb-[8px]">Available Colors</p>

        <div className="flex items-center gap-[10px]">
          {product.colors.map((color, index) => (
            <span key={index} className="w-[20px] h-[20px] rounded-full border border-[#bbb]" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>

      {/* CUSTOMIZATION */}
      <div className="mb-[30px]">
        <p className="text-[14px] text-[#777] mb-[9px]">Customization</p>

        <div className="flex flex-wrap gap-[8px] max-w-[390px]">
          {product.customization.map((item) => (
            <span key={item} className="border border-black rounded-[4px] px-[12px] py-[7px] text-[12px] uppercase text-black">
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-[28px] inline-gap-row">
        <button className="py-[12px] min-h-[46px] px-[26px] rounded-[6px] bg-[#e1811f] text-white text-[11px] uppercase tracking-[0.8px] font-semibold transition-all duration-300 hover:bg-[#d07018]">
          Request Quote
        </button>

        <button className="py-[12px] min-h-[46px] px-[26px] rounded-[6px] border border-[#d6d0c8] text-black text-[11px] uppercase tracking-[0.8px] font-semibold transition-all duration-300 hover:bg-black hover:text-white">
          Download Catalogue
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;