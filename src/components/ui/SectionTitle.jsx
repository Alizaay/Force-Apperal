const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`${center && "text-center"} mb-12`}>
      <p className="text-amber-600 uppercase tracking-[4px] text-sm mb-3">
        {subtitle}
      </p>

      <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
