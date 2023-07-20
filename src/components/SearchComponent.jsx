import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchComponent = ({ value, onChange, onSubmit, error }) => {
  return (
    <div>
      <form
        className="bg-red-300 flex flex-row items-center justify-between rounded-full p-2 w-96 border-2 border-gray-50 shadow-lg bg-transparent"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-white text-base bg-transparent search-input outline-none p-1 w-full"
          placeholder="Search user eg. johndoe652"
        />
        <button type="submit">
          <AiOutlineSearch size={20} color="#fff" />
        </button>
      </form>
      {error && <p className="text-red text-sm">{error}</p>}
    </div>
  );
};

export default SearchComponent;
