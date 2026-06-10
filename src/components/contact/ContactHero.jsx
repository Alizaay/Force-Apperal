const ContactHero = () => {
  return (
    <div style={{ width: "100%", marginBottom: "40px" }}>
      <p style={{
        color: "#e1811f",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontWeight: 500,
        marginBottom: "14px",
        marginTop: 0,
      }}>
        Contact
      </p>

      <h1 style={{
        fontSize: "42px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 0.95,
        letterSpacing: "-1px",
        color: "#111",
        margin: 0,
      }} className="contact-hero-title">
        Let&apos;s Build Something
        <br />
        That Lasts.
      </h1>

      <style>{`
        @media (max-width: 768px) {
          .contact-hero-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactHero;
