import React from "react";
import ButtonConstants from "./ButtonConstants";
import ButtonType from "./Type";

const Button: React.FC<ButtonType> = ({ label = "button", clickHandler }) => {
  const buttonClass = "btn-primary btn-sm b-rd-primary b-rd-rt";
  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (clickHandler) clickHandler();
      }}
      data-testid={ButtonConstants.ButtonTestId.toString()}
    >
      <span className="btn-fw-s ft-family btn-md-font">{label}</span>
    </button>
  );
};

export default Button;
