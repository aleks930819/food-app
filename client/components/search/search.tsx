import React from 'react';

const Search = () => {
  return (
    <div className="w-[55%] mx-auto py-4 px-2">
      <form className="flex  items-center justify-center">
        <input
          type="text"
          placeholder="Search Product"
          className="border-2 rounded-top-left rounded-bottom-left px-4 py-2 w-full outline-none focus:border-primary-light transition-all duration-300 ease-in-out"
        />
        <button className="border-2 border-primary-light rounded-top-right rounded-bottom-right bg-primary-light text-white px-4 py-2 hover:bg-primary-light/95 transition-all duration-300 ease-in-out">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
