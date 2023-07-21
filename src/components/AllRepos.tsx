import React, {useEffect, useState, useCallback} from "react";
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
    useEffect(()=>{
        fetchRepos();

        // eslint-disable-next-line 
    }, [user]);
        if (loading) return <p>Loading...</p>;
        return (
            <div className=" w-full flex justify-start flex-wrap gap-5">
                {repos.map((repo, index) => <RepoComponent key={index} repo={repo} />)}
     
    </div>
  );
}

export default AllRepos;
