import axios from "axios";
import authHeader from "../../Auth/Components/Service/auth-header";

const API_URL = "http://localhost:8080";

class UserService {
  getCustomerPets(customerId) {
    return axios.get(`${API_URL}/customers/${customerId}/pets`, {
      headers: authHeader(),
    });
  }

  getUser(customerId) {
    return axios.get(`${API_URL}/customers/${customerId}`, {
      headers: authHeader(),
    });
  }

  getCustomerAppointments(customerId) {
    return axios.get(`${API_URL}/customers/${customerId}/appointments`, {
      headers: authHeader(),
    });
  }

  getCustomerQuestions(customerId) {
    return axios.get(`${API_URL}/customers/${customerId}/questions`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
