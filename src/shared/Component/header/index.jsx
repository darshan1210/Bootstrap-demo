import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './header.scss'
import MyVerticallyCenteredModal from './Login-modal'
import Button from 'react-bootstrap/Button'
import { FaLeaf } from 'react-icons/fa';

function Header() {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <Navbar expand="lg" className='navbar '>
        <Container fluid >
          <Navbar.Brand href="#">My Nature <FaLeaf /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Nav className="me-auto my-2 my-lg-1 Darshan" >

              <Nav.Link href="#action1">Home</Nav.Link>

              <Nav.Link href="#action2">Contact Us</Nav.Link>

              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Services 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" >About</Nav.Link>
             
            </Nav>

            <Button variant="primary" className='log_in_btn' onClick={() => setModalShow(true)}>
                Log-in
              </Button>
          </Navbar.Collapse>



          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </Container>
      </Navbar>
    </>
  )
}

export default Header
