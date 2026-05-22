const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        max-w-[1280px]
        mx-auto
        px-5
        lg:px-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;