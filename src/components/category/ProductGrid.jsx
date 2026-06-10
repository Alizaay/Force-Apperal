import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      {/* Sort dropdown */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <select
          style={{
            height: "36px",
            padding: "0 14px",
            fontSize: "12px",
            border: "1px solid #d8d2ca",
            borderRadius: "4px",
            backgroundColor: "#fff",
            outline: "none",
            cursor: "pointer",
            color: "#333",
          }}
        >
          <option>Features</option>
          <option>Newest</option>
          <option>Popular</option>
        </select>
      </div>

      {/* Product cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
        className="product-grid"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style>{`
        .product-card {
          background-color: #f5f3ef;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 130px;
          border: 1px solid #efe7dd;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.06);
          border-color: #e8ddd0;
        }
        .product-card-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #e1811f;
          border-radius: 4px;
          padding: 8px 18px;
          font-size: 13px;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .product-card-btn:hover {
          background-color: #d07018;
          box-shadow: 0 4px 12px rgba(225, 129, 31, 0.35);
        }
        .product-card-image-wrap {
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
        }
        .product-card-image {
          display: block;
        }
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
          .product-card {
            flex-direction: column !important;
            align-items: stretch !important;
            min-height: auto !important;
          }
          .product-card-image-wrap {
            width: 100% !important;
            height: 200px !important;
            margin-top: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;
