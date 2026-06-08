const SectionHeading = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-20">
      <p
        className="
          text-[#e1811f]
          uppercase
          tracking-[2px]
          text-sm
          font-semibold
          mb-5
        "
      >
        {subtitle}
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-black
          uppercase
          tracking-[-2px]
          leading-[1.1]
          text-black
        "
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
