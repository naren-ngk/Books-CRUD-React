import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [book, setBook] = useState([]);

    const createBook = (title) => {
        const updaatedBooks = [...book, { id: Math.round(Math.random() * 9999), title }];
        setBook(updaatedBooks);
    }

    const deleteBookById = (id) =>{
        const updaatedBooks = book.filter((book)=>{
            return book.id !== id;
        });
        setBook(updaatedBooks);
    }

    const editBookById = (id, newTitle) =>{
        const updaatedBooks = book.map((book) =>{
            if(book.id === id){
                return {...book, title: newTitle}
            }
            return book;
        });
        setBook(updaatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={book} onDelete = {deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;