import React from "react";
import ButtonConstants from "./ButtonConstants";
import ButtonType from "./Type";
import "./Button.css";

const Button: React.FC<ButtonType> = ({
  color = "blue",
  label = "button",
  clickHandler,
}) => {
  const buttonClass = `twk-button twk-button-color-${color}`;
  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (clickHandler) clickHandler();
      }}
      data-testid={ButtonConstants.ButtonTestId.toString()}
    >
      <span className="twk-text">{label}</span>
    </button>
  );
};

export default Button;
