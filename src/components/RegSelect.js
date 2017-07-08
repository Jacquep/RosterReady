import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Header, Image, Modal } from 'semantic-ui-react'


const RegSelect = () => (
  <Modal trigger={<Button color="teal">Login / Sign Up</Button>} closeIcon='close'>
    <Header icon='trophy' content='Login or Sign Up' />
    <Modal.Content>
       <Modal.Description>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header>Already Registered?</Header>
              <p>Please Sign In.</p>             

              <Form style={{width: '80%', margin: 'auto'}}>
                <Form.Input name='Username' label='Username' placeholder='Username' />
                <Form.Input name='Password' label='Password' type="Password" placeholder='Password' />

                <Divider hidden />

                <Form.Group>
                  <Link to='/'>
                    <Button color="teal" type='submit'>Submit</Button>
                  </Link>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Grid centered columns={1}>
                <Grid.Column>
                  <Header>Not Yet Registered?</Header>
                  <p>Please Sign Up.</p>   
                  <Divider hidden />
                  <Link to='/registerplayer'>
                    <Button size="huge" color="teal" type='submit'>Sign Up As A Player</Button>
                  </Link>
                  <Divider hidden />
                  <Link to='/registerteam'>
                    <Button size="huge" color="teal" type='submit'>&nbsp;Sign Up As A Team&nbsp;&nbsp;</Button>
                  </Link>
                 </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>        
        </Grid>
      </Modal.Description>      
    </Modal.Content>

  </Modal>
)

export default RegSelect