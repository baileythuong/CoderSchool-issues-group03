import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import Body from "./components/Body";
import MyModal from "./components/MyModal";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);
  const [githubIssues, setGithubIssues] = useState([])
  const [pagination, setPagination] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);

 useEffect(() => {
    const clientId = "05449736a72133433d33";
    const secretKey = "d0115c0e09c202d8e50ff6260e374294c187ab5a"

    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;
  console.log('object')
    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}&client_secret=${secretKey}`
      );
    }

    if (accessToken) {
      sessionStorage.setItem("token", accessToken);
      setToken(accessToken);
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }, []);


  return (
    <div className="App">
      <h1>Hello World!</h1>
        <NavBar />
      <section className="section">
        <Pagination />
        <Body />
        <MyModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
           />
        <Footer />
      </section>
    </div>
  );
}

export default App;
