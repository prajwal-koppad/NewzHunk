import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      <div>
        {/* <nav class="navbar navbar-default "></nav>
        <nav class="navbar navbar-default "></nav> */}
        <nav className="navbar navbar-expand-lg fixed-top bg-primary fw-bold" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewzHunk</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default NavBar
