import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail"

// ! Router는 안에 있는 모든 Route를 보여주기에 Switch를 사용해서 하나의 Route만 보일수 있게 함
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
