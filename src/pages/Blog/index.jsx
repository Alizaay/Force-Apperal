import MainLayout from "../../layouts/MainLayout";

import BlogHero from "../../components/blog/BlogHero";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import BlogGrid from "../../components/blog/BlogGrid";
import BlogSidebar from "../../components/blog/BlogSidebar";

import { blogPosts } from "../../data/blogData";

const Blog = () => {
  return (
    <MainLayout>
      <section style={{ backgroundColor: "#f7f4ef", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "50px 24px 80px",
          }}
          className="blog-container"
        >
          <BlogHero />
          <FeaturedBlog />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 210px",
              gap: "22px",
              marginTop: "34px",
              alignItems: "start",
            }}
            className="blog-layout"
          >
            <BlogGrid posts={blogPosts} />
            <BlogSidebar />
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .blog-container {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }
        @media (max-width: 1024px) {
          .blog-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .blog-container {
            padding: 40px 16px 60px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Blog;
