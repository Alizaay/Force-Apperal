import MainLayout from "../../layouts/MainLayout";

import FAQHero from "../../components/faq/FAQHero";
import FAQAccordion from "../../components/faq/FAQAccordion";

const FAQ = () => {
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
          className="faq-container"
        >
          <FAQHero />
          <FAQAccordion />
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .faq-container {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .faq-container {
            padding: 40px 16px 60px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default FAQ;
