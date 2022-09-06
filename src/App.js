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

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import "assets/styles/index.css";
import React from "react";


function App() {
  React.useEffect(() => {
    // get iframes and hide them
    const iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframes.length; i++) {
      iframes[i].style.display = "none !important";
      iframes[i].style.position = "relative";
      iframes[i].style.zIndex = "-1";
    }
  }, []);

  return (
    <>
      {/* <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch> */}
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Route exact path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/tables" component={Tables} />
        <Route path="/maps" component={Maps} />
      </div>
    </>
  );
}

export default App;
