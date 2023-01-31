import { useState } from "react";

function BookCreate({ onCreateBook }) {
  const [title, setTitle] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    onCreateBook(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
