import React from 'react'
import { Card } from 'semantic-ui-react'
import PlayerListItem from './PlayerListItem'

const PlayerList = (props) => (
	<Card.Group itemsPerRow={10}>
		{props.players.map(player => <PlayerListItem player={player}/>)}
	</Card.Group>
)
export default PlayerList