import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Validate from './components/Validate';
import MainContext from './components/MainContext';
import { AuthProvider, useAuth } from "./components/AuthContext";

const App: React.FC = () => {
    return (
        <AuthProvider> {/* Wrap the entire application with AuthProvider */}
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1>Welcome to Your App</h1>
                    </header>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/validate" element={<Validate />} />
                        <Route path="/" element={<MainContext />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
