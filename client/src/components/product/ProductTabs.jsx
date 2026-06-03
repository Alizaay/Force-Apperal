import { useState } from "react";

const ProductTabs = ({ product }) => {
  const tabs = {
    Description: product.description,

    Specifications: Object.entries(product.specifications || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n"),

    Fabric: Object.entries(product.fabricDetails || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n"),

    Customization: Object.entries(product.customization || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n"),
  };

  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-[44px]">
      {/* TABS */}
      <div className="border-b border-[#d8d2ca]">
        <div className="flex gap-[34px] overflow-x-auto">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                pb-[12px]

                text-[10px]
                uppercase

                tracking-[1px]

                font-semibold

                whitespace-nowrap

                transition-all
                duration-300

                ${
                  activeTab === tab
                    ? "text-[#e1811f] border-b-2 border-[#e1811f]"
                    : "text-black"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          mt-[20px]

          max-w-[850px]

          bg-[#faf8f5]

          rounded-[12px]

          p-[22px]
        "
      >
        <p
          className="
            text-[13px]

            leading-[1.9]

            text-black

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