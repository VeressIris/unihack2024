const Button = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`relative h-12 w-40 overflow-hidden border-2 border-[hsl(54,81%,60%)]
           text-white font-semibold shadow-2xl transition-all duration-400 transform 
           hover:scale-110 before:absolute before:top-1/2 before:h-0 before:w-64 
           before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[hsl(54,81%,60%)] before:duration-300
            hover:text-black hover:bg-[hsl(54,81%,60%)] hover:before:h-64 hover:before:-translate-y-32 ${className}`}
      >
        <span className="relative z-10">{text}</span>
      </button>
    );
  };
  
  export default Button;

