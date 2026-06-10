const FAQHero = () => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto 55px",
    }}>
      <p style={{
        color: "#e1811f",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontWeight: 500,
        marginBottom: "16px",
        marginTop: 0,
      }}>
        Frequently Asked
      </p>

      <h1 style={{
        fontSize: "34px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 1.05,
        letterSpacing: "-1px",
        color: "#111",
        margin: 0,
      }} className="faq-hero-title">
        Answers, Before You
        <br />
        Ask.
      </h1>

      <div style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#bdb7af",
        marginTop: "28px",
      }} />

      <style>{`
        @media (max-width: 768px) {
          .faq-hero-title {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQHero;
