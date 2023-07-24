import React, { FC, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  value: string;
  onChange: (inputValue: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error: string;
}

const SearchComponent: FC<Props> = ({ value, onChange, onSubmit, error }) => {
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
      {error && <p className="text-white text-sm">{error}</p>}
    </div>
  );
};

export default SearchComponent;
