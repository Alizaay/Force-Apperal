import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
  return (
    <div style={{ width: "100%", paddingTop: "8px" }}>
      <p style={{
        color: "#e1811f",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginBottom: "12px",
        marginTop: 0,
        fontWeight: 600,
      }}>
        In Production
      </p>

      <h1 className="product-info-title" style={{
        fontSize: "42px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 1,
        letterSpacing: "-1px",
        color: "#111",
        marginBottom: "16px",
        marginTop: 0,
      }}>
        {product.title}
      </h1>

      <p style={{
        fontSize: "15px",
        lineHeight: 1.65,
        color: "#777",
        maxWidth: "440px",
        marginBottom: "28px",
        marginTop: 0,
      }}>
        {product.shortDescription}
      </p>

      {/* Info grid */}
      <div className="product-info-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px 40px",
        marginBottom: "24px",
        maxWidth: "480px",
      }}>
        {product.info.map((item, index) => (
          <div key={index}>
            <p style={{ fontSize: "13px", color: "#777", margin: "0 0 4px 0" }}>{item.label}</p>
            <h4 style={{ fontSize: "15px", fontWeight: 900, textTransform: "uppercase", color: "#111", margin: 0 }}>
              {item.value}
            </h4>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "13px", color: "#777", margin: "0 0 10px 0" }}>Available Colors</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {product.colors.map((color, index) => (
            <span
              key={index}
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                backgroundColor: color,
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </div>

      {/* Customization tags */}
      <div style={{ marginBottom: "32px" }}>
        <p style={{ fontSize: "13px", color: "#777", margin: "0 0 10px 0" }}>Customization</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", maxWidth: "420px" }}>
          {product.customization.map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid #111",
                borderRadius: "4px",
                padding: "7px 12px",
                fontSize: "11px",
                textTransform: "uppercase",
                color: "#111",
              }}
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
        <Link
          to="/contact"
          className="product-primary-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            minWidth: "180px",
            padding: "0 24px",
            borderRadius: "6px",
            backgroundColor: "#e1811f",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
        >
          Request Quote
        </Link>

        <button
          type="button"
          className="product-secondary-btn"
          style={{
            minHeight: "46px",
            padding: "12px 24px",
            borderRadius: "6px",
            border: "1px solid #d6d0c8",
            backgroundColor: "transparent",
            color: "#111",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
          }}
        >
          Download Catalogue
        </button>
      </div>

      <style>{`
        .product-primary-btn:hover {
          background-color: #d07018 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(225, 129, 31, 0.35);
        }
        .product-secondary-btn:hover {
          background-color: #111 !important;
          color: #fff !important;
          border-color: #111 !important;
        }
        @media (max-width: 640px) {
          .product-info-title {
            font-size: 28px !important;
          }
          .product-info-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .product-primary-btn,
          .product-secondary-btn {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductInfo;
