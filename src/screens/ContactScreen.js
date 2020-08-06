import React, {useEffect} from 'react';
import '../css/App.css';
import Contact from "../components/Contact";


function ContactScreen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className={"login-background"}>
            <Contact/>
        </div>
    );
}

export default ContactScreen;
