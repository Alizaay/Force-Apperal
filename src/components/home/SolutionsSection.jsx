import mainSolution from "../../assets/images/accessories.jpg";
import workWear from "../../assets/images/workwear.jpg";
import heroImage from "../../assets/images/heroImage.png";
import formalWear from "../../assets/images/FormalWear.jpg";

const bullets = [
  "With a strong focus on fabric quality,",
  "precision tailoring, and custom production,",
  "we help brands and teams stand out with confidence.",
];

const SolutionsSection = () => {
  return (
    <section className="solutions-section" style={{ backgroundColor: "#f3efea", width: "100%", padding: "70px 0" }}>
      <div className="solutions-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <h2 className="solutions-heading" style={{ fontSize: "42px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", color: "#111", lineHeight: 1.1, marginBottom: "24px" }}>
          We Deliver Complete{" "}
          <span style={{ color: "#e1811f" }}>Apparel Solutions</span>
        </h2>
        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#333", marginBottom: "24px", textAlign: "left" }}>
              We deliver complete apparel solutions across sportswear, formal clothing, and industrial uniforms.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {bullets.map((point, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                  <span style={{
                    width: "7px", height: "7px", backgroundColor: "#e1811f",
                    borderRadius: "2px", flexShrink: 0, marginTop: "7px",
                  }} />
                  <span style={{ fontSize: "16px", lineHeight: 1.5, color: "#333", textAlign: "left" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="solutions-collage" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px", height: "340px" }}>
            <div style={{ gridRow: "1 / 3", backgroundColor: "#fff", borderRadius: "6px", padding: "8px", overflow: "hidden" }}>
              <img src={mainSolution} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
            </div>
            <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "8px", overflow: "hidden" }}>
              <img src={workWear} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "8px", overflow: "hidden" }}>
                <img src={heroImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
              </div>
              <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "8px", overflow: "hidden" }}>
                <img src={formalWear} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solutions-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .solutions-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .solutions-heading {
            font-size: 28px !important;
          }
          .solutions-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .solutions-collage {
            height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .solutions-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .solutions-heading {
            font-size: 24px !important;
          }
          .solutions-collage {
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;
