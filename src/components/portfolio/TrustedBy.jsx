import { trustedBrands } from "../../data/portfolioData";

const TrustedBy = () => {
  return (
    <section style={{ marginTop: "56px" }}>
      <div
        className="trusted-by-section"
        style={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "14px",
          padding: "36px 40px",
          border: "1px solid #f0eae2",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.07)",
          background: "linear-gradient(135deg, rgba(225,129,31,0.08) 0%, #fff 38%, #fff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "5px",
          height: "100%",
          backgroundColor: "#e1811f",
        }} />

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "28px",
        }}>
          <div>
            <p style={{
              color: "#e1811f",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontWeight: 600,
              marginBottom: "10px",
              marginTop: 0,
            }}>
              Trusted By
            </p>

            <h2 style={{
              fontSize: "28px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              color: "#111",
              margin: 0,
            }} className="trusted-by-title">
              Brands That Choose Our Craft
            </h2>
          </div>

          {/* <p style={{
            fontSize: "14px",
            color: "#666",
            maxWidth: "320px",
            lineHeight: 1.6,
            margin: 0,
          }}>
            From hospitality to healthcare, leading teams trust us for quality apparel production.
          </p> */}
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          {trustedBrands.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="trusted-brand-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 22px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "0.5px",
                backgroundColor: "#f7f4ef",
                border: "1px solid #ebe6df",
                transition: "all 0.25s ease",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .trusted-brand-pill:hover {
          background-color: #e1811f !important;
          border-color: #e1811f !important;
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(225, 129, 31, 0.35);
        }
        @media (max-width: 768px) {
          .trusted-by-section {
            padding: 28px 24px !important;
          }
          .trusted-by-title {
            font-size: 22px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
