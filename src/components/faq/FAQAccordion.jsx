import FAQItem from "./FAQItem";
import { faqData } from "../../data/faqData";

const FAQAccordion = () => {
  return (
    <div className="w-full">
      <div
        className="
          w-full
          max-w-[900px]

          mx-auto
        "
      >
        {faqData.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;