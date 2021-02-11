import "./App.css";
import HomePage from "./Components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Components/Login";
import ProfilePage from "./Components/User/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/myProfile/:id" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
