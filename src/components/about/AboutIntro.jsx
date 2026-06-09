const AboutIntro = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full flex justify-center px-6 py-[70px]">
        <div className="w-full max-w-[760px] text-center mx-auto">
          <p
            className="
              text-[#e1811f]
              text-[12px]
              uppercase
              tracking-[2.8px]
              font-medium
              mb-[14px]
            "
          >
            Our Story
          </p>

          <h2
            className="
              max-w-[900px]
              mx-auto

              text-[30px]
              sm:text-[28px]
              md:text-[32px]

              font-black
              uppercase

              leading-[1.12]
              tracking-[-0.8px]

              text-black

              mb-[20px]
            "
          >
            Forge Apparel Was Built To Redefine Custom Uniforms And
            Professional Apparel Manufacturing.
          </h2>

          <p
            className="
              max-w-[800px]
              mx-auto

              text-[14px]
              md:text-[16px]

              leading-[1.65]

              text-[#444]
            "
          >
            With years of experience in fabric sourcing, production,
            customization and global supply, we help businesses create apparel
            that reflects professionalism, durability and brand identity. We're
            a 400-person team across two facilities, but we still treat every
            order like our first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;