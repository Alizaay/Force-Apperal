import { useNavigate } from "react-router-dom";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[22px] lg:pt-[48px]">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
          text-[24px]
          text-black

          mb-[24px]

          transition-all
          duration-300

          hover:text-[#e1811f]
        "
      >
        ←
      </button>

      {/* MAIN IMAGE */}
      <div className="w-full h-[440px] lg:h-[540px] rounded-[24px] overflow-hidden bg-[#f3efea] shadow-sm">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>

      {/* THUMBNAILS */}
      <div className="flex items-center gap-3 mt-[18px]">
        {product.gallery.map((image, index) => (
          <button
            key={index}
            className="h-[78px] w-[78px] rounded-[10px] overflow-hidden bg-[#f3efea] border border-transparent transition-all duration-300 hover:border-[#e1811f] flex-shrink-0"
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;