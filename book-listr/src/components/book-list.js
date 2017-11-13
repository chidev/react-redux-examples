//@flow
import React from 'react';

const BookList = (props) => {
  const renderList = props.books.map((book) => {
    return (
      <li 
        key={book.title} 
        onClick={() => props.selectBook(book)}
        className="list-group-item BookList-item">
          {book.title}<br /><span className="BookList-pages">({book.pages} pages)</span>
      </li>
   
   );
  });
  return (
    <ul className="list-group col-sm-4">
      {renderList}
    </ul>
  );
}

export default BookList;