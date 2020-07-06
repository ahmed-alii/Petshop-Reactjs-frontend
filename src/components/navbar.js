import React from "react";

function Navbar() {
    return(
        <nav className={"navbar navbar-expand-lg navbar-dark stylish-color-dark"}>

            <div className={"container"}>
                <a className={"navbar-brand py-0"} href="#">
                    <i className={"fab fa-3x fa-mdb"}/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}/>
                </button>

                <div className={"collapse navbar-collapse"} id="basicExampleNav">

                    <ul className={"navbar-nav mr-auto text-uppercase"}>
                        <li className={"nav-item active"}>
                            <a className={"nav-link"} href="#">Home</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#">Store</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#">Enquire</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#">Discussion</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href="#">How it Works</a>
                        </li>
                    </ul>

                    <ul className={"nav navbar-nav nav-flex-icons ml-auto"}>
                        <li className={"nav-item"} id="navbar-static-support">
                            <a href="" className={"nav-link waves-effect btn btn-sm btn-primary"}>Login <i className={"fas fa-user-plus"}>
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;