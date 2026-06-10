const BlogHero = () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "900px",
        textAlign: "left",
      }}>
        <p style={{
          color: "#e1811f",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 500,
          marginBottom: "10px",
          marginTop: 0,
        }}>
          Blogs
        </p>

        <h1 style={{
          maxWidth: "400px",
          fontSize: "34px",
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 0.92,
          letterSpacing: "-1px",
          color: "#111",
          margin: 0,
        }} className="blog-hero-title">
          Notes From The
          <br />
          Cutting Floor.
        </h1>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-hero-title {
            font-size: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogHero;
