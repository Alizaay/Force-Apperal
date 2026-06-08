const PortfolioCard = ({ project }) => {
  const heightClass =
    project.size === "large"
      ? "h-[350px]"
      : project.size === "small"
      ? "h-[230px]"
      : "h-[280px]";

  return (
    <div
      className={`
        relative
        ${heightClass}

        rounded-[10px]
        overflow-hidden

        bg-black

        group
      `}
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-full
          object-cover

          transition-all
          duration-500

          group-hover:scale-[1.05]
        "
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute left-[10px] bottom-[10px]">
        <p
          className="
            text-[#e1811f]
            text-[14px]
            uppercase
            tracking-[0.8px]
            font-bold
            mb-[3px]
          "
        >
          {project.category}
        </p>

        <h3
          className="
            text-white
            text-[18px]
            font-black
            uppercase
            leading-[1.15]
          "
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;