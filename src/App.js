import "./App.css";
import HomePage from "./Components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Components/Login";
import ProfilePage from "./Components/User/ProfilePage";
import EditProfilePage from "./Components/User/EditProfilePage";
import Profile from "./Components/User/index";
import AppointmentForm from "./Components/User/AppointmentForm";
import QuestionForm from "./Components/QuestionForm";
import PetsPage from "./Components/User/PetsPage";
import QuestionsPage from "./Components/User/QuestionsPage";
import AppointmentsPage from "./Components/User/AppointmentsPage";
import PetDetailsPage from "./Components/User/Pets/PetDetailsPage";

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
        <Route path="/myProfile/:id/pets" exact component={PetsPage} />
        <Route path="/myProfile/:id/pets/:petId/details" exact component={PetDetailsPage} />
        <Route
          path="/myProfile/:id/questions"
          exact
          component={QuestionsPage}
        />
        <Route
          path="/myProfile/:id/appointments"
          exact
          component={AppointmentsPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
