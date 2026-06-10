import FAQItem from "./FAQItem";
import { faqData } from "../../data/faqData";

const FAQAccordion = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {faqData.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
