import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search or jump to..." className="justify-content-start mr-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pull request</Nav.Link>
            <Nav.Link href="#link">Issues</Nav.Link>
            <Nav.Link href="#link">Marketplace</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
