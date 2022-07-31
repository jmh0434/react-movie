import { useState, useEffect } from "react";

function App() {
 const [counter, setValue] = useState(0);
   const [keyword, setKeyword] = useState("");
   const onClick = () => setValue((prev) => prev + 1);
   console.log("i run all the time");
   const onChange = (event) => setKeyword(event.target.value);
   useEffect(() => { // 처음 시작했을 때 실행되는 useEffect
     console.log("CALL THE API....");
     console.log("I run only once.");
   }, []);
   useEffect(() => { // 처음 시작했을 떄와 keyword 값의 변화가 생기면 실행되는 useEffect
     console.log("I run when 'keyword' changes.");
   }, [keyword]);
   useEffect(() => { // 처음 시작했을 떄와 counter 값의 변화가 생기면 실행되는 useEffect
     console.log("I run when 'counter' changes.");
   }, [counter]);
   useEffect(() => { // 처음 시작했을 때와 keyword 혹은 counter 값의 변화가 생기면 실행되는 useEffect
     console.log("I run when keyword & counter change");
   }, [keyword, counter]);
   return (
     <div>
       <input
         value={keyword}
         onChange={onChange}
         type="text"
         placeholder="Search here..."
       />
       <h1>{counter}</h1>
       <button onClick={onClick}>click me</button>
     </div>
  );
}

export default App;
