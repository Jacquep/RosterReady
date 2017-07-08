import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Container } from 'semantic-ui-react'
import RegSelect from './RegSelect'

class Header extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        borderless
        inverted
        fixed='top'
        color='blue'
        size='huge'
      >
        <Container>
          <Menu.Item header><Link to='/'>Roster Ready</Link></Menu.Item>
          <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
          <Menu.Item name='contactUs' active={activeItem === 'contactUs'} onClick={this.handleItemClick} />
          
          <Menu.Item position='right'>
            <RegSelect />
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header

