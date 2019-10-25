import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Paginations from "./components/Pagination";
import Body from "./components/Body";
import MyModal from "./components/Modal";
import Footer from "./components/Footer"

const access_token = `82a9fe65aa85b411fb5acaeb3a81291094c9a2c1`;

function App() {
  const [token, setToken] = useState(null);
  const [repoOwner, setRepoOwner] = useState(`facebook`);
  const [repoName, setRepoName] = useState(`react`);
  const [repoInfo, setRepoInfo] = useState({});
  const [githubIssues, setGithubIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortIssues, setSortIssues] = useState(`comments`);
  const [filterParameter, setFilterParameter] = useState({});

  useEffect(() => {

    
    const clientId = `05449736a72133433d33`;
    const secretKey = `3643fcfdf9c6ea7a80f04bef6cef10ed44dd491b`

    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;
  // console.log('object')
    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}&client_secret=${secretKey}`
      );
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
      console.log("hansol", existingToken);
      console.log(existingToken);
    }
  }, []);

  useEffect(() => {
    getGithubIssuesData();
    getGithubRepo();
  }, []);

  useEffect(() => {
    getGithubIssuesData();
  }, [currentPage]);

  // get react issues
  const getGithubIssuesData = async () => {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=${currentPage}&per_page=20&sort=${sortIssues}&order=asc&state=all`;
    const response = await fetch(url);

    // get header link
    const link = await response.headers.get("link");

    const githubIssuesData = await response.json();
    setGithubIssues(githubIssuesData);

    console.log(githubIssuesData)
  }

  

  // get react repo to find total issues
  const getGithubRepo = async () => {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}`;
    const response = await fetch(url);
    const repoData = await response.json();
    setRepoInfo(repoData);
  };
  console.log(repoInfo, githubIssues);
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <NavBar
        setRepoOwner={setRepoOwner}
        setRepoName={setRepoName}
        getGithubIssuesData={getGithubIssuesData}
        getGithubRepo={getGithubRepo}
      />
      <section className="section">
        <Body
          githubIssues={githubIssues}
          repoInfo={repoInfo}
          repoOwner={repoOwner}
          repoName={repoName}
        />
        {/* <Modal /> */}
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