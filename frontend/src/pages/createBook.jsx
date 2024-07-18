import React, { useState } from 'react';
import BackButton from '../components/backButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('available');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const genres = [
        'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy',
        'Mystery', 'Romance', 'Thriller', 'Horror',
        'Biography', 'Self-Help', 'Historical'
    ];

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            genre,
            status,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created Successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error Creating Book', { variant: 'error' });
                console.log('Error:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className='p-6 bg-gray-100 min-h-screen'>
            <BackButton />
            <h1 className='text-4xl font-semibold mb-6'>Create a New Book</h1>
            {loading && <Spinner />}
            <div className='flex flex-col bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg'>
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700 mb-2'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-300 px-4 py-2 rounded-md w-full'
                        placeholder='Enter book title'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700 mb-2'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-300 px-4 py-2 rounded-md w-full'
                        placeholder='Enter author name'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700 mb-2'>Genre</label>
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className='border-2 border-gray-300 px-4 py-2 rounded-md w-full'
                    >
                        <option value='' disabled>Select Genre</option>
                        {genres.map((gen) => (
                            <option key={gen} value={gen}>{gen}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700 mb-2'>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className='border-2 border-gray-300 px-4 py-2 rounded-md w-full'
                    >
                        <option value='available'>Available</option>
                        <option value='checked out'>Checked Out</option>
                    </select>
                </div>
                <button
                    className='bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors'
                    onClick={handleSaveBook}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateBook;
