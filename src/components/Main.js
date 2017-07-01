var axios = require('axios');

// Include React 
var React = require('react');

// Here we include all of the sub-components
var Game = require('./Game');
var Player = require('./Player');
var Team = require('./Team');
var Navbar = require('./navbar');
var Footer = require('./footer');


// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			date: "",
			time: "",
			sport: "",
			rosterNeeds: "",
			location: "",
			teamName: ""
		}
	},	

	// We use this function to allow children to update the parent with searchTerms.
	setTerm: function(date, time, sport, rosterNeeds, location, teamName){
		this.setState({
			date: "",
			time: "",
			sport: "",
			rosterNeeds: "",
			location: "",
			teamName:
			 
		})
	},


	// If the component updates we'll run this code
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.list != this.state.list){
			console.log("UPDATED");

			helpers.runQuery(this.state.date, this.state.time, this.state.sport, this.state.rosterNeeds, this.state.location, this.state.teamName)
				.then(function(game){
					console.log(game);
					if (game != this.state.results)
					{
						this.setState({
							results: game
						})
					}
				}.bind(this))
		}
	},

	// Here we render the function
	render: function(){
		return(

			<div className="container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">RosterReady</a>
						</div>
					</div>	
				</nav>			
					<div className="jumbotron">
						<h2 className="text-center"><strong>Banner</strong></h2>
					</div>
					{this.props.children}
			</div>
		)
	}
});

export default Main 
