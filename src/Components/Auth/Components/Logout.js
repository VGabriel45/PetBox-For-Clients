import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthService from "../../Auth/Components/Service/auth-service";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let { logout, isAuthenticated } = useAuth0();
  const history = useHistory();
  if (!localStorage.getItem("username")) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }

  function logOut() {
    AuthService.logout();
    history.push("/");
  }

  return (
    isAuthenticated && (
      <button
        className="btn btn-light"
        onClick={() => {
          logOut;
        }}
      >
        Logout
      </button>
    )
  );
};

export default Logout;
