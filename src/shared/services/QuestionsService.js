//import modules
const axios = require('axios');

//global stuff -- move to env file later
const baseUrl = "http://test.natterbase.com:3002";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE"

//Setup Axios -- move to a repo later
const httpClientCustom = axios.create({
    baseURL: baseUrl+'/',
    headers: {'x-access-token': token}
});

const QuestionsService = { 
    getQuestions: function (){
        return httpClientCustom.get("questions");
        }
} 

module.exports = QuestionsService;