import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
    return(
        <main className="vw-100 vh-100 d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container">
                    <h1 className="display-6">You have successfully enrolled!</h1>                    
                    <hr className="my-4" />
                        <h5>View members occupations and states. </h5>
                            < Link to="/Members" className="btn btn-md mt-3" role="button" >
                                View
                            </Link>
                </div> 
            </div>
        </main>
    );
}
