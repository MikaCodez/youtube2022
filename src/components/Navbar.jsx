import React from "react";
import {Link} from "react-router-dom"
import Logo from "../img/logo.png"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container"></div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">Links</div>
            <Link className="link" to="/?cat=news">
                <h6>NEWS</h6>
                </Link>
                <Link className="link" to="/?cat=behaviours">
                <h6>BEHAVIOURS</h6>
                </Link>
                <Link className="link" to="/?cat=trends">
                <h6>TRENDS</h6>
                </Link>
                <Link className="link" to="/?cat=sectors">
                <h6>SECTORS</h6>
                </Link>
                <Link className="link" to="/?cat=topics">
                <h6>TOPICS</h6>
                </Link>
                <Link className="link" to="/?cat=experts">
                <h6>EXPERTS & OPINIONS</h6>
                </Link>
                <Link className="link" to="/?cat=reports">
                <h6>REPORTS BANK</h6>
                </Link>
                <Link className="link" to="/?cat=login">
                <h6>LOGIN</h6>
                </Link>
        </div>
    )
}

export default Navbar