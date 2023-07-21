import React, { FC } from "react";
interface Props {
  repo: { name: string };
}
const RepoComponent: FC<Props> = ({ repo }) => {
  return (
    <div>
      <p className="text-white">{repo.name}</p>
    </div>
  );
};

export default RepoComponent;
