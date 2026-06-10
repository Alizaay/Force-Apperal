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

  const relatedProducts = productsData.filter((item) => item.id !== product.id);

  return (
    <MainLayout>
      <section className="product-page-section" style={{ backgroundColor: "#fbf8f6", width: "100%", padding: "40px 0 80px" }}>
        <div className="product-page-outer" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{
            width: "100%",
            maxWidth: "1050px",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "40px 48px 48px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #f0eae2",
            background: "radial-gradient(circle at 10% 20%, rgba(225,129,31,0.06), transparent 25%), radial-gradient(circle at 90% 80%, rgba(225,129,31,0.04), transparent 20%), #fff",
          }} className="product-card-wrap">

            {/* Gallery + Info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "420px 1fr",
                gap: "60px",
                alignItems: "start",
              }}
              className="product-top-grid"
            >
              <ProductGallery product={product} />
              <ProductInfo product={product} />
            </div>

            <ProductTabs product={product} />
            <RelatedProducts products={relatedProducts.length ? relatedProducts.slice(0, 4) : productsData.slice(0, 4)} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .product-top-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .product-card-wrap {
            padding: 28px 24px 36px !important;
          }
        }
        @media (max-width: 640px) {
          .product-page-outer {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .product-page-section {
            padding-top: 24px !important;
            padding-bottom: 48px !important;
          }
          .product-card-wrap {
            padding: 20px 16px 28px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default ProductDetails;
