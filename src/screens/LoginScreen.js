import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";
import {login} from "../server/fetch";


function LoginScreen() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    function submitForm() {
        let data = {
            email: email,
            password: password
        };

        console.log(data)
        login(data).then(r => {
            console.log(r)
            if (r.token) {
                alert("Success!")
                localStorage.setItem('token', r.token);

            } else if (r.error) {
                alert(r.error)
            } else {
                alert("Failed...")
            }
        })
    }

    return (
        <section className={"login-background"}>

            <section className="p-5 my-md-5 ">

                <form className="my-5 mx-md-5" action="">

                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">

                                <div className="card-body">

                                    <form className="text-center" action="#" id="login" onSubmit={() => submitForm()}>

                                        <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log
                                            In</h3>

                                        <input type="email" className="form-control mb-4"
                                               placeholder="E-mail" required={true}
                                               onChange={event => setEmail(event.target.value)}/>

                                        <input type="password" required={true}
                                               className="form-control" placeholder="Password"
                                               onChange={event => setPassword(event.target.value)}/>

                                        <small id="passwordHelpBlock"
                                               className="form-text text-right blue-text text-center">
                                            <a href="">Recover Password</a>
                                        </small>

                                        <div className="text-center">
                                            <button type="submit"
                                                    className="btn btn-primary btn-rounded my-4 waves-effect">Log In
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
    );
}

export default LoginScreen;
