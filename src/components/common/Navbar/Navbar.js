import React from 'react'
import {Menu,Container, Button, Image} from 'semantic-ui-react'

function Navbar() {
    return (
        <Menu inverted borderless fixed="top" className="navbar">
            <Container>
                <Menu.Item header>
                    <Image size="tiny" src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Waybuloo Friends
                </Menu.Item>
                <Menu.Item>Events</Menu.Item>
                <Menu.Item>
                    <Button color="blue" content="Create Event"/>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted style={{marginRight: "0.5em"}}>Login</Button>
                    <Button basic inverted>Register</Button>
                </Menu.Item>
            </Container>   
        </Menu>   
    )
}

export default Navbar
