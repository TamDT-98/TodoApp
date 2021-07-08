import React from "react";

import Header from "../layout/Header/Header";
import Body from "../layout/Body/Body";
import Footer from "../layout/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
