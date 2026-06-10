import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #9f9a94" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className="faq-item-btn"
      >
        <h3 style={{
          fontSize: "16px",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "#111",
          paddingRight: "20px",
          margin: 0,
          lineHeight: 1.3,
        }} className="faq-item-question">
          {item.question}
        </h3>

        <FiChevronDown
          style={{
            fontSize: "16px",
            color: "#111",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease, padding 0.3s ease",
          maxHeight: open ? "600px" : "0",
          paddingBottom: open ? "18px" : "0",
        }}
      >
        <p style={{
          fontSize: "14px",
          lineHeight: 1.8,
          color: "#111",
          maxWidth: "900px",
          margin: 0,
        }}>
          {item.answer}
        </p>
      </div>

      <style>{`
        .faq-item-btn:hover .faq-item-question {
          color: #e1811f;
        }
        @media (max-width: 768px) {
          .faq-item-question {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQItem;
