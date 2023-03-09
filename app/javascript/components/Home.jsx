import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return (
    <div className="vw-100 vh-100 primary-color d-flex mt-5 pt-5 justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">

        <div className="container">
           <h1 className="display-1"><span className="hero-image inline"></span>Fetch Rewards</h1>
          <hr className="my-4" /> 
          <Link to="/Userform" className="btn btn-lg" role="button">Sign Up</Link>

        </div>
      </div>
    </div>
  );
};

export default Home;