import React, { useEffect, useState } from "react";

const CardsHolder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  async function fetchPosts() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setData(data);
    } catch (error) {}
  }

  return <div>I am the card holder</div>;
};

export default CardsHolder;
