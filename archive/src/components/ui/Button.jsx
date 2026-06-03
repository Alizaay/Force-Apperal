const Button = ({
  children,
  className = "",
  variant = "primary",
}) => {
  const variants = {
    primary:
      "bg-amber-600 hover:bg-amber-700 text-white",

    outline:
      "border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",

    dark:
      "bg-black text-white hover:bg-neutral-800",
  };
  return (
    <button
      className={`
        bg-[#e58a1f]
        hover:bg-[#cf7814]
        text-white
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;