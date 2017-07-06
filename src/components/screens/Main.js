// Include React 
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Header, Segment, Dimmer, Loader } from 'semantic-ui-react'

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
	constructor(props){
		super(props)

		this.state = {
			games: [],
			players: []
		}
	}

	componentDidMount(){
		// get games data
		fetch('./events')
		// convert response to json
		.then((response) => response.json())
		// set state with games data 
		.then((json) => {
			// change state to new game data
			this.setState((prevState, props) => {
				return {
					games: json.games,
				}
			})
		})
		.catch((err) => {
			// change state to new game data
			this.setState((prevState, props) => {
				return {
					games: mockGames,
				}
			})
		})
		// get players data
		fetch('./players')
		// convert response to json
		.then((response) => response.json())
		// set state with games data 
		.then((json) => {
			// change state to new game data
			this.setState((prevState, props) => {
				return {
					players: json.players,
				}
			})
		})
		.catch((err) => {
			// change state to new game data
			this.setState((prevState, props) => {
				return {
					players: mockPlayers,
				}
			})
		})
	}


	// Here we render the function
	render(){
		
		const games = this.state.games
		const players = this.state.players

		let gameLoading = true
		if (games.length !== 0) {
			gameLoading = false
		}

		let playerLoading = true
		if (players.length !== 0) {
			playerLoading = false
		}

		return (
			<div>
				<PageHeader />
				<Container>
					<Grid>
						<Grid.Row>
							<Banner />
						</Grid.Row>
						<Grid.Row>
							<Dimmer active={gameLoading} inverted>
								<Loader>Loading</Loader>
							</Dimmer>

							<Header style={{width: '100%'}} size='huge' textAlign='center'>
								Find a Game
							</Header>
							<GameTable games={games}/>
						</Grid.Row>
						<Grid.Row>
							<Dimmer active={playerLoading} inverted>
								<Loader>Loading</Loader>
							</Dimmer>

							<Header style={{width: '100%'}} size='huge' textAlign='center'>
								Fill Your Roster
							</Header>
							<PlayerList players={players}/>
						</Grid.Row>
					</Grid>
				</Container>
				<Footer />
			</div>
		)
	}
};

export default Main 

	