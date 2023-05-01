import { useState, useContext } from 'react';
import BookContext from '../context/book';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BookContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form>
                <label className="label">Title</label>
                <input className="input" onChange={handleChange} value={title} />
                <button className="button" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    );
}

export default BookCreate;