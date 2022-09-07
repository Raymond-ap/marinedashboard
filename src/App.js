import { Route, Redirect, Switch } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import Maps from "pages/Maps";
import Footer from "components/Footer";
import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";
import ResetPassword from "pages/auth/ResetPassword";
import Overview from "components/MultiStep/Overview";
import Parent from "components/MultiStep/Parent";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
// import "assets/styles/index.css";
import React from "react";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/customer" component={Parent} />
      </Switch>
      {/* <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Route exact path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/tables" component={Tables} />
        <Route path="/maps" component={Maps} />
      </div> */}
    </>
  );
}

export default App;
