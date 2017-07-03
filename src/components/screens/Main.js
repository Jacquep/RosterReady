// Include React 
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

import PageHeader from '../Header'
import Banner from '../Banner'
import GameTable from '../GameTable'
import PlayerList from '../PlayerList'
import Footer from '../Footer'

const mockGames = [
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
	{
		date:'mockInfo',
		time:'mockInfo',
		sport:'mockInfo',
		rosterNeeds:'mockInfo',
		location:'mockInfo',
		teamName:'mockInfo',
		contact:'mockInfo',
	},
]

const mockPlayers = [1,2,3,4,5,6,7,8,9,10].map(num => {
	return {
		name: 'Joe',
		phone: '',
		email: '',
		username: '',
		sport: 'Baseball',
		gender: '',
		ready: true,
		avatar: `./images/testav${(num % 7) + 1}.png`
	}
})

// This is the main component. 
class Main extends React.Component {


	// Here we render the function
	render(){
		return (
			<div>
				<PageHeader />
				<Container>
					<Link to='/register'>Sign Up</Link>
					<Grid>
						<Grid.Row>
							<Banner />
						</Grid.Row>
						<Grid.Row>
							<Header style={{width: '100%'}} size='huge' textAlign='center'>
								Find a Game
							</Header>
							<GameTable games={mockGames}/>
						</Grid.Row>
						<Grid.Row>
							<Header style={{width: '100%'}} size='huge' textAlign='center'>
								Fill Your Roster
							</Header>
							<PlayerList players={mockPlayers}/>
						</Grid.Row>
					</Grid>
				</Container>
				<Footer />
			</div>
		)
	}
};

export default Main 

	