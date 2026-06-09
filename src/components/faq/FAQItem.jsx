import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#9f9a94]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full

          flex
          items-center
          justify-between

          text-left

          py-[22px]
        "
      >
        <h3
          className="
            text-[18px]
            md:text-[16px]

            font-black
            uppercase

            text-black

            pr-[20px]
          "
        >
          {item.question}
        </h3>

        <FiChevronDown
          className={`
            text-[16px]
            text-black

            flex-shrink-0

            transition-transform
            duration-300

            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden

          transition-all
          duration-300

          ${open ? "max-h-[250px] pb-[18px]" : "max-h-0"}
        `}
      >
        <p
          className="
            text-[14px]

            leading-[2.65]

            text-black

            max-w-[900px]
          "
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;