import React from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal , Image, Media } from "react-bootstrap";

export default function CommentList(props) {
  return (
    <div className="commentList">
        {props.comments.map((comment) => (
        <Modal.Body className="container">
            <ul className="list-unstyled">
              <Media as="li">
                <Image
                  width={64}
                  height={64}
                  className="mr-3"
                  src={props.currentuser.avatar_url}
                  alt="Profile Image"
                  rounded
                />
                <Media.Body className="container body-image">
                  <div className="d-flex">
                  <h5>{comment.name}</h5>
                  <h6 className="text-muted ml-5">commented <Moment fromNow>{comment.time}</Moment></h6>
                  <div>
                  <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="mr-2 ml-3"
                  onClick ={()=> props.removeComment(comment.id)}
                  />
                  </div>
                  </div>
                  <p>
                {comment.message}
                  </p>

                </Media.Body>
              </Media>
              <hr />
            </ul>
            </Modal.Body>
                )).reverse()}

      
    </div>
  );
}