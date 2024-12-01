import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  // State to keep track of the current page (starts at 1)
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages (same as the number of books)
  const totalPages = books.length;

  // Function to navigate to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  // Function to navigate to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  // Determine the book to display based on the current page
  const currentBook = books[currentPage - 1];

  return (
    <>
      <h1>QR Codes</h1>
      <section className="booklist">
        {/* Display only the current book */}
        <Book {...currentBook} key={currentBook.id} />
      </section>
      <div className="pagination-controls">
        {/* Pagination buttons */}
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
