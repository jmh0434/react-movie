import { useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ''){
      return; 
    }
    else {
      setToDos((currentArray)=> [toDo, ...currentArray]);
      setToDo("");
    }
  }
  
  return (
    <div>
      <h1>Todo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo"
        ></input>
        <button>Click</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
