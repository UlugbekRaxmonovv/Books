import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <div>
            {book && (
        <div className="wrapeer" key={book.id}>
        <div className="card">
         <div className="card_item">
            <h1>{book.title}</h1>
            <p>Cover:  <Link to={book.cover}> {book.cover}</Link></p>
                    <p>Isbn: {book.isbn}</p>
                    <p>Pages: {book.pages}</p>
          <p>Published: {book.published}</p>

          <div className="new">
         <div className="new_all">
            <h3>{book.author}/ 2012</h3>
         </div>
         <button style={{background:`${book.new === "new" ? "red" : book.new === "Reading" ? "#FFEC43"  :  book.new === "Finished" ? "#00FF29" : "#FFEC43" }`}}>
          {book.new}
         </button>
          </div>
         </div>
        </div>
    </div>
    )}
        </div>
    );
}

export default Book;
