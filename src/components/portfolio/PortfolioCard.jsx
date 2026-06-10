const sizeHeights = {
  large: "350px",
  small: "230px",
  medium: "280px",
};

const PortfolioCard = ({ project }) => {
  const height = sizeHeights[project.size] || sizeHeights.medium;

  return (
    <article
      className="portfolio-card"
      style={{
        position: "relative",
        height,
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#111",
        cursor: "pointer",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="portfolio-card-image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
        }}
      />

      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
      }} />

      <div style={{
        position: "absolute",
        left: "10px",
        bottom: "10px",
        zIndex: 1,
      }}>
        <p style={{
          color: "#e1811f",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          fontWeight: 700,
          marginBottom: "3px",
          marginTop: 0,
        }}>
          {project.category}
        </p>

        <h3 style={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 1.15,
          margin: 0,
        }}>
          {project.title}
        </h3>
      </div>

      <style>{`
        .portfolio-card:hover .portfolio-card-image {
          transform: scale(1.05);
        }
      `}</style>
    </article>
  );
};

export default PortfolioCard;
