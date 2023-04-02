import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [book, setBook] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBook(response.data);
    }

    useEffect(() => { fetchBooks(); }, []);

    const createBook = async (title) => {
        const respone = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [...book, respone.data];
        setBook(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = book.filter((book) => {
            return book.id !== id;
        });
        setBook(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });
        const updatedBooks = book.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        setBook(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={book} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;