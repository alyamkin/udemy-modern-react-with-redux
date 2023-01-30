import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const book = { id: uuidv4(), title };
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
  };

  const handleDeleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const handleEditBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDeleteBook={handleDeleteBookById}
        onEditBook={handleEditBookById}
      />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
