import { useState } from "react";

const ProductTabs = ({ product }) => {
  // Use product.tabs if available, otherwise build from individual fields
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
          typeof product.customization === "string"
            ? product.customization
            : Array.isArray(product.customization)
            ? product.customization.join(", ")
            : Object.entries(product.customization || {})
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n"),
      };

  const tabKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabKeys[0] || "Description");

  return (
    <div className="mt-[48px]">
      {/* TAB NAVIGATION */}
      <div className="border-b border-[#d8d2ca]">
        <div className="flex gap-[28px] overflow-x-auto py-[12px]">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-[10px] px-[6px]
                text-[12px]
                uppercase
                tracking-[1.2px]
                font-semibold
                whitespace-nowrap
                transition-all
                duration-300
                ${activeTab === tab ? "text-[#e1811f] border-b-2 border-[#e1811f]" : "text-[#666]"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="pt-[24px] max-w-[950px] mx-auto">
        <p
          className="
            text-[13px]
            leading-[2]

            text-[#444]

            whitespace-pre-line
          "
        >
          {tabs[activeTab]}
        </p>
      </div>
    </div>
  );
};

export default ProductTabs;