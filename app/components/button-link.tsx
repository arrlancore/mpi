// components/GameButtonLink.tsx
import React, { useState } from "react";
import { Link, LinkProps } from "@remix-run/react";

interface GameButtonLinkProps extends LinkProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outlined";
}

const GameButtonLink: React.FC<GameButtonLinkProps> = ({
  children,
  to,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClassname = {
    default:
      "relative px-6 py-3 font-bold rounded-lg transition-all duration-300 overflow-hidden bg-gray-300 hover:scale-105",
    primary: `relative px-6 py-3 font-bold rounded-lg shadow-md transition-all duration-300 overflow-hidden bg-gradient-to-r ${
      isHovered ? "from-blue-200 to-blue-400" : "from-blue-300 to-blue-500"
    } hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200`,
    outlined:
      "relative text-blue-800 px-6 py-3 font-bold rounded-lg shadow-md transition-all duration-300 overflow-hidden border border-blue-400 bg-transparent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200",
  };

  return (
    <Link to={to} {...rest}>
      <button
        className={variantClassname[rest.variant || "primary"]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{children}</span>
        {/* Optional Shine Effect */}
        <span
          className={`absolute inset-0 bg-white opacity-0 
                     ${isHovered ? "animate-shine" : ""}`}
        />
      </button>
    </Link>
  );
};

export default GameButtonLink;
