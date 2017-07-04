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
        <Form.Input name='Name' label='Name' control='input' placeholder='Name' />     
        <Form.Input name='Phone' label='Phone' placeholder='Phone' />
        <Form.Input name='Email' label='Email' placeholder='Email' />
        <Form.Input name='Username' label='Username' placeholder='Username' />

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
