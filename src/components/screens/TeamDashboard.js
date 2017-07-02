import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header'
import UserCard from '../UserCard'
import GameTable from '../GameTable'
import GameForm from '../GameForm'
import Footer from '../Footer'


const PlayerDashboard = () => (
	<div>
		<Header />
		<Link to='/'>Home</Link>
		<UserCard />
		<GameTable />
		<GameForm />
		<Footer />
	</div>
)

export default PlayerDashboard