const NewsletterBox = () => {
  return (
    <div className="newsletter-box" style={{
      backgroundColor: "#f3f1ee",
      borderRadius: "6px",
      padding: "28px 26px",
      width: "100%",
      border: "1px solid #ebe6df",
    }}>
      <p className="newsletter-label" style={{
        color: "#666",
        fontSize: "34px",
        fontWeight: 300,
        marginBottom: "28px",
        marginTop: 0,
      }}>
        Newsletter
      </p>

      <h3 style={{
        color: "#111",
        fontSize: "18px",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 1.1,
        marginBottom: "24px",
        marginTop: 0,
      }}>
        Get Our Monthly
        <br />
        Manufacturing
        <br />
        Notes
      </h3>

      <p style={{
        color: "#777",
        fontSize: "16px",
        lineHeight: 1.65,
        marginBottom: "28px",
        marginTop: 0,
      }}>
        Fabric guides, case studies, and behind-the-floor notes. One email a
        month.
      </p>

      <input
        type="email"
        placeholder="Your@gmail.com"
        className="newsletter-input"
        style={{
          width: "100%",
          height: "38px",
          padding: "0 12px",
          backgroundColor: "#fff",
          border: "1px solid #e1811f",
          borderRadius: "6px",
          fontSize: "12px",
          outline: "none",
          marginBottom: "12px",
          fontFamily: "inherit",
        }}
      />

      <button
        type="button"
        className="newsletter-btn"
        style={{
          width: "100%",
          height: "38px",
          borderRadius: "6px",
          backgroundColor: "#e1811f",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 500,
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Subscribe
      </button>

      <style>{`
        .newsletter-input:focus {
          box-shadow: 0 0 0 3px rgba(225, 129, 31, 0.15);
        }
        .newsletter-input::placeholder {
          color: #bbb;
        }
        .newsletter-btn:hover {
          background-color: #d07018;
          box-shadow: 0 4px 12px rgba(225, 129, 31, 0.35);
        }
        @media (max-width: 640px) {
          .newsletter-label {
            font-size: 24px !important;
          }
          .newsletter-box {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsletterBox;
