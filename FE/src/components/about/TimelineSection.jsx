import { timeline } from "../../data/aboutData";

const TimelineSection = () => {
  return (
    <section className="bg-[#f7f7f7] w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[52px]">
        <div className="w-full max-w-[900px]">
          {/* HEADER */}
          <div className="text-center mb-[34px]">
            <p className="text-[#e1811f] text-[12px] uppercase tracking-[2px] mb-[10px]">
              Timeline
            </p>

            <h2
              className="
                max-w-[900px]
                mx-auto
                text-[30px]
                font-black
                uppercase
                leading-[1.08]
                tracking-[-0.3px]
                text-black
              "
            >
              Sixteen Years, One Obsession With Quality.
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* LINE */}
            <div
              className="
                absolute
                top-[10px]
                left-[8px]
                right-[8px]
                h-[2px]
                bg-[#e1811f]
              "
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[28px]">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="
                    relative
                    pt-[38px]
                  "
                >
                  {/* DOT */}
                  <span
                    className="
                      absolute
                      top-[6px]
                      left-[2px]

                      w-[9px]
                      h-[9px]

                      rounded-full
                      bg-[#e1811f]
                    "
                  />

                  {/* YEAR */}
                  <h3
                    className="
                      text-[12px]
                      font-black
                      text-black

                      mb-[10px]
                      leading-none
                    "
                  >
                    {item.year}
                  </h3>

                  {/* TITLE */}
                  <h4
                    className="
                      text-[16px]
                      font-black
                      text-black

                      mb-[8px]
                      leading-none
                    "
                  >
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-[14px]
                      leading-[1.45]
                      text-[#777]

                      max-w-[120px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;