import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <NavBar />
          <Main />
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
