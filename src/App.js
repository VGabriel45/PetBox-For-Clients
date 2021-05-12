import "./App.css";
import HomePage from "./Components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./Components/User/ProfilePage";
import EditProfilePage from "./Components/User/EditProfilePage";
import Profile from "./Components/User/index";
import AppointmentForm from "./Components/User/AppointmentForm";
import QuestionForm from "./Components/QuestionForm";
import PetsPage from "./Components/User/PetsPage";
import QuestionsPage from "./Components/User/QuestionsPage";
import AppointmentsPage from "./Components/User/AppointmentsPage";
import PetDetailsPage from "./Components/User/Pets/PetDetailsPage";
import QuestionDetailsPage from "./Components/User/Questions/QuestionDetailsPage";
import AppointmentDetailsPage from "./Components/User/Appointments/AppointmentDetailsPage";
import LoginPage from "./Components/Auth/Components/LoginPage";
import LandingPage from "./LandingPage/LandingPage";
import ClinicPage from "./LandingPage/ClinicPage";
import CustomerPage from "./LandingPage/CustomerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/landingPage" exact component={LandingPage} />
        <Route path="/customerPage" exact component={CustomerPage} />
        <Route path="/clinicPage" exact component={ClinicPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/myProfile" exact component={Profile} />
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
        <Route
          path="/myProfile/:id/pets/:petId/details"
          exact
          component={PetDetailsPage}
        />
        <Route
          path="/myProfile/:id/questions/:questionId/details"
          exact
          component={QuestionDetailsPage}
        />
        <Route
          path="/myProfile/:id/appointments/:appointmentId/details"
          exact
          component={AppointmentDetailsPage}
        />
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
