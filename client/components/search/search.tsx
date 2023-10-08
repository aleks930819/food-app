import React from 'react';

const Search = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <form className="flex  mx-auto items-center justify-center">
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
