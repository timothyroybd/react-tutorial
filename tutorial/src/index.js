import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Variables
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/P/B0995XDZX3.01._SCLZZZZZZZ_SX500_.jpg",
    title: "Red-Handed: How American Elites Get Rich Helping China Win",
    author: "Peter Schweizer",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51jbUBnVYfS._SX329_BO1,204,203,200_.jpg",
    title: "American Muckraker: Rethinking Journalism for the 21st Century",
    author: "James O’Keefe",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51kwOe52CHS._SX322_BO1,204,203,200_.jpg",
    title: "The Long Slide: Thirty Years in American Journalism",
    author: "Tucker Carlson",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51OAEdQ7b9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Live Free Or Die: America (and the World) on the Brink",
    author: "Sean Hannity",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/517AjmVWPLL._SX329_BO1,204,203,200_.jpg",
    title: "How to Destroy America in Three Easy Steps",
    author: "Ben Sharpio",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/41v2T16h60L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title:
      "The Right Side of History: How Reason and Moral Purpose Made the West Great",
    author: " Ben Shapiro",
  },
  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/4140fgU5kPL._SX329_BO1,204,203,200_.jpg",
    title: "Church of Cowards: A Wake-Up Call to Complacent Christians",
    author: "Matt Walsh",
  },
  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/41Axwjh22KS._SX329_BO1,204,203,200_.jpg",
    title:
      "The Authoritarian Moment: How the Left Weaponized America's Institutions Against Dissent ",
    author: "Ben Shapiro ",
  },
  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/41ulWCvMIDL._SX329_BO1,204,203,200_.jpg",
    title: "Facts Don't Care about Your Feelings",
    author: "Ben Shapiro",
  },
  {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/51aKUGXTXIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Breakthrough: Our Guerilla War to Expose Fraud and Save Democracy",
    author: " James O'Keefe",
  },
];

//Local Functions
const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
