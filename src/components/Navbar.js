import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./Table";
import Create from "./create";
import EditContacts from "./EditFormDialog";

export default function Navbar() {
  return (
    <Router>
      <div className="Navbar">
        <nav>
          <ul>
            <Link to="/">
              {" "}
              <li>
                <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://digimantralabs.com/wp-content/uploads/2019/04/logo-min.png" />
              </li>
            </Link>
            <li className="creates">
              <Link to="/create">create</Link>
            </li>
          </ul>
        </nav>
        {/* <Switch> */}
          <Route path="/edit/:id">
            <EditContacts />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}
