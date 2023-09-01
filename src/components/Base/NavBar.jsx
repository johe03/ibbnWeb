import React, {useState} from "react";
import {Link } from 'react-router-dom';
import NavCss from '../styles/base/navBarCss.module.css'

const NavBar = () =>{
    return(
        <header className={NavCss.header}>
            <nav className={NavCss.nav}>
                <ul className={NavCss.lista}>
                    <li> <Link to='/'>Inicio</Link> </li>
                    <li> <Link to='/Historia'>Historia</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;