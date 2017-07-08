import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Header, Icon, Image, Modal } from 'semantic-ui-react'


const ContactTeam = () => (
  <Modal size='small' trigger={<Grid centered columns={1}>
                    <Grid.Column>
                        <Icon link name='comment outline' />
                    </Grid.Column>
                  </Grid>} closeIcon='close'>
    <Header icon='comment outline' content='Contact Team' />
    <Modal.Content>
       <Modal.Description>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>      
              <Form style={{width: '80%', margin: 'auto'}}>
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Grid centered columns={1}>
                            <Button textAlign="center" color="teal" type='submit'>
                                <Icon link size='huge' name='phone' />
                                Text
                            </Button>
                        </Grid>
                    </Grid.Column>
                  </Grid>             
              </Form>
            </Grid.Column>
            <Grid.Column>          
              <Form style={{width: '80%', margin: 'auto'}}>
                <Grid centered columns={1}>
                    <Grid.Row><Grid.Column>
                        <Button textAlign="center" color="teal" type='submit'>
                            <Icon bordered inverted color='teal' size='huge' name='mail' />
                            Email
                        </Button>
                    </Grid.Column></Grid.Row>
                  </Grid>             
              </Form>
            </Grid.Column>
          </Grid.Row>        
        </Grid>
      </Modal.Description>      
    </Modal.Content>

  </Modal>
)

export default ContactTeam