const AboutIntro = () => {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "70px 24px",
      }}>
        <div style={{
          width: "100%",
          maxWidth: "760px",
          textAlign: "center",
          margin: "0 auto",
        }}>
          <p style={{
            color: "#e1811f",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "2.8px",
            fontWeight: 500,
            marginBottom: "14px",
            marginTop: 0,
          }}>
            Our Story
          </p>

          <h2 style={{
            maxWidth: "900px",
            margin: "0 auto 20px",
            fontSize: "32px",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.12,
            letterSpacing: "-0.8px",
            color: "#111",
          }} className="about-intro-title">
            Forge Apparel Was Built To Redefine Custom Uniforms And
            Professional Apparel Manufacturing.
          </h2>

          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: 1.65,
            color: "#444",
          }} className="about-intro-desc">
            With years of experience in fabric sourcing, production,
            customization and global supply, we help businesses create apparel
            that reflects professionalism, durability and brand identity. We&apos;re
            a 400-person team across two facilities, but we still treat every
            order like our first.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-intro-title {
            font-size: 28px !important;
          }
          .about-intro-desc {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutIntro;
