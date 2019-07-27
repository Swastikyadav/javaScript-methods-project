import React from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import "./Main.css";

let Home = () => {
  return (
    <>
    <Header/>
    <div className="timeline">
      <div className="container left">
        <div className="content">
          <h2>
            <Link to="/array">Array Methods</Link>
          </h2>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>
            <Link to="/string">String Methods</Link>
          </h2>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h2>Object Methods</h2>
          <p>Comming Soon... We are working on it.</p>
        </div>
      </div>
      {/* <div className="container right">
        <div className="content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div> */}
    </div>
    </>
  );
}

export default Home;