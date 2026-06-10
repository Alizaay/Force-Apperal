import ContactFAQItem from "./ContactFAQItem";
import { contactFaqs } from "../../data/contactData";

const ContactFAQ = () => {
  return (
    <div style={{ width: "100%", marginTop: "70px" }}>
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <p style={{
          color: "#e1811f",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "5px",
          marginBottom: "16px",
          marginTop: 0,
        }}>
          Quick Answers
        </p>

        <h2 className="contact-faq-heading" style={{
          fontSize: "36px",
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 0.95,
          color: "#111",
          margin: 0,
        }}>
          Before You Write.
        </h2>
      </div>

      <div style={{ width: "100%" }}>
        {contactFaqs.map((item, index) => (
          <ContactFAQItem
            key={item.id || item.question || index}
            item={item}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-faq-heading {
            font-size: 26px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactFAQ;
