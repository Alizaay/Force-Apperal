import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = ({ projects }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-[10px]

          max-w-[1200px]
          w-full
          leading-[1.15]
        "
      >
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;