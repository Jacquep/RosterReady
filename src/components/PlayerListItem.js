import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const PlayerListItem = (props) => (
	<Card>
	    <Image src={props.player.avatar}/>
	    <Card.Content>
	      <Card.Header>{props.player.name}</Card.Header>		     
	      <Card.Description>{props.player.sport}</Card.Description>
	    </Card.Content>
	</Card>		
)

export default PlayerListItem
