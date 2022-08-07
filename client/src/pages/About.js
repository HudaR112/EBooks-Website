import React from 'react';
import{BookList} from '../Helpers/BookList';
import Bookitems from '../Components/Bookitems';
import '../Styles/About.css'

function About() {
  return (
    <div className="Book">
      <h1 className="BookTitle">BOOKS</h1>
      <div className="bookList">
        {BookList.map((bookitems, key) => {
          return (
            <Bookitems
              key={key}
              image={bookitems.image}
              name={bookitems.name}
              author={bookitems.author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;