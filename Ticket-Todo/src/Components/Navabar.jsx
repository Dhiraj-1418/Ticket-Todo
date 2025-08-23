import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navabar() {
  return (
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Online Ticket Counter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Dhiraj Yadav</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navabar
