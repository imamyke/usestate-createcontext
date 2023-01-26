import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { TodosContext } from './Contexts';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Have a dinner', completed: true },
    { id: 2, title: 'running', completed: false }
  ])

  const ListItem = (props) => {
    return <li onClick={() => {
      const newTodos = props.todos.map((todo, index) => {
        if (props.index === index) {
          return {
            ...props.todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      setTodos(newTodos)
    }}>{props.title} {props.completed ? '✅' : '尚未完成'}</li>
  }

  return (
    <TodosContext.Provider value={{
      todos,
      ListItem
    }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList />
        </header>
      </div>
    </TodosContext.Provider>
  );
}

export default TodoApp;
