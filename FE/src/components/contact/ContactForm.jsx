const ContactForm = () => {
  return (
    <form
      className="
        bg-white
        rounded-[12px]

        px-[24px]
        py-[24px]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-x-[14px]
          gap-y-[14px]
        "
      >
        <div>
          <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
            Full Name
          </label>
          <input
            className="w-full h-[38px] px-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] outline-none"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
            Company
          </label>
          <input
            className="w-full h-[38px] px-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] outline-none"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
            Email
          </label>
          <input
            type="email"
            className="w-full h-[38px] px-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] outline-none"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
            Phone
          </label>
          <input
            className="w-full h-[38px] px-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] outline-none"
            placeholder="Type here"
          />
        </div>
      </div>

      <div className="mt-[14px]">
        <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
          Inquiry Type
        </label>

        <select className="w-full h-[38px] px-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] text-[#777] outline-none">
          <option>Type here</option>
          <option>Custom Uniforms</option>
          <option>Bulk Apparel</option>
          <option>Sportswear</option>
        </select>
      </div>

      <div className="mt-[14px]">
        <label className="block text-[8px] text-[#9a9a9a] mb-[6px]">
          Tell us about your project
        </label>

        <textarea
          className="w-full h-[112px] p-[12px] rounded-[6px] border border-[#e5ded6] bg-[#fafafa] text-[10px] outline-none resize-none"
          placeholder="Type here"
        />
      </div>

      <button
        type="submit"
        className="mt-[16px] h-[38px] px-[24px] rounded-[6px] bg-[#e1811f] text-white text-[9px] font-semibold"
      >
        Send Inquiry
      </button>
    </form>
  );
};

export default ContactForm;