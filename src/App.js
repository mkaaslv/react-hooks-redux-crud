import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/users" className="navbar-brand">
          User Manager
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path="/add" component={AddUser} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
