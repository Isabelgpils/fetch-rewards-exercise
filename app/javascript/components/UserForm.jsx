import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function UserForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [occupation, setOccupation] = useState("");
  const {reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
    .get("https://frontend-take-home.fetchrewards.com/form")
    .then((response) => {
      setStates(response.data.states);
      setOccupations(response.data.occupations);
    }); 
  }, []);

  const onSubmit = async () => {     
    const userData = {name, email, password, state, occupation}
    navigate("/Success")
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
    .post("/api/v1/user_forms/create", userData, 
      {headers: headers}
    )
    .then((response) => {
      (response.data);
    })
    .catch((error)=> {
      console.log(error.response.data)
    })
  }
  
  return(
    <main className="container">
      <h1 className="display-5 text-center mt-3">Sign Up</h1>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mx-auto">          
            <form onSubmit={handleSubmit(onSubmit)}>
              {successMessage && <strong className="alert alert-success mb-5 float-center" role="alert">{successMessage}</strong>} 

              <div className="pt-3">
                <label className="form-label" for="name">Enter Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  required
                  placeholder="First Name Last Name"
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <label className="form-label" for="email">Enter Email Address</label>
                <input 
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  placeholder="name@email.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <label className="form-label" for="password">Set Your Password</label>
                  <input 
                    className="form-control"
                    type="password"
                    id="password"
                    minLength="6"
                    placeholder="password must be at least 6 characters"
                    required
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <label className="form-label" for="occupation">Please Select Your Occupation</label>
                  <select
                    className="form-select"
                    type="select"
                    id="occupation"
                    value={occupation}
                    required
                    name="occupation"
                    placeholder= "Please Select Occupation"
                    onChange={e => setOccupation(e.target.value)}
                  >
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                  ))}
                </select>
              </div>
              
              <div className="pt-4">
                <label className="form-label" for="state">Please Select Your State</label>
                <select
                    className="form-select"
                    type="text"
                    id="state"
                    value={state}
                    required
                    name="state"
                    onChange={e => setState(e.target.value)}
                >
                  {states.map((state) => (
                    <option key={state.name} value={state.name} placeholder="Please Select State" >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            
              <button type="submit" className="btn mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
    </main>
  )
}
