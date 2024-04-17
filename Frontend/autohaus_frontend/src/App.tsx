import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    return (
        <div className="App">
            <Router>
                <Navigation emailName={email} setEmailName={setEmail}/>
                <main className="form-signin">
                    <Routes>
                        <Route path="/" Component={() => <Home emailName={email}/>}/>
                        <Route path="/login" Component={() => <Login setEmailName={setEmail}/>}/>
                        <Route path="/register" Component={Register}/>
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;
