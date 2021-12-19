import * as React from 'react';
import hamburger from "../assets/hamburger.png";


function ButtonAppBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
        console.log("clicked");
    };
    return (
        <nav id="navbar">
            <div id = "navbar-logo">Some Logo Here</div>
                <img src={hamburger} id = "hamburger-icon" onClick={toggleDrawer} alt='hamburger icon'></img>
        </nav>
    );
}

export default function Nav() {
    return <ButtonAppBar />;
}