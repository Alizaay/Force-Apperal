import { useNavigate } from "react-router-dom";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
          text-[24px]
          text-black

          mb-[20px]

          transition-all
          duration-300

          hover:text-[#e1811f]
        "
      >
        ←
      </button>

      {/* MAIN IMAGE */}
      <div
        className="
          w-full

          h-[350px]
          md:h-[420px]

          rounded-[20px]
          overflow-hidden

          bg-[#f3efea]
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
      </div>

      {/* THUMBNAILS */}
      <div
        className="
          grid
          grid-cols-4

          gap-[10px]

          mt-[14px]
        "
      >
        {product.gallery.map((image, index) => (
          <div
            key={index}
            className="
              h-[78px]
              md:h-[85px]

              rounded-[10px]
              overflow-hidden

              bg-[#f3efea]

              cursor-pointer

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;