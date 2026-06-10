import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const mainImage = product.gallery?.[activeIndex] || product.image;

  return (
    <div style={{ width: "100%" }}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "22px",
          color: "#111",
          marginBottom: "20px",
          padding: 0,
          display: "flex",
          alignItems: "center",
          transition: "color 0.2s",
        }}
        className="gallery-back-btn"
        aria-label="Go back"
      >
        <FiArrowLeft />
      </button>

      <div className="gallery-main-image" style={{
        width: "100%",
        height: "480px",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#f3efea",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}>
        <img
          src={mainImage}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
        {(product.gallery || [product.image]).map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`gallery-thumb ${activeIndex === index ? "gallery-thumb-active" : ""}`}
            style={{
              height: "72px",
              width: "72px",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f3efea",
              border: activeIndex === index ? "2px solid #e1811f" : "2px solid transparent",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
              transition: "border-color 0.2s, transform 0.2s",
            }}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </button>
        ))}
      </div>

      <style>{`
        .gallery-back-btn:hover { color: #e1811f; }
        .gallery-thumb:hover { transform: scale(1.04); border-color: #e1811f !important; }
        @media (max-width: 640px) {
          .gallery-main-image {
            height: 320px !important;
            border-radius: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGallery;
