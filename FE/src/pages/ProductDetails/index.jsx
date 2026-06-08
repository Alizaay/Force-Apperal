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
    productsData.find((item) => item.id === Number(id)) || productsData[0];

  const relatedProducts =
    productsData.filter((item) => item.id !== product.id).length > 0
      ? productsData.filter((item) => item.id !== product.id)
      : productsData;

  return (
    <MainLayout>
      <section className="bg-[#fbf8f6] w-full overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-8 sm:px-10 lg:px-16 xl:px-24 pt-[40px] pb-[80px]">
          <div className="w-full flex justify-center">
              <div
                className="w-full max-w-[1050px] bg-white rounded-[16px] px-8 sm:px-10 lg:px-14 xl:px-16 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0eae2]"
                style={{
                  background: 'radial-gradient(circle at 10% 20%, rgba(225,129,31,0.06), transparent 25%), radial-gradient(circle at 90% 80%, rgba(225,129,31,0.035), transparent 20%), #fbf8f6'
                }}
              >
            {/* TOP PRODUCT AREA */}
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[430px_520px]

                gap-[50px]
                lg:gap-[70px]

                items-start
              "
            >
              <ProductGallery product={product} />

              <ProductInfo product={product} />
            </div>

              {/* PRODUCT TABS */}
              <div className="mt-8">
                <ProductTabs product={product} />
              </div>

              {/* RELATED PRODUCTS */}
              <div className="mt-12">
                <RelatedProducts products={relatedProducts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;