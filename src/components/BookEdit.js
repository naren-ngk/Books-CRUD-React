import { useState, useContext } from 'react';
import BookContext from '../context/book';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BookContext);

    const handleChane = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={handleChane} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;