import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Router>
    </div>
  );
}

export default App;
