import React, {useEffect, useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const { register, reset, handleSubmit, getValues } = useForm();
  // const userData = getValues("name", "email", "password", "state", "occupation")
 
  useEffect(() => {
    axios
    .get("https://frontend-take-home.fetchrewards.com/form")
    .then((response) => {
      setStates(response.data.states);
      setOccupations(response.data.occupations);
    }); 
  }, []);

  const onSubmit = async () => {     
    const userData = getValues("name", "email", "password", "state", "occupation")
    setSuccessMessage("You have successfully signed up!");
    reset();
      
    axios
    .post("https://frontend-take-home.fetchrewards.com/form", userData) 
    .then((response) => {
        (response.data);
    })
    .catch((error)=> {
        console.log(error.response.data)
    })
    
    const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
    const headers = axios.create({
      headers: {common: {'X-CSRF-Token': token.content}}
    })
    axios
    .post("/api/v1/user_forms/create", userData, {headers: headers})
    .then((response) => {
      (response.data);
    })
    .catch((error)=> {
      console.log(error.response.data)
    })
  }

  return(
    <div className="container">
      <div className="mt-3">
        <h5 className="display-5 text-center mt-3 pb-3">Sign Up</h5>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mx-auto">          
            <form onSubmit={handleSubmit(onSubmit)}>
              {successMessage && <strong className="alert alert-success mb-5 float-center" role="alert">{successMessage}</strong>} 

              <div className="pb-3 pt-5">
                <label className="form-label">Full Name</label>
                <input {...register("name"), {required: true}}
                  className="form-control"
                  type="text"
                  placeholder="Please enter first and last name"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Email</label>
                <input {...register("email"), 
                  {required: true, 
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please Enter A Valid Email!"}
                  }}
                  className="form-control"
                  type="email"
                  placeholder="Please enter a valid email address"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Password</label>
                  <input {...register("password"), {required: "Please Enter Your Password", minLength: {value: 8, message: "Password must be at least 8 characters long!"}}}
                    className="form-control"
                    type="password"
                    placeholder="Password must be at least 8 characters long"
                  />
              </div>

              <div className="pb-3">
                <label className="form-label">Occupation</label>
                  <select {...register("occupation"), {required: true, placeholder: "Please Select Occupation"}}
                    className="form-select"
                    type="select"
                  >
                  {occupations.map((occupation) => (
                    <option key={occupation} value={occupation}>
                      {occupation}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="pb-3">
                <label className="form-label">State</label>
                <select {...register("state"), {required: true, placeholder: "Please Select State"}}
                  className="form-select"
                  type="select"
                >
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
