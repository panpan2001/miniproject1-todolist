import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Searchbar from '../../ChildrenComponents/SearchBar/Searchbar'
function Header() {
    return (
        <header>
            <div>
                <nav className="navbar p-2 is-light" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to='/' className="navbar-item">Home</Link>
                            <Link to='/todo' className="navbar-item">To do list</Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link className="navbar-link">Notes</Link>
                                <div className="navbar-dropdown">
                                    <Link className="navbar-item">HTML/CSS</Link>
                                    <Link className="navbar-item">JS</Link>
                                    <Link className="navbar-item">ReactJS</Link>
                                    
                                </div>
                            </div>
                            <Link to='/profile' className="navbar-item">Profile</Link>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Searchbar />
                            </div>
                            {/* <div className="navbar-item">
                                <div className="buttons ">
                                    <Link className="button is-primary is-light  is-outlined  ">
                                        <strong>Sign up</strong>
                                    </Link>
                                    <Link to='/login' className="button   is-outlined">Log in</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header

{/* <div className="navbar-brand">
          <Link className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </Link>

          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div> */}


{/* <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">More</Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item">About</Link>
                <Link className="navbar-item">Jobs</Link>
                <Link className="navbar-item">Contact</Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item">Report an issue</Link>
              </div>
            </div> */}