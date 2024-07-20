import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SCAIcon from '../assets/SCA icon.webp'; // Import the image

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                    <img src={SCAIcon} alt="SCA Icon" className="w-20 h-20 rounded-full mr-4" />
                    <h1 className="text-4xl font-bold text-gray-800">Library Management</h1>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/books/create')}
                        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
                    >
                        Add Book
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">Welcome, {user ? user.name : 'Guest'}!</h2>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex justify-center items-center gap-x-4 mb-8">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${showType === 'table' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${showType === 'card' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>

            {/* Content Section */}
            {loading ? (
                <Spinner />
            ) : (
                showType === 'table' ? (
                    <BooksTable books={books} />
                ) : (
                    <BooksCard books={books} />
                )
            )}
        </div>
    );
};

export default Home;
