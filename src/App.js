import Button from "./Button";
import styles from "./App.module.css" // app 모듈 css
function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, React!</h1> 
      <Button text = {"Click me"}></Button>
    </div>
  );
}

export default App;
