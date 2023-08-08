import {useState} from 'react'
import App from '../../App';
import Form from './form';
function List({todos,setTodos}) {
    const [filter,setFilter] =useState("");

    const deleteTodo =(i)=> {
    const newTodo =[...todos];
    newTodo.delete(i,1);
    setTodos(newTodo);
    }
    const toggleDone = (i) => {
        const newTodos = [...todos];
        newTodos[i].done = !newTodos[i].done;
        setTodos(newTodos);
      };
    
      const deleteDones = () => {
        const newTodos = [];
        todos.forEach((todo) => {
          if (!todo.done) {
            newTodos.push(todo);
          }
        });
        setTodos(newTodos);
      };
    
      const filteredTodos = todos.filter((todo) => {
        if (filter === "all") {
          return true;
        } else if (filter === "done") {
          return todo.done;
        } 
        else return !todo.done;
        
      });
  return (
    <div className="list">
    <div>
      <ul>
        {filteredTodos.map((todo, i) => (
          <li key={i}>
            <input
              className="chckBtn"
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(i)}
            />
            <span className="todo">{todo.text}</span>
            <button className="dltBtn" onClick={() => deleteTodo(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="buttons">
      <span className="count">{todos.length} left</span>
      <button onClick={() => setFilter("all")}>All Todos</button>
      <button onClick={() => setFilter("done")}>Done Todos</button>
      <button onClick={() => setFilter("active")}>Active Todos</button>
      <button onClick={() => deleteDones()}>clear completed</button>
    </div>
  </div>
  )
}

export default List;
