import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Variables
const firstBook = {
  img: "https://m.media-amazon.com/images/P/B0995XDZX3.01._SCLZZZZZZZ_SX500_.jpg",
  title: "Red-Handed: How American Elites Get Rich Helping China Win",
  author: "Peter Schweizer",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51jbUBnVYfS._SX329_BO1,204,203,200_.jpg",
  title: "American Muckraker: Rethinking Journalism for the 21st Century",
  author: "James O’Keefe",
};
//Local Functions
const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          quibusdam. Delectus ipsum quasi facere. Exercitationem voluptatibus
          quibusdam ab facere modi!
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{children}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
