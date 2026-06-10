const BlogCard = ({ post }) => {
  return (
    <article
      className="blog-card"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #f0eae2",
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div style={{
        height: "180px",
        overflow: "hidden",
        backgroundColor: "#ececec",
      }}>
        <img
          src={post.image}
          alt={post.title}
          className="blog-card-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.35s ease",
          }}
        />
      </div>

      <div style={{ padding: "14px" }}>
        <p style={{
          color: "#e1811f",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          marginBottom: "8px",
          marginTop: 0,
        }}>
          {post.category}
        </p>

        <h3 style={{
          fontSize: "16px",
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 1.25,
          color: "#111",
          margin: 0,
        }}>
          {post.title}
        </h3>
      </div>

      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }
        .blog-card:hover .blog-card-image {
          transform: scale(1.05);
        }
      `}</style>
    </article>
  );
};

export default BlogCard;
