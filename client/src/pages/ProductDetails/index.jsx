import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductTabs from "../../components/product/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts";

import { productsData } from "../../data/productsData";

const ProductDetails = () => {
  const { id } = useParams();

  const product =
    productsData.find((item) => item.id === Number(id)) ||
    productsData[0];

  const relatedProducts =
    productsData.filter(
      (item) => item.id !== product.id
    ).length > 0
      ? productsData.filter(
          (item) => item.id !== product.id
        )
      : productsData;

  return (
    <MainLayout>
      <section className="bg-white w-full">
        <div
          className="
            max-w-[1140px]
            mx-auto

            px-[24px]
            md:px-[32px]
            lg:px-[40px]

            pt-[34px]
            pb-[70px]
          "
        >
          {/* TOP SECTION */}
          <div
            className="
              grid
              grid-cols-1

              lg:grid-cols-[430px_1fr]

              gap-[48px]

              items-start
            "
          >
            <ProductGallery product={product} />

            <ProductInfo product={product} />
          </div>

          {/* TABS */}
          <ProductTabs product={product} />

          {/* RELATED PRODUCTS */}
          <RelatedProducts
            products={relatedProducts}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;