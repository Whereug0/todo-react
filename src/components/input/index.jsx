import React from "react";
import styles from './styles.module.scss'
const Input = ({ onChange, value }) => {
  return (
    <div className={styles["input-box"]}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)} 
        type="text"
      />
    </div>
  );
};

export default Input;

