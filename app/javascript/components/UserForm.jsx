import React, {useEffect, useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function UserCreateForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [occupation, setOccupation] = useState("");
  const { register, reset, handleSubmit } = useForm();
 
 
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
    setSuccessMessage("You have successfully signed up!");
    reset();
      
    axios
    .post('https://frontend-take-home.fetchrewards.com/form', userData) 
    .then((response) => {
        (response.data);
    })
    .catch((error)=> {
        console.log(error.response.data)
    })
    
    const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
    const headers = axios.create({
      headers: {
        common: {
          'X-CSRF-Token': token.content
        }
      }
    })

    axios
    .post('http://localhost:3000/api/v1/user_forms/create', userData)
      headers: headers   
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
                    value={name}
                    required
                    placeholder="Please enter first and last name"
                    {...register("name")}
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="pb-5">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="email"
                    value={email}
                    required
                    placeholder="Please enter a valid email address"
                    {...register("email")}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="pb-5">
                <label className="form-label">Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    minLength="6"
                    placeholder="password must be at least 6 characters"
                    required
                    {...register("password")}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="pb-5">
                <label className="form-label">Occupation</label>
                  <select 
                    className="form-select"
                    type="select"
                    value={occupation}
                    required
                    {...register("occupation")}
                    name="occupation"
                    onChange={e => setOccupation(e.target.value)}
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
                    id="state"
                    value={state}
                    required
                    {...register("state")}
                    name="state"
                    onChange={e => setState(e.target.value)}

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
