const BlogHero = () => {
  return (
    <div
      className="
        w-full

        flex
        justify-center

        mb-[40px]
      "
    >
      <div
        className="
          w-full
          max-w-[900px]

          text-left
        "
      >
        {/* LABEL */}
        <p
          className="
            text-[#e1811f]

            text-[12px]
            uppercase

            tracking-[2px]

            font-medium

            mb-[10px]
          "
        >
          BLOGS
        </p>

        {/* TITLE */}
        <h1
          className="
            max-w-[400px]

            text-[30px]
            md:text-[34px]

            font-black
            uppercase

            leading-[0.92]

            tracking-[-1px]

            text-black
          "
        >
          NOTES FROM THE
          <br />
          CUTTING FLOOR.
        </h1>
      </div>
    </div>
  );
};

export default BlogHero;