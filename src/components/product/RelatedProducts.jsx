import { Link } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  return (
    <div style={{ marginTop: "56px", paddingTop: "8px" }}>
      <h2 style={{
        fontSize: "28px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "-0.5px",
        marginBottom: "24px",
        marginTop: 0,
        color: "#111",
      }}>
        Related Products
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }} className="related-products-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="related-product-card"
            style={{
              backgroundColor: "#f3efea",
              borderRadius: "10px",
              overflow: "hidden",
              textDecoration: "none",
              display: "block",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
              <img
                src={product.image}
                alt={product.title}
                className="related-product-img"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
              />
            </div>

            <div style={{
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
            }}>
              <p style={{
                fontSize: "12px",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#111",
                lineHeight: 1.3,
                margin: 0,
              }}>
                {product.title}
              </p>
              <span style={{ color: "#e1811f", fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>›</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .related-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }
        .related-product-card:hover .related-product-img {
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .related-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .related-products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RelatedProducts;
