import { Link } from "react-router-dom";

import heroImage from "../../assets/images/about/about.bg.png";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[620px] overflow-hidden">
      <img
        src={heroImage}
        alt="About Forge Apparel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h1
            className="
              text-[42px]
              md:text-[58px]
              lg:text-[68px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-2px]
              text-black
              mb-[18px]
            "
          >
            Crafting Performance
            <br />
            Apparel For{" "}
            <span className="text-[#e1811f]">Modern</span>
            <br />
            <span className="text-[#e1811f]">Industries.</span>
          </h1>

          <p
            className="
              max-w-[850px]
              mx-auto
              text-[13px]
              md:text-[14px]
              leading-[1.7]
              text-black
              mb-[26px]
            "
          >
            Discover premium-quality sportswear and professional apparel crafted
            for comfort, durability and impact. From team kits to workplace
            uniforms, we deliver solutions that match your standards.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              h-[48px]
              w-[200px]
              px-[24px]
              rounded-[4px]
              bg-[#e1811f]
              text-white
              text-[10px]
              uppercase
              tracking-[1px]
              font-semibold
              hover:bg-[#cf7418]
              transition-all
              duration-300
            "
          >
            Request Custom Order
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;