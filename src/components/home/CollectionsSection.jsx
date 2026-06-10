import workWear from "../../assets/images/workwear.jpg";
import formalWear from "../../assets/images/FormalWear.jpg";
import accessories from "../../assets/images/accessories.jpg";
import healthcare from "../../assets/images/HealthCare.png";

import workWearIcon from "../../assets/icons/clothicon.svg";
import formalWearIcon from "../../assets/icons/clothicon.svg";
import accessoriesIcon from "../../assets/icons/clothicon.svg";
import healthcareIcon from "../../assets/icons/healthicon.svg";

const collections = [
  { title: "Work Wear", desc: "Durable hi-vis and industrial uniforms built for safety and performance.", image: workWear, icon: workWearIcon },
  { title: "Formal Wear", desc: "Professional blazers, shirts, and corporate attire tailored to your brand.", image: formalWear, icon: formalWearIcon },
  { title: "Accessories", desc: "Complete your look with ties, bags, and premium branded accessories.", image: accessories, icon: accessoriesIcon },
  { title: "Healthcare", desc: "Comfortable, hygienic scrubs and medical uniforms for healthcare teams.", image: healthcare, icon: healthcareIcon },
];

const CollectionSection = () => {
  return (
    <section className="collections-section" style={{ backgroundColor: "#fff", width: "100%", padding: "70px 0" }}>
      <div className="collections-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#e1811f", fontSize: "10px", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: 500, marginBottom: "10px" }}>
            Categories Section &amp; Testimonial...
          </p>
          <h2 className="collections-heading" style={{ fontSize: "40px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", color: "#111", lineHeight: 1 }}>
            Our Diverse Collection
          </h2>
        </div>

        <div className="collections-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", maxWidth: "980px", margin: "0 auto" }}>
          {collections.map((item, idx) => (
            <div
              key={idx}
              className="collection-card"
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: "8px",
                padding: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                minHeight: "200px",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  width: "36px", height: "36px", backgroundColor: "#faead9",
                  borderRadius: "6px", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "14px",
                }}>
                  <img src={item.icon} alt="" style={{ width: "18px", height: "18px" }} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 900, textTransform: "uppercase", color: "#111", marginBottom: "10px", lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#8c8c8c" }}>
                  {item.desc}
                </p>
              </div>

              <div className="collection-card-image" style={{
                width: "130px", height: "130px", flexShrink: 0,
                backgroundColor: "#fff", borderRadius: "8px",
                overflow: "hidden",
              }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .collections-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .collections-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .collections-heading {
            font-size: 28px !important;
          }
          .collections-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .collections-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .collection-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 20px !important;
            min-height: auto !important;
          }
          .collection-card-image {
            width: 100% !important;
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CollectionSection;
