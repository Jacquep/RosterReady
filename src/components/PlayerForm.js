import React from 'react'
// import { Link } from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'
import API from '../utils/API'

      
class PlayerForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone: '',
      email: '',
      username: '',
      gender: '',
      sport: ''
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  handleSubmit = () => {

 

    const name = this.state.name;
    const phone = this.state.phone;
    const email = this.state.email;
    const username = this.state.username;
    const gender = this.state.gender;
    const sport = this.state.sport;
    
    API.addPlayer(name, phone, email, username, gender, sport)
      .then(API.addPlayer)
      .catch((err) => {
        console.error('Error adding Player', err)
      })

    this.setState({
      name: '',
      phone: '',
      email: '',
      username: '',
      gender: '',
      sport: ''
      
    })

    console.log(this.state);

   
  }
  

  render() {
    
    const name = this.state.name
    const phone = this.state.phone
    const email = this.state.email
    const username = this.state.username
    const gender = this.state.gender
    const sport = this.state.sport
   

    return (
      <Form onSubmit={this.handleSubmit} style={{width: '50%', margin: 'auto'}}>
        <Form.Input value={name} name='name' label='Name' placeholder='Name'  onChange={this.handleChange} />     
        <Form.Input value={phone} name='phone' label='Phone' placeholder='Phone' onChange={this.handleChange} />
        <Form.Input value={email} name='email' label='Email' placeholder='Email' onChange={this.handleChange}/>
        <Form.Input value={username} name='username' label='Username' placeholder='Username' onChange={this.handleChange}/>



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

      
         <Button content='Submit'  />
      
      </Form>
    )

  }
}



export default PlayerForm
