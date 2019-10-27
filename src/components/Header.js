import React from "react";
import AddIssue from "./AddIssue";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Header(props) {
  return (
    <Router>
      <div className="container col-md-8 col-12 mb-4">
        <div className="add-issue-btn">
          <h4>{props.repoOwner}/{props.repoName}</h4>
          <div className="">
            <button type="button" className="btn btn-success font-weight-bold">
              <Link to="/addIssue" className="link-to-add">New issue</Link>
            </button>
          </div>
        </div>

        <Switch>
          <Route path="/addIssue">
            <AddIssue 
              token = {props.token}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
