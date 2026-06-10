import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "60px 24px",
      }}>
        <div
          style={{
            width: "100%",
            maxWidth: "950px",
            backgroundColor: "#e1811f",
            borderRadius: "12px",
            minHeight: "250px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 240px",
            alignItems: "center",
          }}
          className="about-cta-card"
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            padding: "50px 30px 50px 80px",
          }} className="about-cta-content">
            <p style={{
              color: "#fff",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontWeight: 500,
              marginBottom: "22px",
              marginTop: 0,
            }}>
              Let&apos;s Build Something
            </p>

            <h2 style={{
              color: "#fff",
              fontSize: "42px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              maxWidth: "560px",
              margin: 0,
            }} className="about-cta-title">
              Need Custom
              <br />
              Uniforms Or Bulk
              <br />
              Apparel Solutions?
            </h2>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            padding: "50px 40px 50px 0",
          }} className="about-cta-actions">
            <Link
              to="/contact"
              className="about-cta-btn-primary"
              style={{
                width: "170px",
                height: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                backgroundColor: "#fff",
                color: "#111",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
            >
              Get a Quote ↗
            </Link>

            <Link
              to="/contact"
              className="about-cta-btn-secondary"
              style={{
                width: "170px",
                height: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                border: "1.5px solid #111",
                color: "#111",
                backgroundColor: "transparent",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
            >
              Start your order
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .about-cta-btn-primary:hover {
          transform: scale(1.02);
        }
        .about-cta-btn-secondary:hover {
          background-color: #111 !important;
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .about-cta-card {
            grid-template-columns: 1fr !important;
          }
          .about-cta-content {
            padding: 40px 28px 20px !important;
            text-align: center;
            align-items: center;
          }
          .about-cta-actions {
            padding: 0 28px 40px !important;
          }
          .about-cta-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;
