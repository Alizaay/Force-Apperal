import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="cta-section" style={{ backgroundColor: "#fff", width: "100%", padding: "70px 0" }}>
      <div className="cta-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <h2 className="cta-heading" style={{
          fontSize: "44px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-1px",
          color: "#111",
          lineHeight: 1.2,
          maxWidth: "900px",
          margin: "0 auto 40px",
        }}>
          Need custom uniforms or bulk apparel solutions? Let&apos;s create something tailored for your brand.
        </h2>

        <div className="cta-buttons" style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Link
            to="/contact"
            className="cta-btn-primary"
            style={{
              backgroundColor: "#e1811f",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get in touch
          </Link>
          <Link
            to="/contact"
            className="cta-btn-secondary"
            style={{
              backgroundColor: "transparent",
              color: "#111",
              padding: "13px 36px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #111",
            }}
          >
            Start your order
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .cta-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .cta-heading {
            font-size: 28px !important;
            margin-bottom: 28px !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100% !important;
            max-width: 320px !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .cta-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .cta-heading {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
