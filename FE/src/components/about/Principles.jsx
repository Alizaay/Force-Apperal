import { principles } from "../../data/aboutData";

const Principles = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[56px]">
        <div className="w-full max-w-[900px]">
          {/* HEADER */}
          <div className="text-center mb-[28px]">
            <p className="text-[#e1811f] text-[12px] uppercase tracking-[2px] mb-[9px]">
              Our Service
            </p>

            <h2
              className="
                max-w-[900px]
                mx-auto
                text-[30px]
                font-black
                uppercase
                leading-[1.08]
                tracking-[-0.4px]
                text-black
              "
            >
              Six Principles That Shape Every Decision On The Floor.
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {principles.map((item) => (
              <div
                key={item.id}
                className="
                  bg-[#f7f7f7]
                  min-h-[120px]
                  px-[18px]
                  py-[16px]
                "
              >
                <p className="text-[14px] text-black mb-[9px] leading-none">
                  {item.id}
                </p>

                <h3 className="text-[18px] font-black uppercase text-black mb-[10px] leading-none">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-[1.45] text-[#9a9a9a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;