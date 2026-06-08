const Container = ({ children, className = "", center = false }) => {
  const centerClasses = center
    ? "flex flex-col items-center justify-center text-center"
    : "";

  return (
    <div
      className={`
        w-full
        max-w-[1400px]
        mx-auto

        px-8
        sm:px-10
        lg:px-12

        ${centerClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;