import { contactInfo } from "../../data/contactData";

const ContactInfo = () => {
  return (
    <div className="space-y-[12px]">
      {contactInfo.map((item) => (
        <div key={item.title} className="bg-white rounded-[8px] p-[16px]">
          <h3 className="text-[10px] uppercase font-black text-[#e1811f] mb-[6px]">
            {item.title}
          </h3>

          <p className="text-[12px] leading-[1.6] text-black">
            {item.value}
          </p>
        </div>
      ))}

      <div className="h-[180px] bg-[#d7e8e6] rounded-[8px] flex items-center justify-center text-[12px] text-black">
        Map Placeholder
      </div>
    </div>
  );
};

export default ContactInfo;