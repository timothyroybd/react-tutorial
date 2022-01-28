import React from "react";
import data from "../resource/Data";
import Book from "./Book";
const Booklist = () => {
  return (
    <section className="booklist">
      {data.map((bookdata) => {
        const { img, title, author } = bookdata;
        return <Book key={bookdata.id} book={bookdata} />;
      })}
    </section>
  );
};

export default Booklist;
