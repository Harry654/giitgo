import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AllRepos from "./AllRepos";

function UserInfo() {
  const user = useSelector((state: RootState) => state.user);
  if (!user.id) return null;

  return (
    <div className="w-96 flex items-center justify-center ">
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-green-600 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <div className="flex items-center">
          <Popup
            trigger={
              <img
                src={user.avatar_url}
                alt="Profile"
                className="cursor-pointer w-16 h-16 rounded-full"
              />
            }
            modal
            contentStyle={{
              width: 1000,
              height: 600,
              borderRadius: 20,
              backgroundColor: "#18181a",
              border: "none",
              overflow: "scroll",
            }}
          >
            <div className="gap-10 text-center p-4 flex flex-col justify-center">
              <div className="w-full flex items-center gap-10">
                <img
                  src={user.avatar_url}
                  alt="Profile"
                  className="w-48 h-48 rounded-full"
                />
                <div className="flex flex-col items-start w-1/2">
                <p className="mt-4 text-white text-3xl">
                  {user.name ? user.name : user.login}
                </p>
                {
                  user.bio &&
                  <p className="text-gray-500 text-left">{user.bio}</p>
                }
                </div>
                {/* <hr className="w-full border border-gray-100 my-4" /> */}
              </div>

              <AllRepos />
            </div>
          </Popup>

          <div className="ml-4">
            <h2 className="text-xl font-semibold text-white">
              {user.name ? user.name : user.login}
            </h2>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white">{user.bio}</p>
        </div>
        <div className="mt-6">
          <a
            href={user.html_url}
            className="text-white font-semibold hover:underline"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
