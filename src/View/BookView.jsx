import React from "react";
import BookDetail from "../Components/BookDetail";
import { useParams } from "react-router-dom";
import Books from "../Data/Books";

function BookView() {
  const { id } = useParams();

  const book = Books.find((item) => {
    return item.key === Number(id);
  });

  return <BookDetail bookitem={book} />;
}

export default BookView;
