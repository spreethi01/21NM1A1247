import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [numbers, setNumbers] = useState([]);
    const [windowSize, setWindowSize] = useState(5);
    const [average, setAverage] = useState(0);

    const token = localStorage.getItem('token');

    const calculateAverage = (nums) => {
        if (nums.length === 0) return 0;
        const sum = nums.reduce((acc, num) => acc + num, 0);
        return sum / nums.length;
    };

    const fetchNumbers = async (type) => {
        const url = `http://20.244.56.144/test/${type}`;
        const headers = {
            "Authorization": `Bearer ${token}`,
        };

        try {
            const response = await axios.get(url, { headers });
            const { numbers } = response.data;

            setNumbers(numbers);
            setAverage(calculateAverage(numbers));
        } catch (error) {
            console.error(`Error fetching ${type} numbers:`, error);
        }
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>

            <div>
                <button onClick={() => fetchNumbers('prime')}>Prime</button>
                <button onClick={() => fetchNumbers('fibonacci')}>Fibonacci</button>
                <button onClick={() => fetchNumbers('even')}>Even</button>
                <button onClick={() => fetchNumbers('random')}>Random</button>
            </div>

            <div>
                <h2>Current Array</h2>
                <p>{numbers.slice(0, windowSize).join(', ')}</p>

                <label>
                    Window Size:
                    <input 
                        type="number" 
                        value={windowSize} 
                        onChange={(e) => setWindowSize(Number(e.target.value))} 
                    />
                </label>
            </div>

            <div>
                <h2>Average of Current Array</h2>
                <p>{calculateAverage(numbers.slice(0, windowSize))}</p>
            </div>
        </div>
    );
};

export default Dashboard;
