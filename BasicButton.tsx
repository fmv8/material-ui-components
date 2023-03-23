import React from "react";

const buttonStyle = {
  margin: "10px 0"
};

const Basic = ({ label, isDisabled, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    disabled={isDisabled}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Basic;
