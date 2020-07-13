import React, {useEffect} from 'react';
import '../css/App.css';
import Login from "../components/Login";


function LoginScreen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Login/>
        </div>
    );
}

export default LoginScreen;
