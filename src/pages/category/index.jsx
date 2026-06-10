import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import CategoryHero from "../../components/category/CategoryHero";
import CategoryFilters from "../../components/category/CategoryFilters";
import ProductGrid from "../../components/category/ProductGrid";

import { categoriesData } from "../../data/categoriesData";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categoriesData[slug] || categoriesData["sports-wear"];

  return (
    <MainLayout>
      <CategoryHero
        title={category.title}
        subtitle={category.subtitle}
        image={category.banner}
      />

      <section style={{ backgroundColor: "#fff", width: "100%" }}>
        <div className="category-page-inner" style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 40px 60px",
        }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "40px",
              alignItems: "start",
            }}
            className="category-layout"
          >
            <CategoryFilters />
            <ProductGrid products={category.products} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .category-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .category-filters {
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .category-page-inner {
            padding: 24px 16px 40px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default CategoryPage;
