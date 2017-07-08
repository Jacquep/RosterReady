import React from 'react'
import { Table } from 'semantic-ui-react'
import GameTableRow from './GameTableRow'

const GameTable = (props) => (

	
	// 	constructor(props){
	// 	super(props)

	// 	this.state = {
	// 		noContactInfo: [],
	// 		contactInfo: []
	// 	}
	// }
	
	 

	// const noContactInfo = this.state.noContactInfo
	// const contactInfo = this.state.contactInfo

	// if(this.props.noContactInfo ==='') {

	// 		noContactInfo = 

		<Table basic='very'>
        	<Table.Header>
	            <Table.Row>
					<Table.HeaderCell>Date</Table.HeaderCell>
					<Table.HeaderCell>Time</Table.HeaderCell>
					<Table.HeaderCell>Sport</Table.HeaderCell>
					<Table.HeaderCell>Roster Needs</Table.HeaderCell>
					<Table.HeaderCell>Location</Table.HeaderCell>
					<Table.HeaderCell>Team Name</Table.HeaderCell>	
					<Table.HeaderCell textAlign='center'>Contact</Table.HeaderCell>	
	            </Table.Row>
        	</Table.Header>
	      	<Table.Body>
				{props.games.map(game => <GameTableRow game={game} />)}
	      	</Table.Body>
   		</Table> 
   	
   // 	}
   // 	else{ 

   //  	<Table basic='very'>
   //      	<Table.Header>
	  //           <Table.Row>
			// 		<Table.HeaderCell>Date</Table.HeaderCell>
			// 		<Table.HeaderCell>Time</Table.HeaderCell>
			// 		<Table.HeaderCell>Sport</Table.HeaderCell>
			// 		<Table.HeaderCell>Roster Needs</Table.HeaderCell>
			// 		<Table.HeaderCell>Location</Table.HeaderCell>
			// 		<Table.HeaderCell>Team Name</Table.HeaderCell>		
			// 		<Table.HeaderCell>Contact</Table.HeaderCell>
	  //           </Table.Row>
   //      	</Table.Header>
   //    		<Table.Body>
			// 	{props.games.map(game => <GameTableRow game={game} />)}
   //    		</Table.Body>
   //  	</Table>
   
)

export default GameTable
