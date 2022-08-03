import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/movie">
          <Detail/>
        </Route>
        <Route path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
