import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            <Router>
                <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <main className="form-signin">
                    <Routes>
                        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;
