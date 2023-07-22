import React, { useEffect, useState, useCallback } from "react";
import RepoComponent from "./RepoComponent";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import axios from "axios";

function AllRepos() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const user = useSelector((state: RootState) => state.user);
  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Loading repos...");
      const res = await axios.get(`${user.repos_url}`);
      const { data: repos } = res;
      setRepos(repos);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Error", err);
    }
  }, [user]);
  useEffect(() => {
    fetchRepos();

    // eslint-disable-next-line
  }, [user]);
  if (loading) return <p className="text-white">Loading repositories...</p>;
  return (
    <div>
      <h1 className="text-white mb-5 mr-auto border rounded-lg w-36">{`${repos.length} repositories`}</h1>
      <div className=" w-full flex justify-start flex-wrap gap-5">
        {repos.map((repo, index) => (
          <RepoComponent key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default AllRepos;
