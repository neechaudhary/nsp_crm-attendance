import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Leave_app from "./components/Leave_app";
import Menu from "./components/Menu";
import Project from "./components/Project";
import Ticket from "./components/Ticket";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/work" element={<Work />} />
          <Route path="/tickets" element={<Ticket />} />
          <Route path="/project" element={<Project />} />
          <Route path="/leave-application" element={<Leave_app />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
