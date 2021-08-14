import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/checkout">
          <Header />
            
            <Checkout/>
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
