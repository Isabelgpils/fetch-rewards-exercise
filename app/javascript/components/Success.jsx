import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
    return(
        <main className="vw-100 vh-100 d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container">
                    <h1 className="display-6">You have Successfully enrolled!</h1>
                    
                    <hr className="my-4" />
                    <p className="lead">View distribution of members occupations and statesl </p>
                    <Link to="/Members" className="btn btn-lg custom-button" role="button" >
                        View
                    </Link>
                </div> 
            </div>
        </main>
    );
}
