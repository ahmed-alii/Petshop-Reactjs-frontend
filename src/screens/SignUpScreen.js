import React, {useEffect} from 'react';
import '../css/App.css';
import SignUp from "../components/SignUp";


function SignUpScreen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <SignUp/>
        </div>
    );
}

export default SignUpScreen;
