const PortfolioHeader = () => {
  return (
    <div
      className="
        w-full

        flex
        flex-col
        items-center

        text-center

        mb-[42px]
      "
    >
      {/* LABEL */}
      <p
        className="
          text-[#e1811f]

          text-[ 12px]
          uppercase

          tracking-[2.5px]

          font-medium

          mb-[10px]
        "
      >
        PORTFOLIO
      </p>

      {/* TITLE */}
      <h1
        className="
          max-w-[900px]

          text-[34px]
          md:text-[52px]

          font-black
          uppercase

          leading-[0.95]

          tracking-[-2px]

          text-black
        "
      >
        OUR APPAREL PROJECTS &
        <br />

        <span className="text-[#e1811f]">
          CLIENT COLLECTIONS.
        </span>
      </h1>
    </div>
  );
};

export default PortfolioHeader;