const axios = require('axios');
const baseUrl = "http://localhost:3000";

const AuthService = { 
    register: function (data){
        return axios.post(baseUrl+"/auth/register", data)
        }
} 

module.exports = AuthService;