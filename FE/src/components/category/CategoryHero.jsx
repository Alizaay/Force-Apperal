import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const CategoryHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden bg-black">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* BACK BUTTON */}
      <Link to="/" className="absolute top-[28px] left-8 sm:left-10 lg:left-16 text-white text-[24px] hover:text-white/80 transition-all duration-300">
        <FiArrowLeft />
      </Link>

      {/* CENTER CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-8 sm:px-10">
          <h1
            className="
              text-[38px]
              md:text-[48px]
              lg:text-[56px]

              font-black
              uppercase

              leading-none

              text-white

              mb-[12px]
            "
          >
            {title}
          </h1>

          <p
            className="
              text-[12px]
              md:text-[13px]

              text-white/90
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;