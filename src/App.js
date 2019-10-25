import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Paginations from "./components/Pagination";
import Body from "./components/Body";
import MyModal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);
<<<<<<< HEAD
  const [githubIssues, setGithubIssues] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
=======
<<<<<<< HEAD
  const [githubIssues, setGithubIssues] = useState([]);
  const [pagination, setPagination] = useState(1);
>>>>>>> 07e57747f71ef2c5c4825c6c442fbf0c07e53e12
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const clientId = `05449736a72133433d33`;
    const secretKey = "d0115c0e09c202d8e50ff6260e374294c187ab5a";
=======
  const [repoOwner, setRepoOwner] = useState(`facebook`)
  const [repoName, setRepoName] = useState(`react`)
  const [repoInfo, setRepoInfo] = useState({})
  const [githubIssues, setGithubIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortIssues, setSortIssues] = useState(`comments`)
  
<<<<<<< HEAD
  useEffect(() => {
    const clientId = `05449736a72133433d33`;
    const secretKey = `d0115c0e09c202d8e50ff6260e374294c187ab5a`

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
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }, []);

  useEffect(()=>{
    getGithubIssuesData()
  },[])

  const getGithubIssuesData = async () => {
    const url = `https://api.github.com/repos/facebook/react/issues?page=${currentPage}?per_page=20`
    const response = await fetch(url)
    const githubIssuesData = await response.json()
    setGithubIssues(githubIssuesData);
    console.log("github issues data", githubIssuesData);
  }
=======
  console.log("repoOwner", repoOwner)
  console.log("repoName", repoName)

  useEffect(() => {
    const clientId = `05449736a72133433d33`;
    const secretKey = `d0115c0e09c202d8e50ff6260e374294c187ab5a`
>>>>>>> 41ff3bcb01e947e05d3a6c1edcdc7e10e5b0bcf3

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
<<<<<<< HEAD
      // console.log(`New accessToken: ${accessToken}`);
=======
      // console.log(New accessToken: ${accessToken});
>>>>>>> 41ff3bcb01e947e05d3a6c1edcdc7e10e5b0bcf3

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }, []);
<<<<<<< HEAD

  useEffect(() => {
    getGithubIssuesData();
  }, []);
  // console.log(githubIssues);
  const getGithubIssuesData = async () => {
    const url = `https://api.github.com/repos/vmg/redcarpet/issues?page=${pagination}&per_page=20`;
    const response = await fetch(url);
    const githubIssuesData = await response.json();
    setGithubIssues(githubIssuesData);
    console.log("Github issues", githubIssuesData);
    console.log("hello");
  };

  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <Pagination />
        <Body githubIssues={githubIssues} />
      </div>
      <Footer />
=======

  useEffect(()=>{
    getGithubIssuesData()
  },[])

  useEffect(()=>{
    getGithubRepo()
  },[])

  // get react issues
  const getGithubIssuesData = async () => {

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=${currentPage}?per_page=20&sort=${sortIssues}&order=asc`
    const response = await fetch(url)

    // get header link
    const link = await response.headers.get('link')
>>>>>>> 07e57747f71ef2c5c4825c6c442fbf0c07e53e12

    const githubIssuesData = await response.json()
    setGithubIssues(githubIssuesData);
  }


  // get react repo to find total issues
  const getGithubRepo = async () => {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}`
    const response = await fetch(url)
    const repoData = await response.json();
    setRepoInfo(repoData)
  }

  return (
    <div className="App">
<<<<<<< HEAD
        <NavBar />
=======
      {/* <h1>Hello World!</h1> */}
        <NavBar 
          setRepoOwner = {setRepoOwner}
          setRepoName = {setRepoName}        
        
        />
>>>>>>> 07e57747f71ef2c5c4825c6c442fbf0c07e53e12
      <section className="section">
        <Paginations 
          repoInfo = {repoInfo}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          getGithubIssuesData = {()=>getGithubIssuesData()}
          
        />
        <Body />
        <Modal />
        <Footer />
      </section>
>>>>>>> 41ff3bcb01e947e05d3a6c1edcdc7e10e5b0bcf3
    </div>
  );
}

export default App;
