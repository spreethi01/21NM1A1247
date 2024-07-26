import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthComponent = () => {
    const [token, setToken] = useState('');
    const [expiry, setExpiry] = useState('');
    const history = useNavigate();

    const authenticate = async () => {
        const payload = {
            companyName: "VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN",
            clientID: "20f64809-607b-44b8-971b-17be7a395154",
            clientSecret: "YwoYhFMsVViWKJFr",
            ownerName: "S Preethi",
            ownerEmail: "21NM1A1247@gmail.com",
            rollNo: "21NM1A1247"
        };

        try {
            const response = await axios.post('http://20.244.56.144/test/auth', payload);
            const { token, expiry } = response.data;
            
            setToken(token);
            setExpiry(expiry);

            // Store token in local storage (or use context/state management)
            localStorage.setItem('token', token);
            localStorage.setItem('expiry', expiry);

            console.log('Authentication successful:', token, expiry);

            // Redirect to the dashboard or home page after successful authentication
            history.push('/dashboard');
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    return (
        <div>
            <button onClick={authenticate}>Sign In</button>
            {token && (
                <div>
                    <p>Token: {token}</p>
                    <p>Expiry: {expiry}</p>
                </div>
            )}
        </div>
    );
};

export default AuthComponent;
