import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/Dashboard';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Router>
            <Routes>
<Route path="/auth" element={<AuthComponent />} />
                <Route 
                    path="/dashboard"
element={ isAuthenticated ? <Dashboard /> : <Navigate to="/auth" /> }
                />
                <Route path="*" element={<Navigate to="/auth" />} />
</Routes>
        </Router>
    );
};
 
export default App;