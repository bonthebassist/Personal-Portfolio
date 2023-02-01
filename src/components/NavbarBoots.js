import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { Icon } from '@iconify/react';

function NavbarBoots() {
  return (
    <>
      {[true, 'sm', 'md'].map((expand) => (
        <Navbar key={expand} fixed="top" expand={expand} className="mb-3" bg="dark" variant="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand to="/" id="site-title">Bonnie Aue</Navbar.Brand>

            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}><Icon icon="charm:menu-hamburger" color="white" width="30" height="30" /></Navbar.Toggle>
            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src=""
                    height='50'
                    alt='Bonnie Aue'
                    loading='lazy'
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                      <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/code">
                        <Nav.Link>Code</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/design">
                        <Nav.Link>Design</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/cv">
                        <Nav.Link>CV</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                      </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBoots;