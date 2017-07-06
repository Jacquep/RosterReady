import axios from "axios";

const API = {


//routes to add then edit our player in our sign up/signin form
addPlayer: function(name, phone, email, username, gender, sport, ready){
  axios.post('api/player'), {Name: name, Phone: phone, email: email, username: username, gender: gender, sport: name}
},

getPlayer: function(){
  return axios.get("/api/player");
},

deletePlayer: function(id){
  return axios.delete(`/api/quotes/${id}`);
},


//routes to add then edit our team
addTeam: function(){
  axios.post("api/team");
}

// event form not built yet
// //routes to then post a game (child of team) remove or edit
// addEvent: function(){
//   return axios.post(",/api/game");

// },   
// // Retrieves all  listed events from the db
//   getEvent: function() {
//     return axios.get("/api/game");
//   },
//   // Saves a new event to the db
//   saveEvent: function(text) {
//     return axios.post("/api/game", { text });
//   },
//   // Deletes an event from the db
//   deleteEvent: function(id) {
//     return axios.delete(`/api/game/${id}`);
//   }

};


export default API;

//how do i receive a JSON object. 

