import React, { useState, useEffect } from "react";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
    .get("/api/v1/user_forms/index")
    .then((response) => {
      setMembers(response.data);
    }); 
  }, []);

    const allMembers = members.map((user, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{user.state}</h5>
            <h6 className="card-title">{user.occupation}</h6>
        </div>
      </div>
    </div>
  ));
  
  return (
    <main>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-6">Member State Distribution and Occupation</h1>
        </div>
      </div>
      <div className="pt-5">
        <div className="container">
            <div className="row">
                {allMembers}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Members;
