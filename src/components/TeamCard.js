import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const TeamCard = (props) => ( 
	 <Card>
      <Image src={props.team.avatar}/>
      <Card.Content>
        <Card.Header>{props.team.name}</Card.Header>         
        <Card.Description>{props.team.sport}</Card.Description>
      </Card.Content>
  </Card> 
)

export default TeamCard




