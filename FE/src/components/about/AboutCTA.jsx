import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[60px]">
        <div
          className="
            w-full
            max-w-[950px]

            bg-[#e1811f]

            rounded-[12px]

            min-h-[250px]

            shadow-[0_8px_24px_rgba(0,0,0,0.08)]

            grid
            grid-cols-1
            md:grid-cols-[1fr_240px]

            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              flex-col
              justify-center

              h-full

              pl-[60px]
              lg:pl-[80px]

              pr-[30px]
              py-[50px]
            "
          >
            <p
              className="
                text-white

                text-[10px]
                uppercase

                tracking-[4px]

                font-medium

                mb-[22px]
              "
            >
              LET'S BUILD SOMETHING
            </p>

            <h2
              className="
                text-white

                text-[34px]
                md:text-[42px]

                font-black
                uppercase

                leading-[1.05]

                tracking-[-1px]

                max-w-[560px]
              "
            >
              Need Custom
              <br />
              Uniforms Or Bulk
              <br />
              Apparel Solutions?
            </h2>
          </div>

          {/* RIGHT BUTTONS */}
          <div
            className="
              flex
              flex-col
              justify-center
              items-center

              gap-[14px]

              py-[50px]
              pr-[40px]
            "
          >
            <Link
              to="/contact"
              className="
                w-[170px]
                h-[52px]

                inline-flex
                items-center
                justify-center

                rounded-[8px]

                bg-white

                text-black
                text-[14px]
                font-medium

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              Get a Quote ↗
            </Link>

            <Link
              to="/contact"
              className="
                w-[170px]
                h-[52px]

                inline-flex
                items-center
                justify-center

                rounded-[8px]

                border
                border-black

                text-black
                text-[14px]
                font-medium

                transition-all
                duration-300

                hover:bg-black
                hover:text-white
              "
            >
              Start your order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;