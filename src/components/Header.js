import React from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'

class Header extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        borderless
        inverted
        color='blue'
        size='huge'
      >
        <Container>
          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
          <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
          <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
          <Menu.Item position='right'><Button color='teal'>Sign In</Button></Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header

