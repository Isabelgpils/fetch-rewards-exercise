import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserForm from "../components/UserForm";

export default (
  <Router>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/UserForm" element={< UserForm />} />
    </Routes>
  </Router>
);
