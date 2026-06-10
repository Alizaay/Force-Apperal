import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const CategoryHero = ({ title, subtitle, image }) => {
  return (
    <section className="category-hero" style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden", backgroundColor: "#111" }}>
      <img
        src={image}
        alt={title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />

      <Link
        to="/"
        className="category-hero-back"
        style={{
          position: "absolute",
          top: "24px",
          left: "40px",
          color: "#fff",
          fontSize: "22px",
          textDecoration: "none",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <FiArrowLeft />
      </Link>

      <div style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
      }}>
        <div>
          <h1 className="category-hero-title" style={{
            fontSize: "48px",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            color: "#fff",
            marginBottom: "12px",
            letterSpacing: "-1px",
          }}>
            {title}
          </h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", margin: 0 }}>
            {subtitle}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .category-hero {
            height: 220px !important;
          }
          .category-hero-title {
            font-size: 32px !important;
          }
          .category-hero-back {
            left: 20px !important;
            top: 18px !important;
          }
        }
        @media (max-width: 480px) {
          .category-hero {
            height: 200px !important;
          }
          .category-hero-title {
            font-size: 26px !important;
          }
          .category-hero-back {
            left: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryHero;
