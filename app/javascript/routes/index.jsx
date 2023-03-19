import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserForm from "../components/UserForm";
import SuccessMessage from "../components/SuccessMessage";


export default (
  <Router>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/UserForm" element={< UserForm />} />
      <Route path="/SuccessMessage" element={< SuccessMessage />} />
    </Routes>
  </Router>
);