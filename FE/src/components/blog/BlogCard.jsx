const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-[8px] overflow-hidden">
      <div className="h-[180px] overflow-hidden bg-[#ececec]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-[14px]">
        <p className="text-[#e1811f] text-[12px] uppercase tracking-[1.5px] mb-[8px]">
          {post.category}
        </p>

        <h3 className="text-[16px] font-black uppercase leading-[1.25] text-black">
          {post.title}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;