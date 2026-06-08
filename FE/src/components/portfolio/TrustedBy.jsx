import { trustedBrands } from "../../data/portfolioData";

const TrustedBy = () => {
  return (
    <section className="pt-[30px]">
      {/* LINE */}
      <div className="w-full h-[1px] bg-[#d8d8d8] mb-[22px]" />

      {/* LABEL */}
      <p
        className="
          text-[#e1811f]

          text-[12px]
          uppercase

          tracking-[2px]

          text-center

          mb-[18px]
        "
      >
        Trusted By
      </p>

      {/* BRANDS */}
      <div
        className="
          flex
          flex-wrap

          justify-center
          items-center

          gap-x-[44px]
          gap-y-[24px]
        "
      >
        {trustedBrands.map((brand, index) => (
          <span
            key={index}
            className="
              text-[16px]
              md:text-[18px]

              font-semibold

              text-[#8a8a8a]

              tracking-[1.2px]
            "
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;