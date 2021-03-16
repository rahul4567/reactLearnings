import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="body-content">
          <Home />
        </div>
      </div>
    </Router>
  );
}

export default App;
