import React from "react";
import BrowserRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
// import {Routes, Route} from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            {/* <!-- Navigations --> */}
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    {/* <Link className="navbar-brand" to="index.html">Start Bootstrap</Link> */}
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            {/* <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="index.html">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="about.html">About</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="post.html">Sample Post</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="contact.html">Contact</Link></li> */}

                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>

                            {/* <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/About" element={<About />} />
                                <Route path="/" element={<SamplePost />} />
                                <Route path="/" element={<Contact />} />
                            </Routes> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

// const Home = () => {
//     return <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4">Home</div></li>
// }

// const About = () => {
//     return <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4">About</div></li>
// }

// const SamplePost = () => {
//     return <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4">Sample Post</div></li>
// }

// const Contact = () => {
//     return <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4">Contact</div></li>
// }

export default Navigation;