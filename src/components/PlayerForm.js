
import React from 'react'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'

const massive = ['massive']
const big = ['big']
      
class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      username: '',
      sport: '',
      gender: '',
      ready: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  render() {
    const value = this.state.value  
      return ( <h1>PlayerForm</h1> )
        // <div>
          // <Grid.Row>
            // <Grid.Column width={2}>
              // <div>
                // {massive.map(size => (
                  // <Form size={massive} key={massive}>
                    // <Form.Group>
                      // <div>
                        // <Form.Input label='Name' control='input' placeholder='Name' />
                      // </div>
                    // </Form.Group>
                  // </Form>
                 // ))}
              // </div>
           // </Grid.Column>
        // </Grid.Row>
        // <div>
          // {big.map(size => (
            // <Form size={big} key={big}>
              // <Form.Group>
                // <div>
                  // <Form.Input label='Phone' placeholder='Phone' />
                  // <Form.Input label='Email' placeholder='Email' />
                  // <Form.Input label='Username' placeholder='Username' />
                // </div>
              // </Form.Group>
            // </Form>
          // ))}
        // </div>
            // 
        // <label>Gender</label>
        // <Form.Radio label='Male' value='male' checked={value === 'male'} onChange={this.handleChange} />
        // <Form.Radio label='Female' value='female' checked={value === 'female'} onChange={this.handleChange} />
// 
        // <label>Sport</label>
        // <Form.Radio label='Basketball' value='Basketball' checked={value === 'Basketball'} onChange={this.handleChange} />
        // <Form.Radio label='Baseball' value='Baseball' checked={value === 'Baseball'} onChange={this.handleChange} />
        // <Form.Radio label='Soccer' value='Soccer' checked={value === 'Soccer'} onChange={this.handleChange} />
        // <Form.Radio label='Volleyball' value='Volleyball' checked={value === 'Volleyball'} onChange={this.handleChange} />
        // <Form.Radio label='Football' value='Football' checked={value === 'Football'} onChange={this.handleChange} />
        // <Button.Group>
        // <Button>Ready</Button>
        // <Button.Or />
        // <Button positive>Not Ready</Button>
        // </Button.Group>
// 
        // <div>
          // <Button type='submit'>Submit</Button>
          // <Divider hidden />
        // </div>         
      // </div>
    // )
  }
}



export default PlayerForm
