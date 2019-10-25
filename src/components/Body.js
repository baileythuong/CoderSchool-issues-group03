import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyModal from "./Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const access_token = `82a9fe65aa85b411fb5acaeb3a81291094c9a2c1`;

export default function Body(props) {
  const [modalShow, setModalShow] = useState(false);
  const [issue, setIssue] = useState([]);
  const [githubComments, setGithubComments] = useState([]);
  const [labelList, setLabelList] = useState([]);

  const getGithubComments = async issue => {
    console.log("issue num", issue.number);
    const url = `https://api.github.com/repos/${props.repoOwner}/${props.repoName}/issues/${issue.number}/comments`;
    const response = await fetch(url);
    const githubComments = await response.json();
    setGithubComments(githubComments);

    console.log(githubComments);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleShow = issue => {
    setIssue(issue);
    setModalShow(true);
    getGithubComments(issue);
  };

  const renderStateIcon = state => {
    if (state === "open") {
      return (
        <OverlayTrigger overlay={<Tooltip>Open</Tooltip>}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-2 open-warning-icon"
          />
        </OverlayTrigger>
      );
    } else {
      return (
        <OverlayTrigger overlay={<Tooltip>Closed</Tooltip>}>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-2 closed-warning-icon"
          />
        </OverlayTrigger>
      );
    }
  };

  const getLabels = async () => {
    const url = `https://api.github.com/repos/${props.repoOwner}/${props.repoName}/labels`;
    const response = await fetch(url);
    const labelList = await response.json();
    setLabelList(labelList);
    console.log(labelList);
  };

  const renderIssueList = () => {
    if (props.githubIssues == null) {
      return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <h2>undefined.</h2>
        </div>
      );
    } else if (props.githubIssues.length === 0) {
      return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          <h2>No results matched your search.</h2>
        </div>
      );
    } else {
      return props.githubIssues.map(issue => {
        return (
          <ListGroup variant="flush">
            <ListGroup.Item action className="d-flex flex-row align-items-top">
              <span>{renderStateIcon(issue.state)}</span>
              <div>
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
                  #{issue.id} opened <Moment fromNow>{issue.created_at}</Moment>{" "}
                  by{" "}
                  <a href={`https://github.com/${issue.user.login}`}>
                    {issue.user.login}
                  </a>
                </h6>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      });
    }
  };

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <>
      <div className="container d-flex flex-column">
        <Card>
          <Card.Header>
            <div className="d-flex flex-row">
              <div className="d-flex flex-row align-items-center">
                <h5 className="small m-0">
                  {props.repoInfo.open_issues} Open{" "}
                </h5>
                <h5 className="small m-0"> / Closed</h5>
              </div>
              <Nav className="ml-auto small">
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
                  <Card className="small">
                    <Card.Header>Filter by labels</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item></ListGroup.Item>

                      {labelList.map(label => {
                        return (
                          <NavDropdown.Item
                            className="small"
                            href="#action/3.1"
                          >
                            <span
                              className="label-select-menu"
                              style={{ backgroundColor: `#${label.color}` }}
                            ></span>{" "}
                            {label.name}
                          </NavDropdown.Item>
                        );
                      })}
                    </ListGroup>
                  </Card>
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
          <span>{renderIssueList()}</span>
          {/* {props.githubIssues.length === 0 ? (
            <div className="container d-flex flex-column justify-content-center align-items-center p-5">
              <h2>No results matched your search.</h2>
            </div>
          ) : (
            props.githubIssues.map(issue => {
              return (
                <ListGroup variant="flush">
                  <ListGroup.Item
                    action
                    className="d-flex flex-row align-items-top"
                  >
                    <span>{renderStateIcon(issue.state)}</span>
                    <div>
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
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              );
            })
          )} */}
        </Card>
        <MyModal
          show={modalShow}
          onClick={handleClose}
          issue={issue}
          comments={githubComments}
        />
      </div>
    </>
  );
}
