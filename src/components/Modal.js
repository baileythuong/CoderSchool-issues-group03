import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal(props) {
  console.log(props);
  return (
    <>
      <Modal show={props.show} onClick={props.onClick}>
        <Modal.Header closeButton>
          <Modal.Title>{props.issue.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
