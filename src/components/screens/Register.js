// Include React 
import React from 'react'
import { Link } from 'react-router'

import Header from '../Header'
//import GameForm from '../GameForm'
import PlayerForm from '../PlayerForm'
import TeamForm from '../TeamForm'
import Footer from '../Footer'


// This is the main component. 
class Register extends React.Component {


	// Here we render the function
	render(){
		return (
			<div>
				<Header />
				<Link to='/player'>Player Dashboard</Link>
				<Link to='/team'>Team Dashboard</Link>
				<PlayerForm />
				or
				<TeamForm />
				<Footer />
			</div>
		)
	}
};

export default Register 
