import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Paginations from "./components/Pagination";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);
  const [repoOwner, setRepoOwner] = useState(`facebook`)
  const [repoName, setRepoName] = useState(`react`)
  const [repoInfo, setRepoInfo] = useState({})
  const [githubIssues, setGithubIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [sortIssues, setSortIssues] = useState(`comments`)
  
  console.log("repoOwner", repoOwner)
  console.log("repoName", repoName)

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
      // console.log(New accessToken: ${accessToken});

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

  useEffect(()=>{
    getGithubRepo()
  },[])

  // get react issues
  const getGithubIssuesData = async () => {

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=${currentPage}?per_page=20&sort=${sortIssues}&order=asc`
    const response = await fetch(url)

    // get header link
    const link = await response.headers.get('link')

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
      {/* <h1>Hello World!</h1> */}
        <NavBar 
          setRepoOwner = {setRepoOwner}
          setRepoName = {setRepoName}        
        
        />
      <section className="section">
        <Paginations 
          repoInfo = {repoInfo}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          getGithubIssuesData = {()=>getGithubIssuesData()}
          
        />
        <Body githubIssues={githubIssues} />
        <Footer />
      </section>
    </div>
  );
}

export default App;