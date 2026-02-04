import React from "react";

const Loader = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="relative flex justify-center items-center border-t-5 border-t-black border-5 border-gray-200 h-28 w-28 rounded-full animate-spin ease-out"></div>
      <div className="absolute text-xl font-bold flex items-center justify-center rounded-full animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
