import React from 'react'
import { Table } from 'semantic-ui-react'

const GameTableRow = (props) => (
    <Table.Row>
		<Table.Cell>{props.game.date}</Table.Cell>
		<Table.Cell>{props.game.time}</Table.Cell>
		<Table.Cell>{props.game.sport}</Table.Cell>
		<Table.Cell>{props.game.rosterNeeds}</Table.Cell>
		<Table.Cell>{props.game.location}</Table.Cell>
		<Table.Cell>{props.game.teamName}</Table.Cell>
		<Table.Cell>{props.game.contact}</Table.Cell>
    </Table.Row>
)

export default GameTableRow
