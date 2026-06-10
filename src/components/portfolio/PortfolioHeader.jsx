const PortfolioHeader = () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      marginBottom: "42px",
    }}>
      <p style={{
        color: "#e1811f",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: 500,
        marginBottom: "10px",
        marginTop: 0,
      }}>
        Portfolio
      </p>

      <h1 style={{
        maxWidth: "900px",
        fontSize: "52px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 0.95,
        letterSpacing: "-2px",
        color: "#111",
        margin: 0,
      }} className="portfolio-hero-title">
        Our Apparel Projects &amp;
        <br />
        <span style={{ color: "#e1811f" }}>Client Collections.</span>
      </h1>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-hero-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioHeader;
