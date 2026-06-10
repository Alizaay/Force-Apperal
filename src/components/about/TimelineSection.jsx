import { timeline } from "../../data/aboutData";

const TimelineSection = () => {
  return (
    <section style={{ backgroundColor: "#f7f7f7", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "52px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <p style={{
              color: "#e1811f",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
              marginTop: 0,
            }}>
              Timeline
            </p>

            <h2 style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "30px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.08,
              letterSpacing: "-0.3px",
              color: "#111",
            }}>
              Sixteen Years, One Obsession With Quality.
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "8px",
                right: "8px",
                height: "2px",
                backgroundColor: "#e1811f",
              }}
              className="timeline-line"
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "28px",
              }}
              className="timeline-grid"
            >
              {timeline.map((item) => (
                <div
                  key={item.year}
                  style={{ position: "relative", paddingTop: "38px" }}
                >
                  <span style={{
                    position: "absolute",
                    top: "6px",
                    left: "2px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    backgroundColor: "#e1811f",
                  }} />

                  <h3 style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    color: "#111",
                    marginBottom: "10px",
                    lineHeight: 1,
                    marginTop: 0,
                  }}>
                    {item.year}
                  </h3>

                  <h4 style={{
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "#111",
                    marginBottom: "8px",
                    lineHeight: 1,
                    marginTop: 0,
                  }}>
                    {item.title}
                  </h4>

                  <p className="timeline-desc" style={{
                    fontSize: "14px",
                    lineHeight: 1.45,
                    color: "#777",
                    maxWidth: "120px",
                    margin: 0,
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .timeline-line {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-desc {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
