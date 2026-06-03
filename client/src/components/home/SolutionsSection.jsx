import Container from "../shared/Container";

// images
import mainSolution from "../../assets/images/accessories.jpg";
import workWear from "../../assets/images/workwear.jpg";
import heroImage from "../../assets/images/heroimage.png";
import formalWear from "../../assets/images/FormalWear.jpg";

const SolutionsSection = () => {
  return (
    <section className="bg-[#f3efea] w-full overflow-hidden">
      <div>
        <Container>
          <div className="max-w-[2000px] mx-auto">

            {/* HEADING */}
            <h2
              className="
                text-center
                text-[30px]
                lg:text-[42px]
                font-black
                uppercase
                tracking-[-1px]
                leading-[1.1]
                text-black
                mb-[64px]
              "
            >
              We Deliver Complete{" "}
              <span className="text-[#e1811f]">
                Apparel Solutions
              </span>
            </h2>

            <div
              className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[330px_480px]
                  justify-center
                  items-center
                  gap-[90px]
                "
            >

              {/* LEFT TEXT */}
              <div className="mx-auto lg:mx-0 text-center lg:text-left">
                <p
                  className="
                    text-[19px]
                    leading-[1.25]
                    text-black
                    mb-[26px]
                    max-w-[520px]
                    mx-auto lg:mx-0
                  "
                >
                  We deliver complete apparel
                  solutions across sportswear,
                  formal clothing, and industrial
                  uniforms.
                </p>

                <ul
                  className="
                    list-disc
                    pl-[22px]
                    text-[18px]
                    leading-[1.25]
                    text-black
                    space-y-[4px]
                    max-w-[320px]
                  "
                >
                  <li>
                    With a strong focus on fabric
                    quality,
                  </li>
                  <li>
                    precision tailoring, and
                    custom production,
                  </li>
                  <li>
                    we help brands and teams
                    stand out with confidence.
                  </li>
                </ul>
              </div>

              {/* RIGHT IMAGES */}
              <div
                className="
                  grid
                  grid-cols-[1.1fr_1fr]
                  gap-[12px]
                  h-auto
                  lg:h-[340px]
                "
              >
                {/* BIG IMAGE */}
                <div
                  className="
                      row-span-2
                      rounded-[6px]
                      overflow-hidden
                      bg-white
                      p-[8px]
                    "
                >
                  <img
                    src={mainSolution}
                    alt="Apparel solution"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>

                {/* TOP RIGHT */}
                <div
                  className="
                      rounded-[6px]
                      overflow-hidden
                      bg-white
                      p-[8px]
                    "
                >
                  <img
                    src={workWear}
                    alt="Work wear"
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>

                {/* BOTTOM RIGHT TWO */}
                <div className="grid grid-cols-2 gap-[8px]">
                  <div className="rounded-[6px] overflow-hidden bg-white p-[8px]">
                    <img
                      src={heroImage}
                      alt="Sportswear"
                      className="w-full h-full object-cover rounded-[4px]"
                    />
                  </div>

                  <div className="rounded-[6px] overflow-hidden bg-white p-[8px]">
                    <img
                      src={formalWear}
                      alt="Formal wear"
                      className="w-full h-full object-cover rounded-[4px]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SolutionsSection;