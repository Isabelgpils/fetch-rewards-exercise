import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserForm from "../components/UserForm";
import Success from "../components/Success";
import Members from "../components/Members";

export default (
  <Router>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/UserForm" element={< UserForm />} />
      <Route path="/Success" element={< Success />} />
      <Route path="/Members" element={< Members  />} />
    </Routes>
  </Router>
);
