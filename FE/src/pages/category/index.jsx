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

      <section className="bg-white w-full overflow-hidden">
        <div
          className="
            w-full
            max-w-[1400px]
            mx-auto

            px-[28px]
            sm:px-[36px]
            md:px-[46px]
            lg:px-[60px]
            xl:px-[72px]

            py-[36px]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_1fr]

              gap-[34px]
              lg:gap-[48px]

              items-start
            "
          >
            <CategoryFilters />

            <ProductGrid products={category.products} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CategoryPage;