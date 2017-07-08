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
    <Divider hidden /> 
    <Modal.Content>
       <Modal.Description>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>      
              <Form style={{width: '80%', margin: 'auto'}}>
             
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Grid centered columns={1}>
                            <Button style={{width: '20vh'}} textAlign="center" color="teal" type='submit'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon link size='huge' name='phone' />
                                <Header style={{width: '100%', color: 'white'}} size='huge' textAlign='center'>
                                  Text
                                </Header>
                            </Button>
                        </Grid>
                    </Grid.Column>
                  </Grid>             
              </Form>
            </Grid.Column>
            <Grid.Column>          
              <Form style={{width: '80%', margin: 'auto'}}>
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Grid centered columns={1}>
                            <Button style={{width: '20vh'}} textAlign="center" color="teal" type='submit'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon link size='huge' name='mail outline' />
                                <Header style={{width: '100%', color: 'white'}} size='huge' textAlign='center'>
                                  Message
                                </Header>
                            </Button>
                        </Grid>
                    </Grid.Column>
                  </Grid>             
              </Form>
            </Grid.Column>
          </Grid.Row>        
        </Grid>
      </Modal.Description>      
    </Modal.Content>
    <Divider hidden /> 
  </Modal>
)

export default ContactTeam