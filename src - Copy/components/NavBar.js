import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';


function NavigationBar() {
  return (
    
    <>
    
      <Navbar expand="lg" bg="dak" className="custom-navbar shadow-sm">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Brand as={Link} to="/" className="mx-auto position-absolute start-50 translate-middle-x">
          Bookies
        </Navbar.Brand>
          
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Books" id="books-dropdown">
                  <NavDropdown.Item as={Link} to="/books">All Books</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/arabic">Arabic Books</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/english">English Books</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavigationBar;
