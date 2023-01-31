import axios from "axios";

const url = "http://localhost:3001/books";

const getAllBooks = async () => {
  const response = await axios.get(url);

  return response.data;
};

const postNewBook = async (book) => {
  const response = await axios.post(url, book);

  return response.data;
};

const editBook = async (id, book) => {
  const updateUrl = `${url}/${id}`;

  const response = await axios.put(updateUrl, book);

  return response.data;
};

const deleteBook = async (id) => {
  const updateUrl = `${url}/${id}`;

  const response = await axios.delete(updateUrl);

  return response.data;
};

export default { getAllBooks, postNewBook, editBook, deleteBook };
