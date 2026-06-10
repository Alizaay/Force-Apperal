const MissionVision = () => {
  return (
    <section style={{ backgroundColor: "#f3eee9", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "58px 24px",
      }}>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "58px",
          }}
          className="mission-vision-grid"
        >
          <div style={{
            borderLeft: "1px solid #e1811f",
            paddingLeft: "10px",
          }}>
            <p style={{
              fontSize: "12px",
              color: "#111",
              marginBottom: "8px",
              lineHeight: 1,
              marginTop: 0,
            }}>
              01
            </p>

            <h3 style={{
              fontSize: "28px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#e1811f",
              marginBottom: "10px",
              marginTop: 0,
            }}>
              Mission
            </h3>

            <p style={{
              fontSize: "14px",
              lineHeight: 1.25,
              color: "#111",
              maxWidth: "350px",
              margin: 0,
            }}>
              Deliver premium-quality custom apparel solutions with precision,
              speed and innovation.
            </p>
          </div>

          <div style={{
            borderLeft: "1px solid #111",
            paddingLeft: "10px",
          }}>
            <p style={{
              fontSize: "12px",
              color: "#111",
              marginBottom: "8px",
              lineHeight: 1,
              marginTop: 0,
            }}>
              02
            </p>

            <h3 style={{
              fontSize: "28px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#e1811f",
              marginBottom: "10px",
              marginTop: 0,
            }}>
              Vision
            </h3>

            <p style={{
              fontSize: "14px",
              lineHeight: 1.25,
              color: "#111",
              maxWidth: "350px",
              margin: 0,
            }}>
              Become a globally trusted apparel manufacturing partner for
              businesses and organizations.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-vision-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
