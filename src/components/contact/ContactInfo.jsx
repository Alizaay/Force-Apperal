import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { contactInfo, mapEmbedUrl } from "../../data/contactData";

const iconMap = {
  email: FiMail,
  phone: FiPhone,
  address: FiMapPin,
};

const ContactInfo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {contactInfo.map((item) => {
        const Icon = iconMap[item.type] || FiMail;
        const isExternal = item.type === "address";

        return (
          <div
            key={item.title}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "16px",
              border: "1px solid #f0eae2",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#e1811f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon style={{ fontSize: "18px", color: "white" }} />
            </div>

            <div style={{ minWidth: 0 }}>
              <h3 style={{
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: 900,
                color: "#e1811f",
                marginBottom: "6px",
                marginTop: 0,
              }}>
                {item.title}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#111",
                    margin: 0,
                    textDecoration: "none",
                  }}
                  className="contact-info-link"
                >
                  {item.value}
                </a>
              ) : (
                <p style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#111",
                  margin: 0,
                }}>
                  {item.value}
                </p>
              )}
            </div>
          </div>
        );
      })}

      <div style={{
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #e5ded6",
      }}>
        <iframe
          title="Forge Apparel location"
          src={mapEmbedUrl}
          width="100%"
          height="200"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <style>{`
        .contact-info-link:hover {
          color: #e1811f;
        }
      `}</style>
    </div>
  );
};

export default ContactInfo;
