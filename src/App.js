import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header"
import Paginations from "./components/Pagination";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({})
  const [repoOwner, setRepoOwner] = useState(`facebook`);
  const [repoName, setRepoName] = useState(`react`);
  const [repoInfo, setRepoInfo] = useState({});
  const [githubIssues, setGithubIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortIssues, setSortIssues] = useState(`created`);
  const [filterParameter, setFilterParameter] = useState({});

  console.log(currentUser)
  useEffect(() => {
    const clientId = `05449736a72133433d33`;
    const secretKey = `3643fcfdf9c6ea7a80f04bef6cef10ed44dd491b`;

    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;
    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}&client_secret=${secretKey}`
      );
    }

    if (accessToken) {
      // console.log(`New accessToken: ${accessToken}`);
      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
      getCurrentUser(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
      getCurrentUser(accessToken);
    }
  }, []);

  useEffect(() => {
    getGithubRepo();
  }, []);

  useEffect(() => {
    getGithubIssuesData();
  }, [currentPage, sortIssues]);

  // get react issues
  const getGithubIssuesData = async () => {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=all&page=${currentPage}&per_page=20&sort=${sortIssues}`;
    const response = await fetch(url);

    // get header link
    const link = await response.headers.get("link");

    const githubIssuesData = await response.json();
    setGithubIssues(githubIssuesData);
  };

  // get react repo to find total issues
  const getGithubRepo = async () => {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    const response = await fetch(url);
    const repoData = await response.json();
    setRepoInfo(repoData);
  };

  //get current user data (name)
  const getCurrentUser = async token => {
    const url = `https://api.github.com/user?access_token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    setCurrentUser(data);
  };


  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <NavBar
        setRepoOwner={setRepoOwner}
        setRepoName={setRepoName}
        getGithubIssuesData={getGithubIssuesData}
        getGithubRepo={getGithubRepo}
      />

      <Header 
      repoOwner={repoOwner}
      repoName={repoName}
      token = {token}
      />
      <section className="section">
        <Body
          githubIssues={githubIssues}
          repoInfo={repoInfo}
          repoOwner={repoOwner}
          repoName={repoName}
          setSortIssues={setSortIssues}
        />

        <Paginations
          repoInfo={repoInfo}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <Footer />
      </section>
    </div>
  );
}

export default App;
