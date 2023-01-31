import { createContext, useState } from "react";
import api from "../api";

export const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const books = await api.getAllBooks();

    setBooks(books);
  };

  const createBook = async (title) => {
    const book = await api.postNewBook({ title });
    if (!book) return;

    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const deletedBook = api.deleteBook(id);

    if (!deletedBook) return;

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
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

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export default Provider;
