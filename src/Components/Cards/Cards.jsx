import React from "react";

const Cards = ({ post }) => {
  const { body, title, userId, id } = post;

  console.log(post);
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
              <button className="hover:cursor-pointer hover:bg-gray-400 px-2 rounded transition">
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
