
import './App.css';
import { useState,useEffect } from 'react';
import Form from './components/contents/form';
import List from './components/contents/list';
  

function App() {
const [todos, setTodos] = useState([
    { text: "what should we do for today?", done: false },
    { text: "LEARN React ", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React ", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React ", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React ", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
  ]);

  useEffect(() => {}, [todos]);



  return (
    <div className="App">
     
        <div>
        <h1>TODOS</h1>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />




    </div>
  );
}

export default App;
