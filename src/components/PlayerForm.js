import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'
import API from '../utils/API'
      
class PlayerForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'rre-',
      phone: '',
      email: '',
      username: '',
      gender: '',
      sport: '',
      ready: true,
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  

  render() {
    
    const name = this.state.name
    const phone = this.state.phone
    const email = this.state.email
    const username = this.state.username
    const gender = this.state.gender
    const sport = this.state.sport
   

    return (
      <Form onSubmit={this.handleSubmit} style={{width: '50%', margin: 'auto'}}>
        <Form.Input value={name} name='Name' label='Name' control='input' placeholder='Name' />     
        <Form.Input value={phone} name='Phone' label='Phone' placeholder='Phone' />
        <Form.Input value={email} name='Email' label='Email' placeholder='Email' />
        <Form.Input value={username} name='Username' label='Username' placeholder='Username' />



        <Form.Group>
          <label>Gender</label>
          <Form.Radio name='gender' label='Male' value='male' checked={gender === 'male'} onChange={this.handleChange} />
          <Form.Radio name='gender' label='Female' value='female' checked={gender === 'female'} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group>
          <label>Sport</label>
          <Form.Radio name='sport' label='Basketball' value='Basketball' checked={sport === 'Basketball'} onChange={this.handleChange} />
          <Form.Radio name='sport' label='Baseball' value='Baseball' checked={sport === 'Baseball'} onChange={this.handleChange} />
          <Form.Radio name='sport' label='Soccer' value='Soccer' checked={sport === 'Soccer'} onChange={this.handleChange} />
          <Form.Radio name='sport' label='Volleyball' value='Volleyball' checked={sport === 'Volleyball'} onChange={this.handleChange} />
          <Form.Radio name='sport' label='Football' value='Football' checked={sport === 'Football'} onChange={this.handleChange} />
        </Form.Group>

       

        <Divider hidden />

        <Form.Button content='Submit' />
      </Form>
    )

  }
}



export default PlayerForm
