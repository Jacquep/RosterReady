import React from 'react'
import { Button, Menu, Segment } from 'semantic-ui-react'

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

const Navbar = () => {

  render() {
    const { activeItem } = this.state

  return (
    <Menu>


      <Menu.Item class= 'right item'name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
      <Menu.Item class= 'right item'name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
      <Menu.Item class= 'right item'name='Contact Us' active={activeItem === 'Contact Us'} onClick={this.handleItemClick} />
      <Menu.Item class= 'right item'>
      <Button primary>Log-in</Button>
      </Menu.Item>

      <Menu.Item class= 'right item'>
        <Button primary>Sign up</Button>
      </Menu.Item>
    </Menu>
  )
}

export default navbar

