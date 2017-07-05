import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'

      
class PlayerForm extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state

    return (
      <Form style={{width: '50%', margin: 'auto'}}>
        <Form.Input label='Name' control='input' placeholder='Name' />     
        <Form.Input label='Phone' placeholder='Phone' />
        <Form.Input label='Email' placeholder='Email' />
        <Form.Input label='Username' placeholder='Username' />

        <Form.Group>
          <label>Gender</label>
          <Form.Radio label='Male' value='male' checked={value === 'male'} onChange={this.handleChange} />
          <Form.Radio label='Female' value='female' checked={value === 'female'} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group>
          <label>Sport</label>
          <Form.Radio label='Basketball' value='Basketball' checked={value === 'Basketball'} onChange={this.handleChange} />
          <Form.Radio label='Baseball' value='Baseball' checked={value === 'Baseball'} onChange={this.handleChange} />
          <Form.Radio label='Soccer' value='Soccer' checked={value === 'Soccer'} onChange={this.handleChange} />
          <Form.Radio label='Volleyball' value='Volleyball' checked={value === 'Volleyball'} onChange={this.handleChange} />
          <Form.Radio label='Football' value='Football' checked={value === 'Football'} onChange={this.handleChange} />
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
