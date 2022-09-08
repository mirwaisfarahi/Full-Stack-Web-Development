import { useState } from "react";
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const HandleInput = (event) => {
    setInputValue(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: inputValue,
      completed: false
    };

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id)
    setTodoList(newTodoList);
  }

  const completedTask = (id) => {
    setTodoList(todoList.map(task => {
      return task.id === id ? {...task, completed: !task.completed}: task;
    } ))
  }

  return (
    <div className="App">
      <input onChange={HandleInput} />
      <button onClick={addTask}>Task</button>
      {todoList.map((task) => {
        return (
          <div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => completedTask(task.id)}>{task.completed ? "Completed" : "Not Completed"}</button>
            <h3 style={{backgroundColor: task.completed ? "green" : "red"}}>{task.taskName}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default App;
