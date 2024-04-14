// SignUp.tsx

import React, { useState } from 'react';
import axios from 'axios';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = async () => {
        try {
            await axios.post('http://localhost:9000/signup', { email, password });
            // Handle successful sign up, such as redirecting to another page
        } catch (error) {
            console.error('Failed to sign up:', error);
            // Handle error, e.g., display error message to the user
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
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
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
