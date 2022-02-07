import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function NavBar({ title, mode,toggleMode,toggleMode1,toggleMode2 }) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a> */}
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
                        </ul>
                        {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} mx-2` } >
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode1}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                        </div>
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode2}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}





NavBar.propTypes = {
    title: PropTypes.string
}