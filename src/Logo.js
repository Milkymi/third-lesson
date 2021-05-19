import React from 'react';
import logo from "./logo.svg"
function Logo(props) {
    return (
        <div className={"logo"}>
            <img src={logo}/>
        </div>
    );
}

export default Logo;