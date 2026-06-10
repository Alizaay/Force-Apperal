import { principles } from "../../data/aboutData";

const Principles = () => {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "56px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <p style={{
              color: "#e1811f",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "9px",
              marginTop: 0,
            }}>
              Our Service
            </p>

            <h2 className="principles-heading" style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "30px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.08,
              letterSpacing: "-0.4px",
              color: "#111",
            }}>
              Six Principles That Shape Every Decision On The Floor.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
            className="principles-grid"
          >
            {principles.map((item) => (
              <div
                key={item.id}
                className="principle-card"
                style={{
                  backgroundColor: "#f7f7f7",
                  minHeight: "120px",
                  padding: "16px 18px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <p style={{
                  fontSize: "14px",
                  color: "#111",
                  marginBottom: "9px",
                  lineHeight: 1,
                  marginTop: 0,
                }}>
                  {item.id}
                </p>

                <h3 style={{
                  fontSize: "18px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#111",
                  marginBottom: "10px",
                  lineHeight: 1,
                  marginTop: 0,
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: "14px",
                  lineHeight: 1.45,
                  color: "#9a9a9a",
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .principle-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        @media (max-width: 1024px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
          .principles-heading {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Principles;
