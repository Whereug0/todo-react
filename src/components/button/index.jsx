import React from "react";
import styles from './styles.module.scss'
const Button = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
