import React from "react";
import CommentList from "./CommentList"
import { Form, Button, Modal, InputGroup , FormControl } from "react-bootstrap";

class CommentForm extends React.Component {


      constructor(props) {
        super(props);
        this.state = {
            comments: [],
            comment:{
                id : 0,
                name : 'Hansol',
                message : '',
                time : ''
            },
            value: '',
            num : 1
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
      }
    

      async handleChange(event) {
        await this.setState({value : event.target.value})
        await this.setState(prevState => ({
            comment : {
                ...prevState.comment,
                message : this.state.value,
                time : new Date()
            }
        })
        )
      };
    

      handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
          comment : {
              ...prevState.comment,
              id: this.state.num ++
          }
        })
        )

        let { comment } = this.state;
         this.addComment(comment);
                // clear the message box
                event.target.reset();
        }

      addComment(comment){
        this.setState({
            comments: [comment, ...this.state.comments]
          });
      }

      removeComment(id) {
        let restComments = this.state.comments && this.state.comments.filter((comment) => comment.id != id)
        this.setState({
          comments : restComments
        })
      }

      

    render() {

        return (
            <div>
            <Modal.Body>
            <CommentList 
            comments = {this.state.comments}
            removeComment = {this.removeComment}
             />
            </Modal.Body>   
            <Modal.Body>
            <Form
            method="post" 
            onSubmit={(e) => this.handleSubmit(e)}
            onChange={(e) => this.handleChange(e)}
            value={this.state.comment.message} >
                <Form.Group 
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                    as="textarea" 
                    rows="3"
                    name="message"
                     />
                    <InputGroup.Append>
                    <Button 
                    variant="outline-dark"
                    type="submit" 
                    >
                        Submit
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
                </Form.Group>
            </Form>
          </Modal.Body>
          </div>
        )
    }
}
export default CommentForm;