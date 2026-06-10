import { teamMembers } from "../../data/aboutData";

const TeamSection = () => {
  return (
    <section style={{ backgroundColor: "#fff", width: "100%", overflow: "hidden" }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "58px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "22px" }}>
            <p style={{
              color: "#e1811f",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2.2px",
              marginBottom: "8px",
              marginTop: 0,
            }}>
              Meet The Team
            </p>

            <h2 style={{
              fontSize: "30px",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "-0.4px",
              color: "#111",
              margin: 0,
            }}>
              The People Behind Every Stitch.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "10px",
            }}
            className="team-grid"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card"
                style={{
                  backgroundColor: "#f3f3f3",
                  borderRadius: "6px",
                  overflow: "hidden",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div style={{ height: "165px", overflow: "hidden" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.35s ease",
                    }}
                  />
                </div>

                <div style={{ padding: "7px 8px" }}>
                  <h3 style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1,
                    color: "#111",
                    marginBottom: "4px",
                    marginTop: 0,
                  }}>
                    {member.name}
                  </h3>

                  <p style={{
                    fontSize: "12px",
                    lineHeight: 1,
                    color: "#777",
                    margin: 0,
                  }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        .team-card:hover .team-card-image {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
