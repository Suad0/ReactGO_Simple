import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props: { handleLogin: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/login', {
                email,
                password
            });

            const content = response.data;
            // Hier den eingeloggten Zustand aktualisieren
            props.handleLogin();
            setRedirect(true);
        } catch (error) {
            console.error('Failed to log in:', error);
            setError('Failed to log in. Please check your credentials.');
        }
    };

    if (redirect) {
        return <Navigate to="/" replace />;
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
                type="email"
                className="form-control"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
        </form>
    );
};

export default Login;
