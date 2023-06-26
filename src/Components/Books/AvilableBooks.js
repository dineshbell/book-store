import React from "react";
import "./AvilableBooks.css";
import Cards from "../UI/Cards";
import BookItem from "./BookItem";

const AvilableBooks = () => {
  const DUMMY_BOOKS = [
    {
      id: 'm1',
      name:  'Finest skill and ability',
      description:'Chinua Achebe',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'A german knowledge!',
      description: 'Hans Christian Andersen',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Americans Freedom',
      description: 'Dante Alighieri',
      price: 12.99,
    },
    {
      id: 'm4',
      name:  'The Epic Of Gilgamesh',
      description: 'Lord Hasting',
      price: 18.99,
    },
  ];
  
  const BooksList = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className="books">
      <Cards>
        <ul>{BooksList}</ul>
      </Cards>
    </section>
  );
};

export default AvilableBooks;
