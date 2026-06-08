import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ContactFAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        border-b
        border-[#bdb7af]

        py-[18px]
      "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full

          flex
          items-center
          justify-between

          text-left
        "
      >
        <span
          className="
            text-[13px]
            md:text-[14px]

            font-black
            uppercase

            text-black

            pr-[20px]
          "
        >
          {item.question}
        </span>

        <FiChevronDown
          className={`
            text-[15px]
            text-black

            flex-shrink-0

            transition-transform
            duration-300

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300

          ${
            open
              ? "max-h-[180px] pt-[12px]"
              : "max-h-0"
          }
        `}
      >
        <p
          className="
            text-[13px]

            leading-[1.8]

            text-[#666]

            max-w-[1000px]
          "
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default ContactFAQItem;