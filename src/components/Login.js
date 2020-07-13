import React from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <section className={"login-background"}>

            <section className="p-5 my-md-5 ">

                <form className="my-5 mx-md-5" action="">

                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">

                                <div className="card-body">

                                    <form className="text-center" action="#!">

                                        <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log
                                            In</h3>

                                        <input type="email" id="defaultSubscriptionFormPassword"
                                               className="form-control mb-4" placeholder="Email"/>

                                        <input type="password" id="defaultSubscriptionFormEmail"
                                               className="form-control" placeholder="Password"/>
                                        <small id="passwordHelpBlock"
                                               className="form-text text-right blue-text text-center">
                                            <a href="">Recover Password</a>
                                        </small>

                                        <div className="text-center">
                                            <button type="button"
                                                    className="btn btn-primary btn-rounded my-4 waves-effect">
                                                Log In
                                            </button>
                                            <small id=""
                                                   className="form-text text-right blue-text text-center">
                                                    <span className={"black-text"}>
                                                        Do not have an account?
                                                    </span>
                                                <Link to={"/SignUpScreen"}>
                                                    <a href=""> Sign Up</a>
                                                </Link>

                                            </small>
                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </form>

            </section>

        </section>
    )
}

export default Login;