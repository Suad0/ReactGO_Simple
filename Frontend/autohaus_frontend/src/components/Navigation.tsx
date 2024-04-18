import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props: { isLoggedIn: boolean, handleLogout: () => void }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {props.isLoggedIn ? (
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <button className="nav-link btn btn-link" onClick={props.handleLogout}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
