const MissionVision = () => {
  return (
    <section className="bg-[#f3eee9] w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[58px]">
        <div
          className="
            w-full
            max-w-[900px]

            grid
            grid-cols-1
            md:grid-cols-2

            gap-[58px]
          "
        >
          {/* MISSION */}
          <div className="border-l border-[#e1811f] pl-[10px]">
            <p className="text-[12px] text-black mb-[8px] leading-none">
              01
            </p>

            <h3 className="text-[28px] font-black uppercase leading-none text-[#e1811f] mb-[10px]">
              Mission
            </h3>

            <p className="text-[14px] leading-[1.25] text-black max-w-[350px]">
              Deliver premium-quality custom apparel solutions with precision,
              speed and innovation.
            </p>
          </div>

          {/* VISION */}
          <div className="border-l border-black pl-[10px]">
            <p className="text-[12px] text-black mb-[8px] leading-none">
              02
            </p>

            <h3 className="text-[28px] font-black uppercase leading-none text-[#e1811f] mb-[10px]">
              Vision
            </h3>

            <p className="text-[14px] leading-[1.25] text-black max-w-[350px]">
              Become a globally trusted apparel manufacturing partner for
              businesses and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;