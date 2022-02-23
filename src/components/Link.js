import React from "react";
import "./link.scss";

const Button = ({ children, href }) => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};

export default Button;
