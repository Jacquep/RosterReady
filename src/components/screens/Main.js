// Include React 
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Header from '../Header'
import Banner from '../Banner'
import GameTable from '../GameTable'
import PlayerList from '../PlayerList'
import Footer from '../Footer'

// This is the main component. 
class Main extends React.Component {


	// Here we render the function
	render(){
		return (
			<div>
				<Header />
				<Container>
					<Link to='/register'>Sign Up</Link>
					<Banner />
					<GameTable />
					<PlayerList />
				</Container>
				<Footer />
			</div>
		)
	}
};

export default Main 
			// <div className="container">
			// 	<nav className="navbar navbar-default" role="navigation">
			// 		<div className="container-fluid">
			// 			<div className="navbar-header">
			// 				<button type="button">
			// 					<span className="icon-bar"></span>
			// 					<span className="icon-bar"></span>
			// 					<span className="icon-bar"></span>
			// 				</button>
			// 				<a className="navbar-brand" href="#">RosterReady</a>
			// 			</div>
			// 		</div>	
			// 	</nav>			
			// 		<div className="jumbotron">
			// 			<h2 className="text-center"><strong>Banner</strong></h2>
			// 		</div>
			// 		{this.props.children}
			// </div>
