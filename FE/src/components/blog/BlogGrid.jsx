import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;