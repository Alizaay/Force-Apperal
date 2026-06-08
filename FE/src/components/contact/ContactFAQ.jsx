import ContactFAQItem from "./ContactFAQItem";
import { contactFaqs } from "../../data/contactData";

const ContactFAQ = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto mt-[70px]">
      <div className="text-center mb-[35px]">
        <p className="text-[#e1811f] text-[10px] uppercase tracking-[5px] mb-[16px]">
          Quick Answers
        </p>

        <h2 className="text-[36px] font-black uppercase leading-[0.95] text-black">
          Before You Write.
        </h2>
      </div>

      <div className="w-full">
        {contactFaqs.map((item, index) => (
          <ContactFAQItem
            key={item.id || item.question || index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;