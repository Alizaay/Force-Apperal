import { blogCategories } from "../../data/blogData";
import NewsletterBox from "./NewsletterBox";

const BlogSidebar = () => {
  return (
    <aside style={{
      width: "100%",
      maxWidth: "260px",
      paddingTop: "80px",
    }} className="blog-sidebar">
      <div style={{ marginBottom: "90px" }}>
        <h3 style={{
          color: "#e1811f",
          fontSize: "22px",
          textTransform: "uppercase",
          letterSpacing: "6px",
          fontWeight: 500,
          marginBottom: "18px",
          marginTop: 0,
        }}>
          Categories
        </h3>

        <div>
          {blogCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              className="blog-category-item"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #d8d2ca",
                padding: "9px 0",
                fontSize: "18px",
                color: "#111",
                background: "none",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              <span>{category.name}</span>
              <span style={{ fontSize: "18px", lineHeight: 1 }}>↗</span>
            </button>
          ))}
        </div>
      </div>

      <NewsletterBox />

      <style>{`
        .blog-category-item:hover {
          color: #e1811f;
        }
        @media (max-width: 1024px) {
          .blog-sidebar {
            max-width: 100% !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default BlogSidebar;
