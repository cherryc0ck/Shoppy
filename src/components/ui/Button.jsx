import React from "react";

const Button = ({ disabled, text, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
