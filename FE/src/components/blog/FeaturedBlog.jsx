import { featuredBlog } from "../../data/blogData";

const FeaturedBlog = () => {
  return (
    <div className="w-full flex justify-center mb-[120px]">
      <div
        className="
          w-full
          max-w-[1000px]

          bg-white
          rounded-[18px]

          overflow-hidden

          shadow-[0_10px_35px_rgba(0,0,0,0.08)]

          grid
          grid-cols-1
          md:grid-cols-[48%_52%]
        "
      >
        {/* IMAGE */}
        <div className="h-[350px]">
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-center

            px-[42px]
            lg:px-[58px]

            py-[50px]
          "
        >
          <p className="text-[#e1811f] text-[12px] uppercase tracking-[4px] mb-[24px]">
            {featuredBlog.category}
          </p>

          <h2
            className="
              text-[24px]
              lg:text-[34px]

              font-black
              uppercase

              leading-[1.12]
              tracking-[-1px]

              text-black

              max-w-[560px]
              mb-[32px]
            "
          >
            {featuredBlog.title}
          </h2>

          <p
            className="
              text-[16px]
              leading-[1.3]
              text-black

              max-w-[600px]

              mb-[36px]
            "
          >
            {featuredBlog.description}
          </p>

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-fit

              text-[#e1811f]

              text-[12px]
              uppercase

              tracking-[5px]

              font-medium
            "
          >
            Read Article&nbsp;&nbsp;↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;