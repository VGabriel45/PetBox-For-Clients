import axios from "axios";
import authHeader from "../../Auth/Components/Service/auth-header";
import AuthService from "../../Auth/Components/Service/auth-service";

const API_URL = "http://localhost:8080";

class UserService {
  getCurrentUser() {
    return AuthService.getCurrentUser();
  }

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

  makeAppointment(customerId, reason, date, hour) {
    axios.post(
      `${API_URL}/customers/${customerId}/appointments`,
      {
        reason: reason,
        dateOfAppointment: new Date(date),
        hour: hour,
      },
      { headers: authHeader() }
    );
  }

  sendQuestion(customerId, author, text, date) {
    axios.post(
      `${API_URL}/customers/${customerId}/questions`,
      {
        text: text,
        date: new Date(date),
        author: author,
      },
      { headers: authHeader() }
    );
  }
}

export default new UserService();
