import React, { useState } from "react";
import { Tab, Tabs, Form } from "react-bootstrap";

const ReactMarkdown = require("react-markdown");

export default function AddIssue() {
  const placeholder = `
      <!--
      Note: if the issue is about documentation or the website, please file it at:
      https://github.com/reactjs/reactjs.org/issues/new
      -->

      **Do you want to request a *feature* or report a *bug*?**

      **What is the current behavior?**

      **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle (https://jsfiddle.net/Luktwrdm/) or CodeSandbox (https://codesandbox.io/s/new) example below:**

      **What is the expected behavior?**

      **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?**`;

  const [issueTitle, setIssueTitle] = useState("");
  const [issueContent, setIssueContent] = useState(placeholder);

  console.log("test", issueContent);

  const postNewIssue = async () => {
    let data = {
      title: { issueTitle },
      body: { issueContent }
    };
    const url = `https://api.github.com/repos/facebook/react/issues`;
    const response = await fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/vnd.github.symmetra-preview+json"
      },
      body: data.toString(),
      json: true
    });
    console.log(response.json());
  };
  return (
    <div className="add-issue">
      <input
        type="text"
        className="add-issue-title"
        placeholder="Title"
        autoFocus
        onChange={e => setIssueTitle(e.target.value)}
      />

      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Write">
          <div className="write-input-container">
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="10"
                  placeholder={placeholder}
                  onChange={e => setIssueContent(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <span className="submit-issue-btn   ">
            {/* <button type="button" className="btn btn-outline-danger" onClick={()=>window.location.reload()}>
              Close
            </button> */}
            <button
              type="button"
              className="btn btn-success font-weight-bold"
              disabled={!issueTitle ? true : false}
              onClick={() => {postNewIssue(); alert("Thank you for your contribution! <3")}}
            >
              Submit new issue
            </button>
          </span>
        </Tab>

        <Tab eventKey="profile" title="Preview">
          <ReactMarkdown source={issueContent} escapeHtml={false} />
        </Tab>
      </Tabs>
    </div>
  );
}
