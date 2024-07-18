import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="relative border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white p-4 m-4">
            {/* Genre Badge */}
            <span className="absolute top-2 right-2 px-3 py-1 bg-sky-500 text-white text-sm rounded-full">
                {book.genre}
            </span>

            {/* Book ID */}
            <p className="text-gray-500 text-sm mb-2">ID: {book._id}</p>

            {/* Book Title */}
            <div className="flex items-center gap-x-2 mb-2">
                <PiBookOpenTextLight className="text-red-500 text-3xl" />
                <h2 className="text-lg font-semibold">{book.title}</h2>
            </div>

            {/* Book Author */}
            <div className="flex items-center gap-x-2 mb-4">
                <BiUserCircle className="text-red-500 text-3xl" />
                <h3 className="text-md text-gray-700">{book.author}</h3>
            </div>

            {/* Action Icons */}
            <div className="flex justify-between items-center">
                <BiShow
                    className="text-3xl text-blue-700 hover:text-blue-900 cursor-pointer transition-colors duration-300"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-700 hover:text-green-900 transition-colors duration-300" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-800 transition-colors duration-300" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-300" />
                </Link>
            </div>

            {/* Modal */}
            {showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default BookSingleCard;
