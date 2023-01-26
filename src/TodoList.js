import { useContext } from 'react';
import './App.css';
import {TodosContext} from './Contexts'

const TodoList = () => {
  const {todos, ListItem} = useContext(TodosContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <ul>
          {
            todos.map((todo, index) => {
              return <ListItem key={todo.id} index={index} title={todo.title} todo={todo} todos={todos} completed={todo.completed} />
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default TodoList;
