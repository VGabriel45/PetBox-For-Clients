import "./App.css";
import HomePage from "./Components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Components/Login";
import ProfilePage from "./Components/User/ProfilePage";
import EditProfilePage from "./Components/User/EditProfilePage";
import Profile from "./Components/User/index";
import AppointmentForm from "./Components/User/AppointmentForm";
import QuestionForm from "./Components/QuestionForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/myProfile/:id" exact component={Profile} />
        <Route path="/myProfile/:id/update" exact component={EditProfilePage} />
        <Route
          path="/myProfile/:id/makeAppointment"
          exact
          component={AppointmentForm}
        />
        <Route
          path="/myProfile/:id/askQuestion"
          exact
          component={QuestionForm}
        />
      </Switch>
    </Router>
  );
}

export default App;
