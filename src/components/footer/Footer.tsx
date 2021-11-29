import React from "react";
import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>
                Create by <span>Francesco Zanoli </span> | Copyright ⓒ {year} All rights
        reserved.
            </p>
        </footer>
    );
}

export default Footer;
