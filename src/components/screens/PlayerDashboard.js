import React from 'react'
// import { Link } from 'react-router-dom'
import { Divider, Grid, Container, Header } from 'semantic-ui-react'

import PageHeader from '../Header'
import PlayerCard from '../PlayerCard'
import GameTable from '../GameTable'
import Footer from '../Footer'


const mockGames = [
	{
		date:'07/09/2017',
		time:'10:00AM',
		sport:'Volleyball',
		rosterNeeds:'1 Player',
		location:'Ocean Beach',
		teamName:'Sets on the Beach',
		contact:'mockInfo',
	},
	{
		date:'07/09/2017',
		time:'12:00PM',
		sport:'Volleyball',
		rosterNeeds:'1 Player',
		location:'Del Mar',
		teamName:'Sand Monsters',
		contact:'mockInfo',
	},
	{
		date:'07/10/2017',
		time:'6:00PM',
		sport:'Soccer',
		rosterNeeds:'1 Male',
		location:'North Park',
		teamName:'Kickstars',
		contact:'mockInfo',
	},
	{
		date:'07/11/2017',
		time:'7:30PM',
		sport:'Softball',
		rosterNeeds:'1 Female',
		location:'La Jolla',
		teamName:'Ball Busters',
		contact:'mockInfo',
	},
	{
		date:'07/11/2017',
		time:'9:00PM',
		sport:'Softball',
		rosterNeeds:'2 Players',
		location:'Ocean Beach',
		teamName:'Mad Batters',
		contact:'mockInfo',
	},
	{
		date:'07/12/2017',
		time:'7:00PM',
		sport:'Football',
		rosterNeeds:'1 Male',
		location:'North Park',
		teamName:'Inglorious Bastards',
		contact:'mockInfo',
	},
	{
		date:'07/13/2017',
		time:'7:00PM',
		sport:'Basketball',
		rosterNeeds:'1 Player',
		location:'Serra Mesa',
		teamName:'2Legit2Quit',
		contact:'mockInfo',
	}
]

const mockPlayers = [1,2,3,4,5,6,7,8,9,10].map(num => {
	return {
		name: 'Bobby',
		phone: '',
		email: '',
		username: '',
		sport: 'Softball',
		gender: '',
		ready: true,
		avatar: `https://react.semantic-ui.com/assets/images/avatar/large/matthew.png`
	}
})


const PlayerDashboard = () => (

	<div style={{
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column'
	}}>
		<PageHeader />
		<Divider hidden /> 
		<Divider hidden /> 
		<Divider hidden /> 
		<Container style={{flex: 1}}>
			<Grid>
				<Grid.Row>
					<Grid.Column width={6}>			
						<PlayerCard player={mockPlayers[0]}/>
					</Grid.Column>			
					<Grid.Column width={10}>
						<Header style={{width: '100%'}} size='huge' textAlign='center'>Browse Upcoming Roster Needs</Header>
						<GameTable games={mockGames}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
		<Footer  />
	</div>
)

export default PlayerDashboard