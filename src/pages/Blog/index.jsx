import MainLayout from "../../layouts/MainLayout";

import BlogHero from "../../components/blog/BlogHero";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import BlogGrid from "../../components/blog/BlogGrid";
import BlogSidebar from "../../components/blog/BlogSidebar";

import { blogPosts } from "../../data/blogData";

const Blog = () => {
  return (
    <MainLayout>
      <section className="bg-[#f7f4ef] w-full overflow-hidden">
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "50px 24px",
          }}
        >
          <BlogHero />

          <FeaturedBlog />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_210px]
              gap-[22px]
              mt-[34px]
            "
          >
            <BlogGrid posts={blogPosts} />

            <BlogSidebar />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;