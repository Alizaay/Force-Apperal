const FAQHero = () => {
  return (
    <div
      className="
        w-full
        max-w-[900px]

        mx-auto

        mb-[55px]
      "
    >
      <p
        className="
          text-[#e1811f]

          text-[12px]
          uppercase

          tracking-[3px]

          font-medium

          mb-[16px]
        "
      >
        Frequently Asked
      </p>

      <h1
        className="
          text-[28px]
          md:text-[34px]

          font-black
          uppercase

          leading-[1.05]
          tracking-[-1px]

          text-black
        "
      >
        Answers, Before You
        <br />
        Ask.
      </h1>

      {/* Divider line like Figma */}
      <div
        className="
          w-full
          h-[1px]

          bg-[#bdb7af]

          mt-[28px]
        "
      />
    </div>
  );
};

export default FAQHero;