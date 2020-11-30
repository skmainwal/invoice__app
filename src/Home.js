import React from "react";
import Invoice from "./components/Invoice";
import New_Invoice from "./components/New_Invoice";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Invoice_form from "./invoice_form/Invoice_form";
import Form from "./form/Form";
import SidebarOption from "./components/SidebarOption";
import { useSelector } from "react-redux";
import Login from "./login/Login";

function Home() {
  const State = useSelector((state) => state);
  const user = State.user;
  return (
    <div className="App d-flex">
      {/* <Login /> */}
      {!user ? (
        <Login />
      ) : (
        <Router>
          <div className="d-flex">
            <SidebarOption />
            <Switch>
              <Route exact path="/" component={New_Invoice} />
              <Route exact path="/invoice_form" component={Invoice_form} />
              <Route exact path="/company_address/:id" component={Form} />
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default Home;
