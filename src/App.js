import React ,{useState, useEffect} from 'react';
//import React from 'react';
import './App.css';
import Form from './component/Form';
 import Header from './component/Header';
import TodosList from './component/TodoList';



const App = () => {
  const intialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const[todos, setTodos] = useState(intialState);
  const[editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.getItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
            <Header />
            </div> 
                <div>
              <Form 
              input ={input}
              setInput= {setInput}
              todos = {todos}
              setTodos = {setTodos} 
              editTodo = {editTodo}
              setEditTodo = {setEditTodo}
              />
                </div>
                <div>
                  <TodosList todos={todos} setTodos={setTodos}  
                  setEditTodo={setEditTodo} />
                </div>

        </div>
    </div>
  );
}
export default App;
