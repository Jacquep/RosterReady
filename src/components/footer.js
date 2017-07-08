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
