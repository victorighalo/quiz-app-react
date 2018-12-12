const axios = require('axios');
const baseUrl = "http://localhost:3000";

const QuestionsService = { 
    getQuestions: function (){
        return axios.get(baseUrl+"/questions")
        }
} 

module.exports = QuestionsService;