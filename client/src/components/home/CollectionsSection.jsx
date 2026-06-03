import Container from "../../components/shared/Container";

// images
import workWear from "../../assets/images/workwear.jpg";
import formalWear from "../../assets/images/FormalWear.jpg";
import accessories from "../../assets/images/accessories.jpg";
import healthcare from "../../assets/images/HealthCare.png";

// icons
import workWearIcon from "../../assets/icons/clothicon.svg";
import formalWearIcon from "../../assets/icons/clothicon.svg";
import accessoriesIcon from "../../assets/icons/clothicon.svg";
import healthcareIcon from "../../assets/icons/healthicon.svg";

const collections = [
  {
    title: "Work Wear",
    image: workWear,
    icon: workWearIcon,
  },
  {
    title: "Formal Wear",
    image: formalWear,
    icon: formalWearIcon,
  },
  {
    title: "Accessories",
    image: accessories,
    icon: accessoriesIcon,
  },
  {
    title: "Healthcare",
    image: healthcare,
    icon: healthcareIcon,
  },
];

const CollectionSection = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div>
        <Container>

          {/* TOP CONTENT */}
          <div className="text-center mb-[48px]">
            <p className="text-[#e1811f] text-[8px] uppercase tracking-[2.4px] mb-[10px]">
              Categories Section A Testimonial...
            </p>

            <h2 className="text-[34px] font-black uppercase tracking-[-1.2px] leading-none text-black">
              Our Diverse Collection
            </h2>
          </div>

          {/* CENTER GRID */}
          <div className="flex justify-center w-full">
            <div
              className="
                w-full
                max-w-[980px]
                mx-auto

                grid
                grid-cols-1
                md:grid-cols-2

                gap-x-[36px]
                gap-y-[32px]
              "
            >
              {collections.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-[#f4f4f4]
                    rounded-[8px]

                    w-full
                    sm:max-w-[474px]

                    h-auto
                    sm:h-[204px]

                    mx-auto

                    px-[30px]
                    py-[24px]

                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center

                    gap-4
                  "
                >
                  {/* LEFT */}
                  <div className="w-full sm:w-[150px]">
                    <div
                      className="
                        w-[28px]
                        h-[28px]
                        rounded-[6px]
                        bg-[#faead9]

                        flex
                        items-center
                        justify-center

                        mb-[15px]
                      "
                    >
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>

                    <h3 className="text-[24px] font-black uppercase text-black mb-[15px]">
                      {item.title}
                    </h3>

                    <p className="text-[16px] leading-[1.55] text-[#8c8c8c]">
                      Global logistics network ensuring your team is geared up
                      on time.
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      w-full
                      sm:w-[120px]
                      h-auto
                      sm:h-[120px]

                      bg-white

                      rounded-[8px]

                      p-[6px]

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
};

export default CollectionSection;