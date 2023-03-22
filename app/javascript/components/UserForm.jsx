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
    
    const token = document.querySelector('[name="csrf-token"]') 
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
        <header className="display-5 text-center mt-3 pb-3">Sign Up</header>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mx-auto">          
            <form onSubmit={handleSubmit(onSubmit)}>
              {successMessage && <strong className="alert alert-success mb-5 float-center" role="alert">{successMessage}</strong>} 

              <div className="pb-3 pt-5">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  required
                  placeholder="Please enter first and last name"
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Email</label>
                <input 
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  required
                  placeholder="Please enter a valid email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Password</label>
                  <input 
                    className="form-control"
                    type="password"
                    minLength="6"
                    placeholder="password must be at least 6 characters"
                    required
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Please Select Your Occupation</label>
                  <select
                    className="form-select"
                    type="select"
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
              
              <div className="pb-3">
                <label className="form-label">Please Select Your State</label>
                <select
                    className="form-select"
                    type="text"
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
