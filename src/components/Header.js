import React from 'react'
import { Link } from 'react-router-dom'
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
          <Menu.Item header><Link to='/'>Roster Ready</Link></Menu.Item>
          <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
          <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
          <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
          <Menu.Item position='right'><Link to='/register'><Button color='teal'>Sign In</Button></Link></Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header

