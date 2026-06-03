import { Link } from "react-router-dom";
import Container from "../shared/Container";

const CTASection = () => {
  return (
    <section className="bg-[#f4f4f4] w-full overflow-hidden">
      <div className="py-[85px]">
        <Container>
          <div
            className="
              max-w-[2000px]
              mx-auto

              flex
              flex-col
              items-center
              justify-center

              text-center
            "
          >
            {/* HEADING */}
            <h2
              className="
                max-w-[850px]

                text-[30px]
                sm:text-[38px]
                lg:text-[44px]

                font-black
                uppercase

                leading-[1.22]
                tracking-[-1px]

                text-black

                mb-[42px]
              "
            >
              Need custom uniforms or bulk apparel solutions? Let’s create
              something tailored for your brand.
            </h2>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row

                items-center
                justify-center

                gap-[14px]
              "
            >
              <Link
                to="/contact"
                className="
                  h-[52px]
                  min-w-[150px]

                  px-[30px]

                  rounded-[8px]

                  bg-[#e1811f]
                  text-white

                  flex
                  items-center
                  justify-center

                  text-[14px]
                  font-medium

                  transition-all
                  duration-300

                  hover:bg-[#d07018]
                "
              >
                Get in touch
              </Link>

              <Link
                to="/contact"
                className="
                  h-[52px]
                  min-w-[170px]

                  px-[30px]

                  rounded-[8px]

                  border
                  border-black

                  text-black

                  flex
                  items-center
                  justify-center

                  text-[14px]
                  font-medium

                  transition-all
                  duration-300

                  hover:bg-gray-200
                  hover:border-gray-200
                  hover:text-white
                "
              >
                Start your order
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CTASection;