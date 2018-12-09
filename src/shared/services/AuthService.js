const axios = require('axios');
const baseUrl = "http://localhost:3000";

const AuthService = { 
    register: function (data){
        return axios.post(baseUrl+"/auth/register", data)
        },
    userCategories: function(){
        return axios.get(baseUrl+"/roles")
    },
    login: function(data){
        return axios.post(baseUrl+"/auth/login", data)
    }
} 

module.exports = AuthService;