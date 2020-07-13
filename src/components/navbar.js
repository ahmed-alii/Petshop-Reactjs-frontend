import React from "react";
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark stylish-color-dark"}>

            <div className={"container"}>
                    <img src="img/logo.png" height="50" alt="logo"/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}/>
                </button>

                <div className={"collapse navbar-collapse"} id="basicExampleNav">

                    <ul className={"navbar-nav mr-auto text-uppercase"}>
                        <Link to={'/'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Home</a>
                            </li>
                        </Link>
                        <Link to={'/Store'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Store</a>
                            </li>
                        </Link>
                        <Link to={'/ContactScreen'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Enquire</a>
                            </li>
                        </Link>
                        <Link to={'/Discussion'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Discussion</a>
                            </li>
                        </Link>
                        <Link to={'/HowItWorks'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">How it Works</a>
                            </li>
                        </Link>
                    </ul>

                    <ul className={"nav navbar-nav nav-flex-icons ml-auto"}>
                        <li className={"nav-item"} id="navbar-static-support">
                            <Link to={'/loginScreen'}>
                                <a href="" className={"nav-link waves-effect btn btn-sm btn-primary"}>Login <i
                                    className={"fas fa-user-plus"}>
                                </i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;