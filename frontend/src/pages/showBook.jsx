import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/backButton';
import Spinner from '../components/spinner';
LOOOOOOOOOOOOOOOOOOOOOL
const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://sca-library-system.onrender.com/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='p-6'>
            <BackButton />
            <h1 className='text-4xl font-semibold mb-6'>Book Details</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col bg-white shadow-lg rounded-lg p-6'>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Id</h2>
                        <p className='text-lg text-gray-900'>{book._id}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Title</h2>
                        <p className='text-lg text-gray-900'>{book.title}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Author</h2>
                        <p className='text-lg text-gray-900'>{book.author}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Genre</h2>
                        <p className='text-lg text-gray-900'>{book.genre}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Status</h2>
                        <p className='text-lg text-gray-900'>{book.status}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Created At</h2>
                        <p className='text-lg text-gray-900'>{new Date(book.createdAt).toLocaleString()}</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-medium text-gray-700'>Last Updated</h2>
                        <p className='text-lg text-gray-900'>{new Date(book.updatedAt).toLocaleString()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
