import axios from "axios";

class AdminService{

    constructor() {
        this.baseUrl = 'http://localhost:8080/admin';
      }
    
      login(email, password) {
        return axios.post(`${this.baseUrl}/login`, {
          email: email,
          password: password
        })
        .then(response => {
          // If the login is successful, store the token in local storage
          if(response.data.token != null){
            localStorage.setItem('token', response.data.token);
          }
          return response.data;
        })
        .catch(error => {
            if (error.response.status === 401) {
                console.log('Unauthorized');
              } else {
                console.error(error);
              }
        });
      }
}

export default AdminService;