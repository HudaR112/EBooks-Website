import React from "react";

function Bookitems({ image, name, author }) {
  return (
    <div className="bookitems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {author} </p>
    </div>
  );
}

export default Bookitems;