import BookShow from "./BookShow";

function BookList({ books, onDeleteBook, onEditBook }) {
  const renderedBook = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEditBook={onEditBook}
    />
  ));

  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
