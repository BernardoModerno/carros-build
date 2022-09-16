import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'

export function NavSup () {

    return (
      <Navbar bg='dark' expand='lg' variant='dark'>
          <Container>
              <Navbar.Brand as={Link} href='/' className="nav-link text-light">
                <a className='text-white-50 px-2 text-decoration-none'>Tela Inicial</a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                      <Nav.Link
                          className="nav-link"
                          as={Link}
                          href='/cars'
                      >
                          <a className="nav-link">Carros</a>
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  
}