import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button type={type} className="login-button">
      {text}
    </button>
  );
};

export default Button;
