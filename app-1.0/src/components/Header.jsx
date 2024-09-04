import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;