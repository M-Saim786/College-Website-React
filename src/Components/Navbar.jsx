import React, { cloneElement } from 'react'
import './Navbar.css'
function Navbar() {

  return (
    <>



      {/* <!-- Pop-Up Form --> */}
      <div className="modal " id="popUp" aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Latest News</h4>
              <button id="close" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body popUp" >
              <h4>
                <marquee behavior="" direction="" className="marquee">
                  New Addmissions Started
                </marquee>
              </h4>
              <h3>
                <marquee behavior="" direction="" className="marquee">Results of Class XII AND XI HAS ANNOUNCED</marquee>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Pop-Up Form End's Here --> */}
      {/* <!-- Navbar Starts Here --> */}
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand logoa" href="#">
              <img src="https://upload.wikimedia.org/wikipedia/en/2/25/FBISE_Islamabad_%28logo%29.png" alt="" id="logo" />
              <h3>Fg Degree College <span>Hyderabad Cantt</span></h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="./Components/About.html">Mr. Principal Message</a></li>
                    <li><a className="dropdown-item" href="./Components/About.html">Vision & Message</a></li>
                    <li><a className="dropdown-item" href="./Components/About/Addmission/Addmision.html">Addmissions</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Students
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="./Components/Students/Results/index.html">Result </a></li>
                    <li><a className="dropdown-item" href="#">Model Papers</a></li>
                    <li><a className="dropdown-item" href="#">E-Sheets & OMR</a></li>
                    <li><a className="dropdown-item" href="#">Fee Preparation</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Contact Us
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                    <li><a className="dropdown-item" href="#">E-Library</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Events&News
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sports Corner</a></li>
                    <li><a className="dropdown-item" href="#">Gallery</a></li>
                    <li><a className="dropdown-item" href="#">Up-Coming Events</a></li>
                  </ul>
                </li>
              </ul>
              {/* <!-- Button trigger modal --> */}
              <button className="btn btn-primary login " data-bs-toggle="modal" data-bs-target="#exampleModal"
                type="button">Login</button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false"
                data-bs-backdrop="static">
                <div className="modal-dialog">
                  <div className="modal-content" id="login_modal">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Login to Get Full Access on All Features</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <table>
                        <tr>

                          <td>
                            <label for="email" className="lemail">Enter Your Email ID </label>

                          </td>
                          <td>
                            <input type="text" required name="email" id="loginEmail" className="Email email" />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            <label for="password" className="lemail">Enter Your Password </label>

                          </td>
                          <td>
                            <input type="text" required name="email" id="loginPassword" className="email password" />

                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td><input type="checkbox" name="" id="save" />
                            <label for="save">Always Remember Me</label>
                          </td>

                        </tr>
                      </table>
                    </div>
                    <div className="modal-footer modal_footer">
                      <div id="create-account">Don't Have Account <a href="">Sign-Up</a></div>
                      {/* <!-- Buttons on Popup --> */}
                      <button type="button" id="loginBtn" className="btn btn-primary log_sign">Login</button>

                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- LogIN Modal End's Here --> */}

              {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn btn-primary sign-up " data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                Sign-Up
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Sign-Up to Get Full Access on All Features</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <span id="modal-body-text">Fill This Form To Sign-Up</span>
                      <table>
                        <tr>
                          <td>
                            <label for="fname" className="lemail">Enter Your First Name</label>
                          </td>
                          <td>
                            <input type="text" required name="fname" id="fname" className="email" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label for="lname" className="lemail">Enter Your Last Name</label>
                          </td>
                          <td>
                            <input type="text" required name="lname" id="lname" className="email" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label for="Email" className="lemail">Enter Your Email ID </label>

                          </td>
                          <td>
                            <input type="text" required name="email" className=" email" id="Email" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label for="Password" className="lemail">Enter Your Password </label>

                          </td>
                          <td>
                            <input type="password" required name="email" id="Password" className="email password" />
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td><input type="checkbox" name="" id="saved" />
                            <label for="saved">Always Remember Me</label>
                          </td>

                        </tr>
                      </table>
                    </div>
                    <div className="modal-footer modal_footer" id="">
                      <div id="create-account">Already Have Account <a href="#">Login</a>
                      </div>

                      <button type="button" className="btn btn-secondary log_sign" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary log_sign" id="SignUP">Sign-Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Navbar End's --> */}
    </>
  )
}

export default Navbar
