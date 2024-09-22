import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import loginPage from './src/loginPage';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<loginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
