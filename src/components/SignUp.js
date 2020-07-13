import React from "react";

function SignUp() {
    return (
        <section className={"login-background"}>

            <div className="container my-5 py-5 z-depth-1">

                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-6">

                            <form className="text-center" action="#!">

                                <p className="h4 mb-4">Sign up</p>

                                <div className="form-row mb-4">
                                    <div className="col">
                                        <input type="text" id="defaultRegisterFormFirstName" className="form-control"
                                               placeholder="First name"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="defaultRegisterFormLastName" className="form-control"
                                               placeholder="Last name"/>
                                    </div>
                                </div>

                                <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4"
                                       placeholder="E-mail"/>

                                    <input type="password" id="defaultRegisterFormPassword" className="form-control"
                                           placeholder="Password"
                                           aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                        <small id="defaultRegisterFormPasswordHelpBlock"
                                               className="form-text text-muted mb-4">
                                            At least 8 characters and 1 digit
                                        </small>

                                            <button className="btn btn-info my-4 btn-block" type="submit">Sign in
                                            </button>
                                            <hr/>
                                                <p>By clicking
                                                    <em> Sign up</em> you agree to our terms of service
                                                </p>

                            </form>

                        </div>

                    </div>


                </section>

            </div>
        </section>
    )
}

export default SignUp;