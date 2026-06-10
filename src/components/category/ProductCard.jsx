import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* LEFT — Text + Button */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <h3 style={{
            fontSize: "15px",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#111",
            lineHeight: 1.25,
            marginBottom: "6px",
            marginTop: 0,
          }}>
            {product.title}
          </h3>
          <p style={{ fontSize: "12px", color: "#777", margin: "0 0 3px 0" }}>{product.moq}</p>
          <p style={{ fontSize: "12px", color: "#777", margin: "0 0 14px 0" }}>{product.desc}</p>
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="product-card-btn"
        >
          Quick Inquiry
        </Link>
      </div>

      {/* RIGHT — Image */}
      <Link
        to={`/product/${product.id}`}
        className="product-card-image-wrap"
        style={{
          width: "110px",
          height: "140px",
          borderRadius: "6px",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "4px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width={236}
          height={302}
          loading="lazy"
          decoding="async"
          className="product-card-image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Link>
    </div>
  );
};

export default ProductCard;
