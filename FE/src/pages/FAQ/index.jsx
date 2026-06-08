import MainLayout from "../../layouts/MainLayout";

import FAQHero from "../../components/faq/FAQHero";
import FAQAccordion from "../../components/faq/FAQAccordion";

const FAQ = () => {
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
          <FAQHero />
          <FAQAccordion />
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;