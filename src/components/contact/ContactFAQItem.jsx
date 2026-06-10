import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ContactFAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: "1px solid #bdb7af",
      padding: "18px 0",
    }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span style={{
          fontSize: "14px",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "#111",
          paddingRight: "20px",
        }} className="contact-faq-question">
          {item.question}
        </span>

        <FiChevronDown
          style={{
            fontSize: "15px",
            color: "#111",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        className={`contact-faq-answer${open ? " is-open" : ""}`}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease, padding 0.3s ease",
          maxHeight: open ? "500px" : "0",
          paddingTop: open ? "12px" : "0",
        }}
      >
        <p style={{
          fontSize: "13px",
          lineHeight: 1.8,
          color: "#666",
          maxWidth: "1000px",
          margin: 0,
        }}>
          {item.answer}
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-faq-question {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactFAQItem;
