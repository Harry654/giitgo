import React, { FC } from "react";
import { AiOutlineLink, AiFillEye } from "react-icons/ai";
import { User } from "../features/userSlice";
interface Props {
  repo: { 
    owner: User;
  } & Record<string, string>;
}
const RepoComponent: FC<Props> = ({ repo }) => {
  return (
    <div className="bg-gradient-to-br from-red-900 to-blue-900 rounded-lg shadow-lg p-4 max-w-sm">
      <a
        href={repo.html_url}
        target="blank"
        className="flex items-center gap-2"
      >
        <AiOutlineLink size={20} color="#fff" />
        <h2 className="text-xl text-white font-semibold mb-2">{repo.name}</h2>
      </a>
      <p className="text-gray-500 mb-2">{repo.description}</p>
      <div className="flex items-center">
        <img
          src={repo.owner.avatar_url}
          alt="Owner Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <p className="text-gray-600">Owner: {repo.owner.login}</p>
      </div>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2.086a1 1 0 0 0-1 0l-7 4.042A1 1 0 0 0 2 7v6.684c0 .532.343 1.036.853 1.208l7 2.228a1 1 0 0 0 1.147-.27l7-7.684a1 1 0 0 0 0-1.468l-7-7.684zM4 8.88V5.121l5 2.858v5.522L4 13.465V8.879zm9.854.174l-5 5.5a1 1 0 0 1-1.423-.06l-3-3.5a1 1 0 0 1 0-1.32l3-3.5a1 1 0 0 1 1.423-.06l5 5.5a1 1 0 0 1 0 1.32z"
          />
        </svg>
        <p className="text-gray-600">{repo.stargazers_count} Stars</p>
      </div>
      {repo.homepage && (
        <a href={repo.homepage} target="blank">
          <AiFillEye size={20} color="#fff" className="ml-auto w-8 h-8" />
        </a>
      )}
    </div>
  );
};

export default RepoComponent;
