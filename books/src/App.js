import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import api from "./api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const books = await api.getAllBooks();

    setBooks(books);
  };

  const handleCreateBook = async (title) => {
    const book = await api.postNewBook({ title });
    if (!book) return;

    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
  };

  const handleDeleteBookById = (id) => {
    const deletedBook = api.deleteBook(id);

    if (!deletedBook) return;

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const handleEditBookById = async (id, newTitle) => {
    const updatedBook = await api.editBook(id, { title: newTitle });

    if (!updatedBook) return;

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
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
