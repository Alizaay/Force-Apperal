import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ContactFAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#ddd] py-[16px]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-[12px] font-black uppercase text-black">
          {item.question}
        </span>

        <FiChevronDown
          className={`text-[14px] transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <p className="text-[12px] leading-[1.7] text-[#666] mt-[10px]">
          {item.answer}
        </p>
      )}
    </div>
  );
};

export default ContactFAQItem;