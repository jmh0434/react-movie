import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]); // 배열에 toDo를 넣어라
    setTodo("");
  }

  
  return (
    <div>
     <h1>To-Do List({toDos.length})</h1>
     <form onSubmit={onSubmit}>
      <input onChange = {onChange} type = "text" value={toDo} placeholder = "Write your to-dos"></input>
      <button>Submit</button>
     </form>
     <ul>
      {toDos.map((item, index) => ( // toDos 배열에 접근해서 데이터와 인덱스를 얻어오고
        <li key={index}>{item}</li> // 인덱스가 key값이 된 채로 데이터를 리스트 형식으로 출력
      ))}
     </ul>
    </div>
  );
}

export default App;
