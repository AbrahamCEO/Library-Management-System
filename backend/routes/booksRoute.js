import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new book
router.post('/', async (request, response) => {
    try {
        const { title, author, genre, status } = request.body;

        if (!title || !author || !genre) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, genre',
            });
        }

        const newBook = {
            title,
            author,
            genre,
            status: status || 'available',
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get all books from db
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get single book by ID from db
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update book
router.put('/:id', async (request, response) => {
    try {
        const { title, author, genre, status } = request.body;

        if (!title || !author || !genre) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, genre',
            });
        }

        const { id } = request.params;

        const updatedBook = {
            title,
            author,
            genre,
            status,
        };

        const result = await Book.findByIdAndUpdate(id, updatedBook, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully', data: result });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
