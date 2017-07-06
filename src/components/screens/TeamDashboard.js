import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container, Header } from 'semantic-ui-react'

import PageHeader from '../Header'
import TeamCard from '../TeamCard'
import GameTable from '../GameTable'
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

const mockTeams = [1,2,3,4,5,6,7,8,9,10].map(num => {
	return {
		name: 'Joe',
		phone: '',
		email: '',
		username: '',
		sport: 'Baseball',
		gender: '',
		ready: true,
		avatar: `https://react.semantic-ui.com/assets/images/avatar/large/matthew.png`
	}
})


const TeamDashboard = () => (

	<div style={{
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column'
	}}>
		<PageHeader />
		<Container style={{flex: 1}}>
			<Grid>
				<Grid.Row>
					<Grid.Column width={6}>			
						<TeamCard team={mockTeams[0]}/>
					</Grid.Column>			
					<Grid.Column width={10}>
						<Header style={{width: '100%'}} size='huge' textAlign='center'>Your Games</Header>
						<GameTable games={mockGames}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
		<Footer  />
	</div>
)

export default TeamDashboard