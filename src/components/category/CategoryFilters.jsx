import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const filterGroups = [
  {
    title: "Product Type",
    options: ["Polo Boys & Girls", "Sports Shoes", "Sports Pants", "Fleece", "Rugby", "Jackets"],
  },
  {
    title: "Size",
    options: ["XS", "S", "M", "L", "XL", "XXL", "2XL", "3XL"],
  },
  {
    title: "Gender",
    options: ["Male", "Female", "Unisex", "Kids"],
  },
  {
    title: "Fabric",
    options: ["Cotton", "Polyester", "Nylon", "Spandex"],
  },
  {
    title: "Color",
    options: ["Black", "White", "Blue", "Red", "Green"],
  },
];

const CategoryFilters = () => {
  const [openGroups, setOpenGroups] = useState({
    "Product Type": true,
    Size: true,
    Gender: false,
    Fabric: false,
    Color: false,
  });

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside style={{ width: "100%", maxWidth: "220px", flexShrink: 0 }} className="category-filters">
      <h3 style={{
        fontSize: "13px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: 600,
        color: "#444",
        marginBottom: "24px",
        marginTop: 0,
      }}>
        Filters
      </h3>

      {filterGroups.map((group) => (
        <div
          key={group.title}
          style={{
            borderBottom: "1px solid #e0dbd4",
            paddingBottom: "16px",
            marginBottom: "16px",
          }}
        >
          <button
            type="button"
            onClick={() => toggleGroup(group.title)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 12px 0",
            }}
          >
            <span style={{
              fontSize: "12px",
              textTransform: "uppercase",
              fontWeight: 900,
              letterSpacing: "0.5px",
              color: "#111",
            }}>
              {group.title}
            </span>
            <FiChevronDown
              style={{
                fontSize: "14px",
                transition: "transform 0.3s",
                transform: openGroups[group.title] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {openGroups[group.title] && (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {group.options.map((option) => (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "#555",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "15px", height: "15px", accentColor: "#e1811f", cursor: "pointer" }}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default CategoryFilters;
