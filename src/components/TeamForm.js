import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import API from '../utils/API'
      
class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamLeader: '',
      teamName: '',
      phone:'',
      email: '',
      sport: ''
    };     
  }
    
  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  handleSubmit = () => {

    const teamLeader = this.state.teamLeader;
    const teamName = this.state.teamName;
    const phone = this.state.phone;
    const email = this.state.email
    const sport = this.state.sport;
    
    
    API.addTeam(teamLeader, teamName, phone, email, sport)
      .then(API.getTeam)
      .catch((err) => {
        console.error('Error adding Game', err)
      })

    this.setState({
      teamLeader: '',
      teamName: '',
      phone: '',
      email: '',
      sport: '' 
      
    })
  }


    render() {
      const teamLeader = this.state.teamLeader;
      const teamName = this.state.teamName;
      const phone = this.state.phone;
      const email = this.state.email;
      const sport = this.state.sport;

      return (
        
      <Form onSubmit={this.handleSubmit}>
                  
        <Form.Input value={teamLeader} name='teamLeader' label='Team Captain' placeholder='Team Captain' onChange={this.handleChange}/>
        <Form.Input value={teamName} name='teamName' label='team Name' placeholder='Team Name' onChange={this.handleChange} />
        <Form.Input value={phone} name='phone' label='Phone' placeholder='Phone' onChange={this.handleChange} />
        <Form.Input value={email} name='email' label='Email'placeholder='Email' onChange={this.handleChange} />
           
        <Form.Group>
        <label>Sport</label>
        <Form.Radio label='Basketball' value={sport} checked={sport === 'Basketball'} onChange={this.handleChange} />
        <Form.Radio label='Baseball' value={sport}  checked={sport === 'Baseball'} onChange={this.handleChange} />
        <Form.Radio label='Soccer' value={sport}  checked={sport=== 'Soccer'} onChange={this.handleChange} />
        <Form.Radio label='Volleyball' value={sport}  checked={sport === 'Volleyball'} onChange={this.handleChange} />
        <Form.Radio label='Football' value={sport}  checked={sport === 'Football'} onChange={this.handleChange} />
        </Form.Group>

        <Link to='/team'>
          <Button content='Submit' role='form' />
        </Link>
      </Form>
    )
  }
}


export default TeamForm