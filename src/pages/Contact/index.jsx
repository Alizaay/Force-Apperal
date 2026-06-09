import MainLayout from "../../layouts/MainLayout";

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactFAQ from "../../components/contact/ContactFAQ";

const Contact = () => {
  return (
    <MainLayout>
      <section className="bg-[#f7f4ef] w-full overflow-hidden">
        <div className="w-full flex justify-center">
          <div
            className="
              w-full
              max-w-[900px]

              px-[24px]
              lg:px-[30px]

              py-[70px]
            "
          >
            <ContactHero />

            <div
              className="
                w-full

                grid
                grid-cols-1
                lg:grid-cols-[1fr_280px]

                gap-[32px]

                items-start
              "
            >
              <ContactForm />
              <ContactInfo />
            </div>

            <ContactFAQ />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;