import { Link } from "react-router-dom";

const stats = [
  { value: "18+", label: "Years\nCrafting" },
  { value: "156k+", label: "Units\nShipped" },
  { value: "100%", label: "Custom Built" },
];

const HeroSection = ({ heroImage }) => {
  return (
    <section className="hero-section" style={{ backgroundColor: "#f4f4f4", width: "100%", padding: "70px 0 80px" }}>
      <div className="hero-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

        {/* Grid: row1 = heading (left only), row2 = content (left) + image (right) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)",
          gridTemplateRows: "auto auto",
          columnGap: "10px",
          rowGap: "28px",
        }} className="hero-grid">

          {/* ROW 1 — Heading (left column only) */}
          <h1 className="hero-heading" style={{
            gridColumn: "1",
            gridRow: "1",
            fontSize: "50px",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.08,
            letterSpacing: "-2px",
            color: "#111",
            margin: 0,
            fontFamily: "'Montserrat', 'Inter', sans-serif",
          }}>
            <span className="hero-title-line" style={{ display: "block", whiteSpace: "nowrap" }}>
              Performance{" "}
              <span style={{ color: "#e1811f" }}>Meets Style</span>
            </span>
            <span className="hero-title-line" style={{ display: "block", whiteSpace: "nowrap" }}>
              <span style={{ color: "#e1811f" }}>In</span> Every Stitch
            </span>
          </h1>

          {/* ROW 2 — Left content (description, button, stats) */}
          <div className="hero-content" style={{ gridColumn: "1", gridRow: "2" }}>
            <p style={{
              fontSize: "14px",
              lineHeight: 1.85,
              color: "#555",
              marginBottom: "28px",
              maxWidth: "440px",
            }}>
              Discover premium-quality sportswear and professional apparel crafted
              for comfort, durability, and impact. From team kits to workplace
              uniforms, we deliver solutions that match your standards.
            </p>

            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e1811f",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.3px",
                textDecoration: "none",
                marginBottom: "48px",
              }}
            >
              Request custom order
            </Link>

            {/* Stats */}
            <div className="hero-stats" style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
              {stats.map((item, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "#111", lineHeight: 1 }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "2.5px",
                    color: "#111",
                    marginTop: "8px",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — spans both rows, bottom aligned with stats */}
          <div style={{
            gridColumn: "2",
            gridRow: "1 / 3",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingLeft: "8px",
            minHeight: 0,
          }} className="hero-image-wrap">
            {/* Soft glow behind shirt */}
            <div style={{
              position: "absolute",
              bottom: "15%",
              left: "40%",
              transform: "translateX(-50%)",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(225,129,31,0.18) 0%, rgba(225,129,31,0) 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }} />
            <img
              src={heroImage}
              alt="Hero Product"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "400px",
                objectFit: "contain",
                objectPosition: "bottom left",
              }}
            />
          </div>

        </div>
      </div>

      {/* Mobile: stack heading → image → content */}
      <style>{`
        @media (max-width: 1100px) and (min-width: 901px) {
          .hero-grid h1 {
            font-size: 44px !important;
          }
        }
        @media (max-width: 900px) {
          .hero-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hero-section {
            padding-top: 48px !important;
            padding-bottom: 56px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto !important;
          }
          .hero-heading {
            grid-column: 1 !important;
            grid-row: 1 !important;
            font-size: 32px !important;
            min-width: 0 !important;
          }
          .hero-title-line {
            white-space: normal !important;
          }
          .hero-content {
            grid-column: 1 !important;
            grid-row: 3 !important;
          }
          .hero-image-wrap {
            grid-column: 1 !important;
            grid-row: 2 !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 16px 0 !important;
          }
          .hero-image-wrap img {
            object-position: center !important;
            max-width: 320px !important;
          }
          .hero-stats {
            gap: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-heading {
            font-size: 28px !important;
          }
          .hero-stats {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
