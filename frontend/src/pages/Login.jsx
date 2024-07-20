import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Assuming you have some styles here

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <a href="#" className="text-blue-500">Forgot Your Password?</a>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-blue-500 hover:underline"
                    >
                        Create an Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
