const fieldLabel = {
  display: "block",
  fontSize: "12px",
  color: "#9a9a9a",
  marginBottom: "6px",
};

const fieldInput = {
  width: "100%",
  height: "42px",
  padding: "0 12px",
  borderRadius: "6px",
  border: "1px solid #e5ded6",
  backgroundColor: "#fafafa",
  fontSize: "12px",
  color: "#333",
  outline: "none",
  fontFamily: "inherit",
};

const ContactForm = () => {
  return (
    <form
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "24px",
        border: "1px solid #f0eae2",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "14px",
          rowGap: "14px",
        }}
        className="contact-form-grid"
      >
        <div>
          <label style={fieldLabel}>Full Name</label>
          <input
            className="contact-field"
            style={fieldInput}
            placeholder="Type here"
          />
        </div>

        <div>
          <label style={fieldLabel}>Company</label>
          <input
            className="contact-field"
            style={fieldInput}
            placeholder="Type here"
          />
        </div>

        <div>
          <label style={fieldLabel}>Email</label>
          <input
            type="email"
            className="contact-field"
            style={fieldInput}
            placeholder="Type here"
          />
        </div>

        <div>
          <label style={fieldLabel}>Phone</label>
          <input
            className="contact-field"
            style={fieldInput}
            placeholder="Type here"
          />
        </div>
      </div>

      <div style={{ marginTop: "14px" }}>
        <label style={fieldLabel}>Inquiry Type</label>
        <select
          className="contact-field"
          style={{ ...fieldInput, color: "#777", cursor: "pointer" }}
          defaultValue=""
        >
          <option value="" disabled>Type here</option>
          <option>Custom Uniforms</option>
          <option>Bulk Apparel</option>
          <option>Sportswear</option>
        </select>
      </div>

      <div style={{ marginTop: "14px" }}>
        <label style={fieldLabel}>Tell us about your project</label>
        <textarea
          className="contact-field contact-textarea"
          style={{
            ...fieldInput,
            height: "112px",
            padding: "12px",
            resize: "none",
          }}
          placeholder="Type here"
        />
      </div>

      <button
        type="submit"
        className="contact-submit-btn"
        style={{
          marginTop: "16px",
          height: "42px",
          width: "100%",
          padding: "0 24px",
          borderRadius: "6px",
          backgroundColor: "#e1811f",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Send Inquiry
      </button>

      <style>{`
        .contact-field:focus {
          border-color: #e1811f;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(225, 129, 31, 0.12);
        }
        .contact-field::placeholder {
          color: #bbb;
        }
        .contact-submit-btn:hover {
          background-color: #d07018;
          box-shadow: 0 4px 12px rgba(225, 129, 31, 0.35);
        }
        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
