import { useState } from "react";

const ProductTabs = ({ product }) => {
  const tabs = product.tabs
    ? product.tabs
    : {
        Description: product.description || "",
        Specifications:
          typeof product.specifications === "string"
            ? product.specifications
            : Object.entries(product.specifications || {})
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n"),
        "Fabric Details":
          typeof product.fabricDetails === "string"
            ? product.fabricDetails
            : Object.entries(product.fabricDetails || {})
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n"),
        Customization:
          Array.isArray(product.customization)
            ? product.customization.join(", ")
            : String(product.customization || ""),
      };

  const tabKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabKeys[0] || "Description");

  return (
    <div style={{ marginTop: "48px", paddingTop: "8px", borderTop: "1px solid #eee" }}>
      <div style={{ borderBottom: "1px solid #d8d2ca" }}>
        <div style={{ display: "flex", gap: "32px", overflowX: "auto", padding: "8px 0" }}>
          {tabKeys.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 4px",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #e1811f" : "2px solid transparent",
                color: activeTab === tab ? "#e1811f" : "#666",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                marginBottom: "-1px",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: "24px", maxWidth: "900px" }}>
        <p style={{
          fontSize: "14px",
          lineHeight: 1.9,
          color: "#444",
          margin: 0,
          whiteSpace: "pre-line",
        }}>
          {tabs[activeTab]}
        </p>
      </div>
    </div>
  );
};

export default ProductTabs;
