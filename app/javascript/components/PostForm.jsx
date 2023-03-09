import React, { useState, useEffect } from "react";
import axios from "axios";

export default Options = () => {
  const client = axios.create({
    baseURL: "https://frontend-take-home.fetchrewards.com/form" 
  });

  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);

    useEffect(() => {
      client.post().then((response) => {
        setStates(response.data.states);
        setOccupations(response.data.occupations);
      });
    }, []);
  }

