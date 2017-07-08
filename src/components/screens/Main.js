// Include React 
import React from 'react'

// import { Link } from 'react-router-dom'
import { Container, Grid, Header, Dimmer, Loader } from 'semantic-ui-react'


import PageHeader from '../Header'
import Banner from '../Banner'
import GameTable from '../GameTable'
import PlayerList from '../PlayerList'
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
		name: 'Sam',
		phone: '',
		email: '',
		username: '',
		sport: 'Softball',
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
								Checkout our newest available free agents!
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

	