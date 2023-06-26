import React, { Fragment } from "react";
import BooksSummary from "./BooksSummary";
import AvilableBooks from "./AvilableBooks";

const Books = () => {
  return (
    <Fragment>
      <BooksSummary />
      <AvilableBooks />
    </Fragment>
  );
};

export default Books;
