import React from "react";
import {Link} from "react-router-dom";
import {List} from "./List";
function Navbar()
{
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/Blog' className="nav-link active" aria-current="page">Blog</Link>
              </li>
              <li className="nav-item">
              <Link to='/List' className="nav-link active" aria-current="page">List</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
</div>
    )
}
export default Navbar;