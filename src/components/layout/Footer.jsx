const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f3efea", borderTop: "1px solid #dfd9d2" }}>
      <div className="footer-inner" style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px 50px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "60px" }}>
          <div>
            <h2 className="footer-brand" style={{ fontSize: "36px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-2px", color: "#111", marginBottom: "20px" }}>
              Forge Apparel
            </h2>
            <p style={{ fontSize: "12px", lineHeight: 1.5, color: "#9b9b9b", maxWidth: "280px" }}>
              Engineered for precision. Built for the elite. The global standard in high-performance textile solutions.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#e1811f", fontWeight: 500, marginBottom: "16px" }}>
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "12px", lineHeight: 1, color: "#9b9b9b" }}>
              <p>Industrial Hub 04, Sector 12</p>
              <p>Forge Precision Plaza</p>
              <p>info@forgeapparel.com</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#e1811f", fontWeight: 500, marginBottom: "16px" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Sustainability", "Bulk Orders", "Custom Branding", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link} style={{ fontSize: "12px", lineHeight: 1, color: "#9b9b9b", cursor: "pointer" }}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid silver", marginTop: "60px", paddingTop: "24px", textAlign: "center" }}>
          <p className="footer-copy" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#555" }}>
            © 2024 Forge Apparel. Designed by Alliance Software Solutions. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-inner {
            padding: 48px 20px 32px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-brand {
            font-size: 28px !important;
          }
          .footer-copy {
            font-size: 9px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
