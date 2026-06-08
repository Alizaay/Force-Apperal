import ContactFAQItem from "./ContactFAQItem";
import { contactFaqs } from "../../data/contactData";

const ContactFAQ = () => {
  return (
    <div className="max-w-[760px] mx-auto mt-[60px]">
      <p className="text-[#e1811f] text-[8px] uppercase tracking-[2px] text-center mb-[8px]">
        Quick Answers
      </p>

      <h2 className="text-[24px] font-black uppercase text-center mb-[26px]">
        Before You Write.
      </h2>

      <div className="bg-white px-[24px]">
        {contactFaqs.map((item) => (
          <ContactFAQItem key={item.question} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;