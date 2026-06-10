import { Link } from "react-router-dom";

import heroImage from "../../assets/images/about/about.bg.png";

const AboutHero = () => {
  return (
    <section className="about-hero-section" style={{ position: "relative", width: "100%", height: "620px", overflow: "hidden" }}>
      <img
        src={heroImage}
        alt="About Forge Apparel"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.35)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <h1 style={{
            fontSize: "68px",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.95,
            letterSpacing: "-2px",
            color: "#111",
            marginBottom: "18px",
            marginTop: 0,
          }} className="about-hero-title">
            Crafting Performance
            <br />
            Apparel For{" "}
            <span style={{ color: "#e1811f" }}>Modern</span>
            <br />
            <span style={{ color: "#e1811f" }}>Industries.</span>
          </h1>

          <p style={{
            maxWidth: "850px",
            margin: "0 auto 26px",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#111",
          }} className="about-hero-desc">
            Discover premium-quality sportswear and professional apparel crafted
            for comfort, durability and impact. From team kits to workplace
            uniforms, we deliver solutions that match your standards.
          </p>

          <Link
            to="/contact"
            className="about-hero-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "48px",
              width: "200px",
              padding: "0 24px",
              borderRadius: "4px",
              backgroundColor: "#e1811f",
              color: "#fff",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Request Custom Order
          </Link>
        </div>
      </div>

      <style>{`
        .about-hero-btn:hover {
          background-color: #cf7418;
        }
        @media (max-width: 1024px) {
          .about-hero-title {
            font-size: 58px !important;
          }
        }
        @media (max-width: 768px) {
          .about-hero-section {
            height: auto !important;
            min-height: 460px !important;
            padding: 80px 0 60px !important;
          }
          .about-hero-title {
            font-size: 36px !important;
          }
          .about-hero-desc {
            font-size: 13px !important;
          }
        }
        @media (max-width: 480px) {
          .about-hero-section {
            min-height: 420px !important;
            padding: 72px 0 48px !important;
          }
          .about-hero-title {
            font-size: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
