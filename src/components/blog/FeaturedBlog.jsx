import { featuredBlog } from "../../data/blogData";

const FeaturedBlog = () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "120px",
    }} className="featured-blog-wrap">
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.08)",
          display: "grid",
          gridTemplateColumns: "48% 52%",
          border: "1px solid #f0eae2",
        }}
        className="featured-blog-card"
      >
        <div className="featured-blog-image" style={{ height: "350px", overflow: "hidden", backgroundColor: "#ececec" }}>
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "50px 58px",
        }} className="featured-blog-content">
          <p style={{
            color: "#e1811f",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "24px",
            marginTop: 0,
          }}>
            {featuredBlog.category}
          </p>

          <h2 style={{
            fontSize: "34px",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.12,
            letterSpacing: "-1px",
            color: "#111",
            maxWidth: "560px",
            marginBottom: "32px",
            marginTop: 0,
          }} className="featured-blog-title">
            {featuredBlog.title}
          </h2>

          <p style={{
            fontSize: "16px",
            lineHeight: 1.3,
            color: "#111",
            maxWidth: "600px",
            marginBottom: "36px",
            marginTop: 0,
          }}>
            {featuredBlog.description}
          </p>

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="featured-blog-link"
            style={{
              width: "fit-content",
              color: "#e1811f",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Read Article&nbsp;&nbsp;↗
          </a>
        </div>
      </div>

      <style>{`
        .featured-blog-link:hover {
          opacity: 0.75;
        }
        @media (max-width: 768px) {
          .featured-blog-wrap {
            margin-bottom: 60px !important;
          }
          .featured-blog-card {
            grid-template-columns: 1fr !important;
          }
          .featured-blog-content {
            padding: 36px 28px !important;
          }
          .featured-blog-title {
            font-size: 24px !important;
          }
          .featured-blog-image {
            height: 240px !important;
          }
        }
        @media (max-width: 480px) {
          .featured-blog-content {
            padding: 28px 20px !important;
          }
          .featured-blog-image {
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedBlog;
