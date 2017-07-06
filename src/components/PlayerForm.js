import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'
import API from '../utils/API'
      
class PlayerForm extends React.Component {

 //handling text input 
 constructor() {
    super();
    this.state = {
      inputValue: ""
    }; 
     // Binding handleChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  state = {}

  handleChange = (e, { value }) => this.setState({ value })
 
 //
  handleButtonClick() {
    const newPlayer = this.state.inputValue;
    API.savePlayer(newPlayer).then(this.props.getPlayer);
    this.setState({ inputValue: "" });
  }
  render() {

    const { value } = this.state

    return (
      <Form style={{width: '50%', margin: 'auto'}}>
        <Form.Input name='Name' label='Name' control='input' placeholder='Name' onChange={this.handleChange} value={this.state.inputValue}/>     
        <Form.Input name='Phone' label='Phone' placeholder='Phone' onChange={this.handleChange} value={this.state.inputValue} />
        <Form.Input name='Email' label='Email' placeholder='Email' onChange={this.handleChange} value={this.state.inputValue}/>
        <Form.Input name='Username' label='Username' placeholder='Username' onChange={this.handleChange} value={this.state.inputValue}/>

        <Form.Group>
          <label>Gender</label>
          <Form.Radio name='Male' label='Male' value='male' checked={value === 'male'} onChange={this.handleChange} />
          <Form.Radio name='Female' label='Female' value='female' checked={value === 'female'} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group>
          <label>Sport</label>
          <Form.Radio name='Basketball' label='Basketball' value='Basketball' checked={value === 'Basketball'} onChange={this.handleChange} />
          <Form.Radio name='Softball' label='Baseball' value='Baseball' checked={value === 'Baseball'} onChange={this.handleChange} />
          <Form.Radio name='Soccer' label='Soccer' value='Soccer' checked={value === 'Soccer'} onChange={this.handleChange} />
          <Form.Radio name='Volleyball' label='Volleyball' value='Volleyball' checked={value === 'Volleyball'} onChange={this.handleChange} />
          <Form.Radio name='Football' label='Football' value='Football' checked={value === 'Football'} onChange={this.handleChange} />
        </Form.Group>

        <Button.Group>
          <Button>Ready</Button>
          <Button.Or />
          <Button positive>Not Ready</Button>
        </Button.Group>

        <Divider hidden />

        <Form.Group>
          <Link to='/PlayerDashboard'>
            <Button type='submit'>Submit</Button>
          </Link>
        </Form.Group>
      </Form>
    )

  }
}



export default PlayerForm
