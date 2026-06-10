import MainLayout from "../../layouts/MainLayout";

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactFAQ from "../../components/contact/ContactFAQ";

const Contact = () => {
  return (
    <MainLayout>
      <section style={{ backgroundColor: "#f7f4ef", width: "100%", overflow: "hidden" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              padding: "70px 24px",
            }}
            className="contact-container"
          >
            <ContactHero />

            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 280px",
                gap: "32px",
                alignItems: "start",
              }}
              className="contact-layout"
            >
              <ContactForm />
              <ContactInfo />
            </div>

            <ContactFAQ />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .contact-container {
            padding: 48px 16px 60px !important;
          }
        }
        @media (min-width: 1024px) {
          .contact-container {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Contact;
