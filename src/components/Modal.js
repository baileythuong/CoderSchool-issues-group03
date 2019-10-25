import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";
const ReactMarkdown = require('react-markdown')


export default function MyModal(props) {

  console.log('sadfasf',props.comments)
  
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
          <Modal.Title id="contained-modal-title-vcenter">{props.issue.title}
          <h3><Badge variant="success">{props.issue.state}</Badge></h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <samp>
          <ReactMarkdown
          source={props.issue.body}
          escapeHtml={false}
          readOnly
        />
        </samp>
        </Modal.Body>
        {props.comments.map((comment) => {
          return (
            <div>
          <Modal.Body className="commentsarea">
          {comment.user.login}

          <ReactMarkdown
          source={comment.body}
          escapeHtml={false}
          readOnly />
                  </Modal.Body>

          </div>
          )
        })}
        
        
          

         

      </Modal>
    </>
  );
}