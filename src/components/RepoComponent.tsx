import React, { FC } from "react";
import { AiOutlineLink, AiFillEye, AiOutlineFieldTime } from "react-icons/ai";
import { User } from "../features/userSlice";
import formatDate from "../helpers/formatDate";

interface Props {
  repo: {
    owner: User;
  } & Record<string, string>;
}
const RepoComponent: FC<Props> = ({ repo }) => {
  return (
    <div className="bg-gradient-to-l from-blue-900 rounded-lg shadow-lg p-4 max-w-sm">
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

      <div className="flex justify-start items-center gap-2 my-3">
        <AiOutlineFieldTime size={20} color="#fff" />
        <p className="text-gray-600 text-left">{formatDate(repo.created_at)}</p>
      </div>

      <div className="flex items-center mt-2 gap-2">
        {"✨"}
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
