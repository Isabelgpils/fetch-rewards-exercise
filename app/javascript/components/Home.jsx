import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return (
    <main role="main" className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container">
          <h1 role="banner" className="display-3">Fetch Rewards<span id="trademark">&reg;</span></h1>
          <h5 className="">Have Fun. Save Money.&reg; </h5>
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
    </main>
  );
}
export default Home;
