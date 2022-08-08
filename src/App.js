import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/movie/:id"
          element={<Detail />}
        />
        <Route 
          path= "/" 
          element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
