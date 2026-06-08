import { blogCategories } from "../../data/blogData";
import NewsletterBox from "./NewsletterBox";

const BlogSidebar = () => {
  return (
    <aside className="w-full max-w-[260px] pt-[80px]">
      {/* CATEGORIES */}
      <div className="mb-[90px]">
        <h3 className="text-[#e1811f] text-[22px] uppercase tracking-[6px] font-medium mb-[18px]">
          Categories
        </h3>

        <div>
          {blogCategories.map((category) => (
            <div
              key={category.name}
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#d8d2ca]
                py-[9px]
                text-[18px]
                text-black
              "
            >
              <span>{category.name}</span>
              <span className="text-[18px] leading-none">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <NewsletterBox />
    </aside>
  );
};

export default BlogSidebar;