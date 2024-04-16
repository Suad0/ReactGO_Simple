import React from 'react';
import { Link } from "react-router-dom";

const Navigation = (props: { name: string, setName: (name: string) => void }) => {
    const logout = () => {
        // Clear authentication state (e.g., remove token from local storage)
        localStorage.removeItem('token');
        // Update the name state to indicate the user is logged out
        props.setName('');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {props.name === '' ? (
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                            </li>
                            <li className="nav-item active">
                                <span className="nav-link">{props.name}</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
