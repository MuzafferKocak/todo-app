
import './App.css';
import TodoList from './components/TodoList';
import Header from "./components/Header"
import { useState } from 'react';

const todoList = [
  {
    id: 1,
    text: "JavaScript",
    completed: false,
},
  {
    id: new Date().getTime(),
    text: "React",
    completed: false,
}

]

function App() {
  const [todos, setTodos]= useState(todoList)
  return (
    <div className="container">
    <Header setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
