import React from "react";
import Moment from "react-moment";
import { Modal, Media, Badge, Image } from "react-bootstrap";
const ReactMarkdown = require("react-markdown");

export default function MyModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onClick}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="d-flex">
            <span>
              #{props.issue.number} {props.issue.title}&nbsp;
            </span>
            <h3>
              <Badge
                variant={props.issue.state === "open" ? "success" : "danger"}
              >
                {props.issue.state}
              </Badge>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="px-3 py-3">
          <Media>
            <Image
              width={64}
              height={64}
              className="mr-3"
              src={props.issue.user ? props.issue.user.avatar_url : "Anony"}
              alt="Generic placeholder"
              rounded
            />
            <Media.Body>
              <div className="d-flex">
                <h5>
                  {props.issue.user ? props.issue.user.login : "Anonymous"}
                </h5>
                <h6 className="text-muted ml-5">
                  opened this issue{" "}
                  <Moment fromNow>{props.issue.created_at}</Moment>
                </h6>
              </div>
            </Media.Body>
          </Media>
        </Modal.Title>

        <Modal.Body className="body-image">
          <samp>
            <ReactMarkdown
              source={props.issue.body}
              escapeHtml={false}
              readOnly
            />
          </samp>
          <hr />
        </Modal.Body>
        {props.comments.map(comment => {
          return (
            <div>
              <Modal.Body className="container body-image">
                <ul className="list-unstyled">
                  <Media as="li">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src={comment.user.avatar_url}
                      alt="Profile Image"
                      rounded
                    />
                    <Media.Body className="container">
                      <div className="d-flex">
                        <h5>{comment.user.login}</h5>
                        <h6 className="text-muted ml-5">
                          commented{" "}
                          <Moment fromNow>{comment.updated_at}</Moment>
                        </h6>
                      </div>
                      <p>
                        <ReactMarkdown
                          source={comment.body}
                          escapeHtml={false}
                          readOnly
                        />
                      </p>
                    </Media.Body>
                  </Media>
                  <hr />
                </ul>
              </Modal.Body>
            </div>
          );
        })}
      </Modal>
    </>
  );
}
