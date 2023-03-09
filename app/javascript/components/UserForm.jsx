import React, {useEffect, useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage("You have successfully signed up!");
    reset();
  };

  const client = axios.create({
    baseURL: "https://frontend-take-home.fetchrewards.com/form" 
  });

  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);

  useEffect(() => {
    client.get().then((response) => {
      setStates(response.data.states);
      setOccupations(response.data.occupations);
    });
  }, []);

  return(
    <div className="container">
      <div className="mt-3">
        <h5 className="display-5 text-center mt-5 pb-5">Sign Up</h5>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mx-auto">
            
          <form onSubmit={handleSubmit(onSubmit)}>
            {successMessage && <strong className="alert alert-success mb-5 float-center" role="alert">{successMessage}</strong>} 

            <div className="pb-5 pt-5">
              <label className="form-label">Full Name</label>
              <input
                  className="form-control"
                  type="text"
                  name="fullname"
                  required
                  placeholder="Please enter first and last name"
                  {...register("fullname")}
              />
            </div>

            <div className="pb-5">
              <label className="form-label">Email</label>
              <input
                  className="form-control"
                  type="email"
                  name="email"
                  required
                  placeholder="Please enter a valid email address"
                  {...register("email")}
              />
            </div>

            <div className="pb-5">
              <label className="form-label">Password</label>
              <input
                  className="form-control"
                  type="password"
                  name="password"
                  minLength="6"
                  placeholder="password must be at least 6 characters"
                  required
                  {...register("password")}
              />
            </div>

            <div className="pb-5">
              <label className="form-label">Occupation</label>
                <select 
                  className="form-select"
                  type="select"
                  name="occupation"
                  required
                  {...register("occupation")}
                >
                  <option>Please Select Occupation</option>
                  {occupations.map((occupation) => (
                    <option key={occupation} value={occupation}>
                      {occupation}
                    </option>
                ))}
              </select>
            </div>
              
            <div className="pb-5">
              <label className="form-label">State</label>
              <select
                  className="form-select"
                  type="text"
                  name="state"
                  id="state"
                  required
                  {...register("state")}
              >
                <option>Please Select State</option>
                {states.map((state) => (
                  <option key={state.name} value={state.name} >
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button type="submit" className="btn sign-up-button mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
