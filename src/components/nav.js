import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="Create">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
