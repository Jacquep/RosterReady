import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'
import API from '../utils/API'
      
class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamLeader: '',
      sport: '',
      TeamName: '',
      phone:'',
      email: ''
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this); 
  }

  state ={}

  handleChange = (e, obj) => this.setState({ value: obj.value })

  //sending info to our API
  handleButtonClick() {
    const newTeam = this.state.inputValue;
    API.addTeam(newTeam).then(this.props.getTeam);
    this.setState({ 
      teamLeader: '',
      sport: '',
      TeamName: '',
      phone:'',
      email: ''
    });
  }
    render() {
      const value = this.state.value

      return (
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='Team Captain' control='input' placeholder='Team Captain' onChange={this.handleChange} value={this.state.inputValue}/>
                </Form.Group>
              </Form>
           </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group widths='equal'> 
                  <Form.Input label='Sport' control='input' placeholder='Sport' onChange={this.handleChange} value={this.state.inputValue}/>
                </Form.Group>
              </Form>
           </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='Team Name' control='input' placeholder='Team Name' onChange={this.handleChange} value={this.state.inputValue}/>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group widths='equal'> 
                  <Form.Input label='Phone' control='input' placeholder='Phone' onChange={this.handleChange} value={this.state.inputValue}/>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='Email' control='input' placeholder='Email' onChange={this.handleChange} value={this.state.inputValue}/>
                </Form.Group>
              </Form>
           </Grid.Column>
          </Grid.Row>

        <label>Sport</label>
        <Form.Radio label='Basketball' value='Basketball' checked={value === 'Basketball'} onChange={this.handleChange} />
        <Form.Radio label='Baseball' value='Softball' checked={value === 'Baseball'} onChange={this.handleChange} />
        <Form.Radio label='Soccer' value='Soccer' checked={value === 'Soccer'} onChange={this.handleChange} />
        <Form.Radio label='Volleyball' value='Volleyball' checked={value === 'Volleyball'} onChange={this.handleChange} />
        <Form.Radio label='Football' value='Football' checked={value === 'Football'} onChange={this.handleChange} />
      
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Group>
                <Link to='/TeamDashboard'>
                  <Button type='submit'>Submit</Button>
                  <Divider hidden />
                </Link>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>         
      </Grid>
    )
  }
}


export default TeamForm