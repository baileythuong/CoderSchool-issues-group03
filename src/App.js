import React, { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import Body from "./components/Body";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(null);

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

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <NavBar />
      <Pagination />
      <Body />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
