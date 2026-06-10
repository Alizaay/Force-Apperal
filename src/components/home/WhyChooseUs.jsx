import qualityIcon from "../../assets/icons/1.svg";
import productionIcon from "../../assets/icons/2.svg";
import brandingIcon from "../../assets/icons/3.svg";
import deliveryIcon from "../../assets/icons/4.svg";

const features = [
  { title: "Consistent Quality", desc: "Sourcing the world's most resilient textiles for extreme performance.", icon: qualityIcon },
  { title: "Bulk Production", desc: "Streamlined manufacturing pipelines for high-volume enterprise orders.", icon: productionIcon },
  { title: "Custom Branding", desc: "In-house studio for precision logo application and custom trims.", icon: brandingIcon },
  { title: "Reliable Delivery", desc: "Global logistics network ensuring your team is geared up on time.", icon: deliveryIcon },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" style={{ backgroundColor: "white", width: "100%", padding: "70px 0" }}>
      <div className="why-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="why-heading" style={{ fontSize: "40px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", color: "#111", lineHeight: 1, marginBottom: "12px" }}>
            Why Choose Us
          </h2>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", color: "#e1811f", fontWeight: 500 }}>
            Our Strength Lies In Our Roster Of Key Features
          </p>
        </div>

        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
          {features.map((f, idx) => (
            <div key={idx} style={{
              backgroundColor: "#f4f4f4",
              borderRadius: "8px",
              padding: "20px",
              minHeight: "250px",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                width: "36px", height: "36px", backgroundColor: "#faead9",
                borderRadius: "7px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "18px",
              }}>
                <img src={f.icon} alt="" style={{ width: "20px", height: "20px" }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 900, textTransform: "uppercase", color: "#111", marginBottom: "10px", lineHeight: 1.3 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#8c8c8c" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .why-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .why-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .why-heading {
            font-size: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .why-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
