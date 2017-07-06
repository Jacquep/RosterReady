import React from 'react'
import { Menu, Container } from 'semantic-ui-react'


const Footer = () => {
  return (
  	<Menu 
  	  style={{width:'100%'}}
  	  vertical 
  	>

      <Menu
      	attached
        borderless       
        size='massive'
        color='blue'
  		  inverted
      >
        <Container>
          <Menu.Item header>Links</Menu.Item>
          <Menu.Item name='aboutUs'>About</Menu.Item>
          <Menu.Item name='contactUs'>Contact Us</Menu.Item>
          <Menu.Item name='dashboard'>My Dashboard</Menu.Item>
        </Container>
      </Menu>
      <Menu
      	attached     	
        borderless
        size='massive'
        color='blue'
  		  inverted
      >

      </Menu>
    </Menu>

  )
}

export default Footer
