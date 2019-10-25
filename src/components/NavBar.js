import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar(props) {
  // console.log(props.getGithubIssuesData)
  const handleSearchInput = e => {
    // if(e.keyCode === 13) return props.getGithubIssuesData(); props.getGithubRepo()
    let repoOwner = e.target.value.split("/")[0];
    let repoName = e.target.value.split("/")[1];
    props.setRepoOwner(repoOwner);
    props.setRepoName(repoName);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
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
          <FormControl
            type="text"
            placeholder="Search or jump to..."
            className="justify-content-start mr-2"
            onChange={e => handleSearchInput(e)}
          />
          <Button
            variant="outline-light"
            onClick={() => {
              props.getGithubIssuesData();
              props.getGithubRepo();
            }}
          >
            Search
          </Button>
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
