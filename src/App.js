import "./App.css";
import HomePage from "./Components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Components/Login";
import ProfilePage from "./Components/User/ProfilePage";
import EditProfilePage from "./Components/User/EditProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/myProfile/:id" exact component={ProfilePage} />
        <Route path="/myProfile/:id/update" exact component={EditProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
