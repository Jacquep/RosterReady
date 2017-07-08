import React from 'react'
import { Button, Divider, Form, Grid, Input, Select } from 'semantic-ui-react'

// const massive = ['massive']
// const big = ['big']
// const sports = [
//   { key: 'basketball', text: 'Basketball', value: 'basketball' },
//   { key: 'football', text: 'Football', value: 'football' },
//   { key: 'baseball', text: 'Softball', value: 'baseball' },
//   { key: 'soccer', text: 'Soccer', value: 'soccer' },
//   { key: 'volleyball', text: 'Volleyball', value: 'volleyball' }
  
// ]
      
class GameForm extends React.Component {
  state = {}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: '',
  //     time: '',
  //     need: ''
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
    
  //   event.preventDefault();
  // }

  render() {
    // const value = this.state.value  

      return (
        <Grid.Column>
          <Form>
            <Form.Group>
              <Form.Field control={Input} label='Date' placeholder='Date' width={3}/>
              <Form.Field control={Input} label='Time' placeholder='Time' width={3}/>
              <Form.Field control={Input} label='Sport' placeholder='Sport' width={3}/>
              <Form.Field control={Input} label='Roster Need' placeholder='Roster Need' width={4}/>
              <Form.Field control={Input} fluid="false" label='Location' placeholder='Location' width={4}/>
            </Form.Group>            
            <Form.Field color="teal" control={Button}>Submit</Form.Field>
          </Form>
				</Grid.Column>
        )
  }
}

export default GameForm

