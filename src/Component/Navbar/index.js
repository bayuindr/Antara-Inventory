import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavbarInv() {
  return (
    <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">Organization</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
    </div>
  )
}

export default NavbarInv