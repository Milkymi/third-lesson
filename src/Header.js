import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
function Header(props) {
    return (
        <div>
        <div className={"dis-header"}>
            <Logo />
            <Menu />
        </div>
            <hr/>
        </div>
    );
}

export default Header;