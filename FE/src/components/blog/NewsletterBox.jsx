const NewsletterBox = () => {
  return (
    <div
      className="
        bg-[#f3f1ee]
        rounded-[6px]
        px-[26px]
        py-[28px]
        w-full
      "
    >
      <p className="text-[#666] text-[34px] font-light mb-[28px]">
        Newsletter
      </p>

      <h3
        className="
          text-black
          text-[18px]
          font-black
          uppercase
          leading-[1.1]
          mb-[24px]
        "
      >
        Get Our Monthly
        <br />
        Manufacturing
        <br />
        Notes
      </h3>

      <p className="text-[#777] text-[16px] leading-[1.65] mb-[28px]">
        Fabric guides, case studies, and behind-the-floor notes. One email a
        month.
      </p>

      <input
        type="email"
        placeholder="Your@gmail.com"
        className="
          w-full
          h-[38px]
          px-[12px]
          bg-white
          border
          border-[#e1811f]
          rounded-[6px]
          text-[12px]
          outline-none
          mb-[12px]
        "
      />

      <button
        type="button"
        className="
          w-full
          h-[38px]
          rounded-[6px]
          bg-[#e1811f]
          text-white
          text-[12px]
          font-medium
        "
      >
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterBox;