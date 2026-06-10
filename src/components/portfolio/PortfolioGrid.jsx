import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = ({ projects }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        width: "100%",
        lineHeight: 1.15,
      }}
      className="portfolio-grid"
    >
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioGrid;
