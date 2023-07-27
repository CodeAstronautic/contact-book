import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Table from "./Table";
import Create from "./create";
import EditContacts from "./EditFormDialog";

export default function Navbar() {
  return (
    <>
      {/* <div className="Navbar">
        <nav>
          <ul>
            <Link to="/">
              <li>
                <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://digimantralabs.com/wp-content/uploads/2019/04/logo-min.png" />
              </li>
            </Link>
            <li className="creates">
              <Link to="/create">create</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <BrowserRouter>
        <Routes>

          <Route path="/edit/:id" element={<EditContacts />}>
          </Route>
          <Route path="/create" element={<Create />}>
          </Route>
          <Route path="/" element={<Table />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
