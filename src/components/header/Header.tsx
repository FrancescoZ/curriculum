import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
  function handleClick(event) {
  }

  return (
    <header>
      <Navbar
        className={"navbar"}
        collapseOnSelect
        expand="xl"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">
            <h1>Francesco Zanoli</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#home" onClick={handleClick}>
                Home
              </Nav.Link>
              <Nav.Link href="#timeline" onClick={handleClick}>
                Timeline
              </Nav.Link>
              <Nav.Link href="#skill" onClick={handleClick}>
                Skills
              </Nav.Link>
              <Nav.Link href="#interests" onClick={handleClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
