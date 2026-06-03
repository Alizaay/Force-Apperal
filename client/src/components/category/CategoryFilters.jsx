import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const filterGroups = [
  {
    title: "Product Type",
    options: [
      "Polo Boys & Girls",
      "Sports Shoes",
      "Sports Pants",
      "Fleece",
      "Rugby",
      "Jackets",
    ],
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
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      className="
        w-full
        lg:w-[210px]
        shrink-0

        pl-[28px]
        sm:pl-[36px]
        lg:pl-[18px]

        pr-[18px]
      "
    >
      <h3
        className="
          text-[14px]
          uppercase
          tracking-[3px]
          font-medium
          text-[#444]
          mb-[24px]
        "
      >
        Filters
      </h3>

      {filterGroups.map((group) => (
        <div
          key={group.title}
          className="
            border-b
            border-[#d8d2ca]
            pb-[12px]
            mb-[12px]
          "
        >
          <button
            type="button"
            onClick={() => toggleGroup(group.title)}
            className="
              w-full
              flex
              items-center
              justify-between
              mb-[10px]
            "
          >
            <span
              className="
                text-[13px]
                uppercase
                font-black
                tracking-[0.4px]
                text-black
              "
            >
              {group.title}
            </span>

            <FiChevronDown
              className={`
                text-[14px]
                transition-transform
                duration-300
                ${openGroups[group.title] ? "rotate-180" : "rotate-0"}
              `}
            />
          </button>

          {openGroups[group.title] && (
            <div className="space-y-[8px] pl-[2px]">
              {group.options.map((option) => (
                <label
                  key={option}
                  className="
                    flex
                    items-center
                    gap-[10px]
                    text-[13px]
                    leading-none
                    text-[#555]
                    cursor-pointer
                  "
                >
                  <input
                    type="checkbox"
                    className="
                      w-[15px]
                      h-[15px]
                      accent-[#e1811f]
                      cursor-pointer
                    "
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