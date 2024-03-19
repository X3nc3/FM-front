import React from "react";
//components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//page
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
