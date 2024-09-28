import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GameButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      {...rest}
      className={`relative px-6 py-3 font-bold rounded-lg shadow-md 
                  transition-all duration-300 overflow-hidden
                  bg-gradient-to-r ${
                    isHovered
                      ? "from-blue-200 to-blue-400"
                      : "from-blue-300 to-blue-500"
                  }
                  hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-blue-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      {/* Optional: Add a subtle shine effect on hover */}
      <span
        className={`absolute inset-0 bg-white opacity-0 
                   ${isHovered ? "animate-shine" : ""}`}
      />
    </button>
  );
};

export default GameButton;
