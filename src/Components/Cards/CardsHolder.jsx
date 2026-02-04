import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Cards from "./Cards";

const CardsHolder = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await result.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const limitData = data.slice(0, 10);

  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="flex items-center justify-center text-4xl font-semibold my-10">
        See all of our posts
      </div>

      <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-10 gap-15">
        {limitData.map((post) => (
          <Cards key={post.id} post={post}></Cards>
        ))}
      </div>
    </div>
  );
};

export default CardsHolder;
