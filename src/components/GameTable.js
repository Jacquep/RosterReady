import React from 'react'
import { Table } from 'semantic-ui-react'
import GameTableRow from './GameTableRow'

const GameTable = (props) => (
    <Table basic='very'>
        <Table.Header>
            <Table.Row>
				<Table.HeaderCell>Date</Table.HeaderCell>
				<Table.HeaderCell>Time</Table.HeaderCell>
				<Table.HeaderCell>Sport</Table.HeaderCell>
				<Table.HeaderCell>Roster Needs</Table.HeaderCell>
				<Table.HeaderCell>Location</Table.HeaderCell>
				<Table.HeaderCell>Team Name</Table.HeaderCell>
				<Table.HeaderCell>Contact</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

      	<Table.Body>
			{props.games.map(game => <GameTableRow game={game} />)}
      	</Table.Body>
    </Table>
)

export default GameTable
