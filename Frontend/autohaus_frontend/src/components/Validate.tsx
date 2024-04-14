// Validate.tsx

import React, { useEffect } from 'react';
import axios from 'axios';

const Validate: React.FC = () => {
    useEffect(() => {
        const validateUser = async () => {
            try {
                await axios.get('/validate');
                // User is authenticated, can proceed
            } catch (error) {
                console.error('Failed to validate user:', error);
                // Handle error, e.g., redirect to login page
            }
        };
        validateUser();
    }, []);

    return <div>Validating...</div>;
};

export default Validate;
