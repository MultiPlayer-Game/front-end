import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import './navbar.scss';
import toast from "./Toast.png"


class Navbar extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <img src={toast} alt="Logo" style={{
                        width: '40px',
                        height: '40px',
                        backgroundSize: 'contain'
                    }} />
                    <Link to="#" className="links">Toast Adventures</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/" className="links">Login</Link>
                    <Link to="/register" className="links">Register</Link>
                    <Link to='/game' className="links">Game</Link>
                </div>
            </div>
        )
    }
}
export default Navbar;