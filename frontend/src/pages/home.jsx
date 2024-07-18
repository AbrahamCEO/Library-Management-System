import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SCAIcon from '../assets/SCA icon.webp'; // Import the image

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-6 bg-gray-50 min-h-screen'>
            {/* Header Section */}
            <div className='flex justify-between items-center mb-8'>
                <div className='flex items-center'>
                    <img src={SCAIcon} alt='SCA Icon' className='w-20 h-20 rounded-full mr-4' /> {/* Round the icon */}
                    <h1 className='text-4xl font-bold text-gray-800'>Library Management</h1>
                </div>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-600 text-5xl cursor-pointer hover:text-sky-800' />
                </Link>
            </div>

            {/* View Toggle Buttons */}
            <div className='flex justify-center items-center gap-x-4 mb-8'>
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
