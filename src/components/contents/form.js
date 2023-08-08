import {useState} from 'react'
import App from '../../App';
function Form({setTodos,todos}) {


 const formSubmit=(e)=> {
e.preventDefault();

setTodos([ ...todos,{ text:e.target.value ,done:false }])
e.target.value="";
 };



  return (
    <div className="form">
    <form onSubmit={formSubmit} className="formWidth">
      <input
        type="checkbox"
        onChange={(e) => {
          const newTodos = [...todos];
          newTodos.map((todo) => (todo.done = e.target.checked));
          setTodos(newTodos);
        }}
      />
      <input
        className="input"
        name="input"
        placeholder="What needs to be done?"
      />
    </form>
    </div>
  )
}

export default Form;
