import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {comments.map((commentItem) => (
        <div key={commentItem.id}>
          <h2>{commentItem.name}</h2>
          <p>{commentItem.email}</p>
          <p>{commentItem.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect2;
