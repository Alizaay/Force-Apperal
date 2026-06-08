import Container from "../shared/Container";

// icons
import qualityIcon from "../../assets/icons/1.svg";
import productionIcon from "../../assets/icons/2.svg";
import brandingIcon from "../../assets/icons/3.svg";
import deliveryIcon from "../../assets/icons/4.svg";

const features = [
  {
    title: "Consistent Quality",
    description:
      "Sourcing the world's most resilient textiles for extreme performance.",
    icon: qualityIcon,
  },
  {
    title: "Bulk Production",
    description:
      "Streamlined manufacturing pipelines for high-volume enterprise orders.",
    icon: productionIcon,
  },
  {
    title: "Custom Branding",
    description:
      "In-house studio for precision logo application and custom trims.",
    icon: brandingIcon,
  },
  {
    title: "Reliable Delivery",
    description:
      "Global logistics network ensuring your team is geared up on time.",
    icon: deliveryIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f4f4f4] w-full overflow-hidden">
      <div className="py-[90px]">
        <Container>
          <div className="max-w-[2000px] mx-auto px-6">
            {/* HEADING */}
            <div className="text-center mb-[50px]">
              <h2
                className="
                  text-[30px]
                  md:text-[38px]
                  font-black
                  uppercase
                  leading-none
                  tracking-[-1.2px]
                  text-black
                  mb-[12px]
                "
              >
                Why Choose Us
              </h2>

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[2.5px]
                  text-[#e1811f]
                "
              >
                Our Strength Lies In Our Roster Of Key Feature
              </p>
            </div>

            {/* CARDS */}
            <div className="flex justify-center">
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4

                  gap-[24px]

                  w-full
                  max-w-[1100px]
                  mx-auto
                "
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      bg-white
                      rounded-[8px]
                      w-full
                      sm:w-[250px]
                      h-auto
                      sm:h-[200px]

                      p-[24px]

                      flex
                      flex-col
                      items-start

                      transition-all
                      duration-300
                      hover:shadow-md
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        w-[34px]
                        h-[34px]

                        rounded-[7px]
                        bg-[#faead9]

                        flex
                        items-center
                        justify-center

                        mb-[18px]
                      "
                    >
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="
                          w-[20px]
                          h-[20px]
                          object-contain
                        "
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-[20px]
                        font-black
                        uppercase

                        leading-[1.3]

                        mb-[10px]

                        text-black
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-[16px]

                        leading-[1.7]

                        text-[#8c8c8c]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhyChooseUs;