import React from "react";
import { useState } from "react";
import styles from "./App..module.scss";
import Input from "./components/input";
import Button from "./components/button";
import TodoItem from "./components/todo-item";
import { useDispatch, useSelector } from "react-redux";
import {toggleTodo, deleteTodo, addTodo, allDeleteTodo} from './redux/todo/actions'
import { getTodos } from './redux/todo/selectors'
import { filterTodo } from "./redux/filter/action";
import { getActiveFilter } from "./redux/filter/selectors";


function App() {
  const todos = useSelector(getTodos)
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()

  const handleInputChange = (value) => {
    setInputValue(value);
  };



  

  const handleClickAddButton = () => {
    const trimedValue = inputValue.trim()
    if (trimedValue !== "") {
      dispatch(addTodo(trimedValue));
      setInputValue("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleAllDeleteTodo = (id) => {
    
  }
  
  const activeTodoFilter = useSelector(getActiveFilter)






  const renderTodoItem = (todo) => {
    
    return (
      <TodoItem
      key={todo.id}
      isComplete = {todo.isComplete}
      text= {todo.text}
      onClick={() => handleToggleTodo(todo.id)}
      onDelete={() => handleDeleteTodo(todo.id)} 
      />
    )
  }
  const filterTodos = (todos, filter) => {
    if (filter === "SHOW_ALL") {
      return todos
    }
    if (filter === "SHOW_ACTIVE") {
      return todos.filter(todo => !todo.isComplete)
    }
    if (filter === "SHOW_COMPLETED") {
      return todos.filter(todo => todo.isComplete)
    }
    return todos
  }
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <div className={styles.container}>
      <form onClick={handleClick}>
        <Input 
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick = {handleClickAddButton}>
          +
        </Button>
      </form>
      <div className={styles.todoList}>
      {filterTodos(todos, activeTodoFilter).map(renderTodoItem)}
      </div>
      <div className={styles["filter-buttons"]}>
        <Button onClick={() => dispatch(filterTodo("SHOW_ALL"))}>All</Button>
        <Button onClick={() => dispatch(filterTodo("SHOW_ACTIVE"))}>Active</Button>
        <Button onClick={() => dispatch(filterTodo("SHOW_COMPLETED"))}>Completed</Button>
        <Button onClick={handleAllDeleteTodo}>All delete</Button>
      </div>
    </div>
  );
}

export default App;
