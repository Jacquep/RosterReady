// Include React 
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Header from '../Header'
//import GameForm from '../GameForm'
import PlayerForm from '../PlayerForm'
import TeamForm from '../TeamForm'
import Footer from '../Footer'


// This is the main component. 
class Register extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			userType: 'player'
		}
	}

	// Here we render the function
	render(){
		const userType = this.state.userType


		return (

			<div style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column'
			}}>

				<Header />
				<Link to='/player'>Player Dashboard</Link>
				<Link to='/team'>Team Dashboard</Link>
				<Container style={{flex: 1}}>
					{ userType === 'player' ? <PlayerForm /> : <TeamForm /> }
				</Container>
				<Footer />
			</div>
		
		)
	}
};

export default Register 
