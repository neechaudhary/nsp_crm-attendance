import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Leave_app from "./components/Leave_app";
import Menu from "./components/Menu";
import Project from "./components/Project";
import Ticket from "./components/Ticket";
import Work from "./components/Work";
import RegisterPage from "./components/RegisterPage";
import Admin_login from "./components/Admin_login";
import Reg_admin from "./components/Reg_admin";
import Admin_menu from "./components/Admin_menu";
import User from "./components/User";
import User_login from "./components/User_login";
import Admin_dashboard from "./components/Admin_dashboard";
import Admin_leave from "./components/Admin_leave";
import Admin_tickets from "./components/Admin_tickets";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/" element={<User_login/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/admin-login" element={<Admin_login/>}/>
          <Route path="/admin-register" element={<Reg_admin/>}/>
          {/* <Route path="/admin-register" element={<RegisterPage/>} /> */}
          <Route path="/admin-dashboard" element={<Admin_dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/work" element={<Work />} />
          <Route path="/admin-tickets" element={<Admin_tickets />} />
          <Route path="/tickets" element={<Ticket />} />
          <Route path="/project" element={<Project />} />
          <Route path="/admin-leave-application" element={<Admin_leave />} />
          <Route path="/leave-application" element={<Leave_app />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
