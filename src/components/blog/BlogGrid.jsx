import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "14px",
      }}
      className="blog-grid"
    >
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}

      <style>{`
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogGrid;
