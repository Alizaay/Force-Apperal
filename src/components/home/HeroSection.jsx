import { Link } from "react-router-dom";

const HeroSection = ({ heroImage }) => {
  return (
    <section className="bg-[#f4f4f4] w-full overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-8 sm:px-10 lg:px-12">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[620px_420px]

            justify-center
            items-center

            gap-[70px]
            lg:gap-[90px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              max-w-[620px]

              mx-auto
              lg:mx-0

              text-center
              lg:text-left
            "
          >
            {/* HEADING */}
            <h1
              className="
                text-[42px]
                sm:text-[48px]
                md:text-[54px]
                lg:text-[58px]

                font-black
                uppercase

                leading-[1.2]
                lg:leading-[1.2]

                tracking-[-2.5px]

                text-black

                mb-[26px]
              "
            >
              <span className="block mb-[8px]">
                Performance{" "}
                <span className="text-[#e1811f]">
                  Meets Style
                </span>
              </span>

              <span className="block">
                <span className="text-[#e1811f]">
                  In
                </span>{" "}
                Every Stitch
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[460px]

                mx-auto
                lg:mx-0

                text-[14px]

                leading-[1.9]

                text-[#222]

                mb-[34px]
              "
            >
              Discover premium-quality sportswear and
              professional apparel crafted for comfort,
              durability, and impact. From team kits to
              workplace uniforms, we deliver solutions
              that match your standards.
            </p>

            {/* BUTTON */}
            <Link
  to="/contact"
  className="
    hidden
    lg:flex
    items-center
    justify-center
    h-[48px]
    w-[200px]
    rounded-[6px]
    bg-[#e1811f]
    text-white
    text-[11px]
    uppercase
    tracking-[1.5px]
    font-semibold
    transition-all
    duration-300
    hover:bg-[#d07018]
    hover:-translate-y-[1px]
  "
>
  Request Custom Order
</Link>


            {/* STATS */}
            <div
              className="
                flex
                justify-center
                lg:justify-start

                items-start

                gap-[52px]
                sm:gap-[60px]
                lg:gap-[72px]

                flex-wrap
              "
            >
              {[
                ["18+", "Years", "Crafting"],
                ["156k+", "Units", "Shipped"],
                ["100%", "Custom", "Built"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    text-center
                    min-w-[90px]
                  "
                >
                  <h4
                    className="
                      text-[32px]
                      sm:text-[36px]

                      font-black

                      leading-[1.2]

                      mb-[10px]

                      text-black
                    "
                  >
                    {item[0]}
                  </h4>

                  <p
                    className="
                      text-[9px]

                      uppercase

                      tracking-[3px]

                      leading-[1.9]

                      text-[#111]
                    "
                  >
                    {item[1]}
                    <br />
                    {item[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex
              justify-center
              lg:justify-end

              items-center
              px-6
              lg:px-0
            "
          >
            <img
              src={heroImage}
              alt="Hero Product"
              className="
                w-full

                max-w-[300px]
                sm:max-w-[330px]
                md:max-w-[350px]
                lg:max-w-[390px]

                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;