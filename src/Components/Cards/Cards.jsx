import React, { useState } from "react";

const Cards = ({ post }) => {
  const [userData, setUserData] = useState("");
  const { body, title, userId, id } = post;

  const fetchUsersById = (id) => {
    async function fetchUser() {
      try {
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        const data = await result.json();
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  };

  return (
    <div>
      <div className="w-80 h-90 bg-gray-400 rounded-2xl p-3">
        <div className="bg-gray-200 w-full h-full rounded-2xl p-3">
          <div className="flex items-center justify-center text-center h-20 bg-gray-300 p-1 rounded-xl mb-2">
            {title}
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-300 p-2 rounded-xl">User Id: {userId}</div>
            <div className="bg-gray-300 p-2 rounded-xl">
              <button
                onClick={() => fetchUsersById(id)}
                className="hover:cursor-pointer hover:bg-gray-400 px-2 rounded transition"
              >
                Post Id: {id}
              </button>
            </div>
          </div>
          <div className="my-2 p-1 rounded-xl mb-2">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
