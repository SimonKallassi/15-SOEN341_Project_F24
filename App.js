import React from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';

const App = () => {
    const route = useParams();

    console.log(route)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/SignUpPage" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

export default App;