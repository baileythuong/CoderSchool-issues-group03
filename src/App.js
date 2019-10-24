import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Paginations from "./components/Pagination";
import Body from "./components/Body";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);
  const [reactRepo, setReactRepo] = useState({})
  const [githubIssues, setGithubIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(reactRepo)
  
  useEffect(() => {
    const clientId = `05449736a72133433d33`;

    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      // console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }, []);

  useEffect(()=>{
    getGithubIssuesData()
  },[])

  // get react issues
  const getGithubIssuesData = async () => {

    const url = `https://api.github.com/repos/facebook/react/issues?page=${currentPage}?per_page=20`
    const response = await fetch(url)

    // get header link
    const link = await response.headers.get('link')

    const githubIssuesData = await response.json()
    setGithubIssues(githubIssuesData);
  }


  // get react repo to find total issues
  const getGithubReactRepo = async () => {
    const url = `https://api.github.com/repos/facebook/react`
    const response = await fetch(url)
    const reactRepoData = await response.json();
    setReactRepo(reactRepoData)
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
        <NavBar />
      <section className="section">
        <Paginations 
          reactRepo = {reactRepo}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          
        />
        <Body />
        <Modal />
        <Footer />
      </section>
    </div>
  );
}

export default App;
