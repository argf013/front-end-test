const Button = ({ label, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-primary text-white py-2.5 px-4.5 rounded-full text-sm",
    secondary: "text-dark text-sm font-medium"
  };

  return (
    <button 
      className={`${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;