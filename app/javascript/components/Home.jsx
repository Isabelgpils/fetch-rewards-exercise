import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container">
          <h3 className="display-3">Fetch Rewards<span id="trademark">&reg;</span></h3>
          <p className="lead">Have Fun. Save Money.&reg; </p>
          <hr className="my-4" />
          <Link
            to="/UserForm"
            className="btn btn-lg custom-button"
            role="button"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
