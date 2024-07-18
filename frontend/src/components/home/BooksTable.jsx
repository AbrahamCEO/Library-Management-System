import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
    const [sortOrder, setSortOrder] = useState('none'); // none, available, checkedOut

    const handleSort = () => {
        if (sortOrder === 'none') {
            setSortOrder('available');
        } else if (sortOrder === 'available') {
            setSortOrder('checkedOut');
        } else {
            setSortOrder('none');
        }
    };

    const getSortedBooks = () => {
        if (sortOrder === 'none') return books;

        return books.sort((a, b) => {
            if (sortOrder === 'available') {
                return b.status === 'available' ? 1 : -1;
            } else if (sortOrder === 'checkedOut') {
                return b.status === 'checked out' ? 1 : -1;
            }
            return 0;
        });
    };

    return (
        <div className='p-4 bg-gray-50 rounded-lg shadow-lg'>
            <table className='w-full border-collapse bg-white rounded-lg overflow-hidden'>
                <thead>
                    <tr className='bg-sky-500 text-white'>
                        <th className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold'>No</th>
                        <th className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold'>Title</th>
                        <th className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold hidden md:table-cell'>Author</th>
                        <th className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold hidden md:table-cell'>Genre</th>
                        <th
                            className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold cursor-pointer'
                            onClick={handleSort}
                        >
                            Status {sortOrder === 'available' && '🔼'}{sortOrder === 'checkedOut' && '🔽'}
                        </th>
                        <th className='py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {getSortedBooks().map((book, index) => (
                        <tr key={book._id} className='hover:bg-gray-100'>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm text-gray-800'>{index + 1}</td>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm text-gray-800'>{book.title}</td>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm text-gray-800 hidden md:table-cell'>{book.author}</td>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm text-gray-800 hidden md:table-cell'>{book.genre}</td>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm text-gray-800'>{book.status}</td>
                            <td className='py-3 px-4 border-b border-gray-200 text-sm'>
                                <div className='flex justify-center space-x-2'>
                                    <Link to={`/books/details/${book._id}`} className='text-green-600 hover:text-green-800'>
                                        <BsInfoCircle className='text-xl' />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} className='text-yellow-600 hover:text-yellow-800'>
                                        <AiOutlineEdit className='text-xl' />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} className='text-red-600 hover:text-red-800'>
                                        <MdOutlineDelete className='text-xl' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BooksTable;
