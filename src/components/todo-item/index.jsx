import React from "react";
import Button from "../button";
import styles from './styles.module.scss'

const TodoItem = (props) => {
  const { isComplete, text, onClick, onDelete } = props;
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };
  return (
    <div
      onClick={onClick}
      style={{
        textDecoration: isComplete ? "line-through" : "none",
      }}
      className={styles["todo-list-item"]}>
      {text}
      <Button onClick={handleDelete}>&#128465;</Button>
    </div>
  );
};

export default TodoItem;
