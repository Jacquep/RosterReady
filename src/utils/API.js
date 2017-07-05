import axios from "axios";

const API = {


//routes to add then edit our player
addPlayer: function(){
  axios.post('api/player'), {Name: name, Phone: phone, email: email, username: username, gender: gender, sport:}
},

getPlayer: function(){
  return axios.get("/api/game");
},

deletePlayer: function(){
  return axios.delete('api/')
}

//routes to add then edit our team
addTeam: function(){
  axios.post("api/team"), {}
},

//routes to then post a game (child of team) remove or edit
addEvent: function(){
  return axios.post(",/api/game");

},   
// Retrieves all  listed events from the db
  getEvent: function() {
    return axios.get("/api/game");
  },
  // Saves a new event to the db
  saveEvent: function(text) {
    return axios.post("/api/game", { text });
  },
  // Deletes an event from the db
  deleteEvent: function(id) {
    return axios.delete(`/api/game/${id}`);
  }

};


export default API;

//how do i receive a JSON object. 

