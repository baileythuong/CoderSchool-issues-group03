import React, { useState } from "react";
import Moment from "react-moment";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyModal from "./Modal";

export default function Body(props) {
  const [modalShow, setModalShow] = useState(false);
  const [issue, setIssue] = useState([]);

  const handleClose = () => setModalShow(false);

  const handleShow = issue => {
    setIssue(issue);
    setModalShow(true);
  };

  return (
    <>
      <div className="container d-flex flex-column">
        <Card>
          <Card.Header>
            <div className="d-flex flex-row">
              <h5 className="small">{props.repoInfo.open_issues}</h5>
              <h5 className="small">Open</h5>
              <Nav className="ml-auto">
                <NavDropdown title="Author" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Labels" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Milestones" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Assignee" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Sort" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Card.Header>
          {props.githubIssues && props.githubIssues.map(issue => {
            return (
              <ListGroup variant="flush">
                <ListGroup.Item action>
                  <h6>
                    <strong>
                      <a
                        className="text-decoration-none text-dark"
                        href="#Link"
                        onClick={() => handleShow(issue)}
                      >
                        {issue.title}
                      </a>
                    </strong>
                  </h6>
                  <h6 className="small">
                    #{issue.id} opened{" "}
                    <Moment fromNow>{issue.created_at}</Moment> by{" "}
                    <a href={`https://github.com/${issue.user.login}`}>
                      {issue.user.login}
                    </a>
                  </h6>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Card>
        <MyModal
          show={modalShow}
          onClick={() => handleClose(false)}
          issue={issue}
        />
      </div>
    </>
  );
}
