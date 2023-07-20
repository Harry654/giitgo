import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import githubLogo from "./assets/github-logo.png";
import axios, { AxiosError } from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import UserInfo from "./components/UserInfo";
import Spinner from "react-spinkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    setError("");
  };
  const handleSubmit = async (event: FormDataEvent) => {
    event.preventDefault();

    if (!inputValue) return setError("username cannot be empty");

    try {
      dispatch(setUser({}));
      setLoading(true);
      console.log("Loading response...");
      const res = await axios.get(`https://api.github.com/users/${inputValue}`);
    
      const { data: user } = res;
      dispatch(setUser(user));
      setLoading(false);
    } catch (err) { // Specify the type for the error variable
      setLoading(false);
      if (axios.isAxiosError(err)) {

        if (err.response?.status === 404) {
          toast.error("User not found", {
            hideProgressBar: true,
            autoClose: 2000,
          });
        }
      }
      console.log("Error", err);
    }
  };
// return null
  return (
    <div className="w-screen h-screen bg-yellow-100 flex flex-col justify-center items-center gap-y-5 bg-gradient-to-r from-purple-800 via-indigo-600 to-green-600">
      <img
        src={githubLogo}
        alt="github-logo"
        className="w-30 h-30 rounded-full"
      />
      <SearchComponent
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        error={error}
      />
      <ToastContainer />
      {!loading ? <UserInfo /> : <Spinner name="circle" color="#fff" />}
    </div>
  );
}

export default App;
