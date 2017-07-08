import React from 'react'
// import { Link } from 'react-router-dom'
import { Divider, Grid, Container, Header } from 'semantic-ui-react'

import PageHeader from '../Header'
import TeamCard from '../TeamCard'
import RequestTable from '../RequestTable'
import Footer from '../Footer'
import GameForm from '../GameForm'

const mockGames = [
	{
		date:'07/09/2017',
		time:'10:00AM',
		sport:'Volleyball',
		rosterNeeds:'Player',
		location:'Ocean Beach',
		teamName:'Team Sizzle',
		contact:'mockInfo'
	},
	{
		date:'07/16/2017',
		time:'10:00AM',
		sport:'Volleyball',
		rosterNeeds:'Player',
		location:'Ocean Beach',
		teamName:'Team Sizzle',
		contact:'mockInfo'
	},
	{
		date:'07/23/2017',
		time:'10:00AM',
		sport:'Volleyball',
		rosterNeeds:'Player',
		location:'Ocean Beach',
		teamName:'Team Sizzle',
		contact:'mockInfo'
	},
	{
		date:'07/30/2017',
		time:'10:00AM',
		sport:'Volleyball',
		rosterNeeds:'Player',
		location:'Ocean Beach',
		teamName:'Team Sizzle',
		contact:'mockInfo'
	}

]

const mockTeams = [1,2,3,4,5,6,7,8,9,10].map(num => {
	return {
		name: 'Team Sizzle',
		phone: '',
		email: '',
		username: '',
		sport: 'Volleyball',
		gender: '',
		ready: true,
		avatar: `./images/vollyball.png`
	}
})


const TeamDashboard = () => (

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
						<TeamCard team={mockTeams[0]}/>
					</Grid.Column>			
					<Grid.Column width={10}>
						<Header style={{width: '100%'}} size='huge' textAlign='center'>Current Requests for Subs</Header>
						<RequestTable games={mockGames}/>
						<Header style={{width: '100%'}} size='huge' textAlign='center'>Add Request</Header>
						<GameForm />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
		<Footer  />

	</div>
)

export default TeamDashboard