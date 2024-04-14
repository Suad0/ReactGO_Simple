import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Add state for login status
    const [errorMessage, setErrorMessage] = useState<string>(''); // Add state for error message

    const handleLoginClick = async () => {
        try {
            // Make login request
            await axios.post('http://localhost:9000/login', { email, password });
            // If login is successful, update login status and clear error message
            setIsLoggedIn(true);
            setErrorMessage('');
        } catch (error) {
            console.error('Failed to log in:', error);
            // If login fails, set error message
            setErrorMessage('Failed to log in. Please check your credentials.');
            // Clear login status
            setIsLoggedIn(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {/* Display error message if there is one */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {/* Display success message if logged in */}
            {isLoggedIn && <p style={{ color: 'green' }}>Logged in successfully!</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

export default Login;
