import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UserInfo() {
  const user = useSelector((state: RootState) => state.user);
  if (!user.id) return null;
  const profilePictureUrl = "https://via.placeholder.com/200";
  return (
    <div className="w-96 flex items-center justify-center ">
      <div className="backdrop-blur-lg bg-purple-500 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
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
            contentStyle={{ borderRadius: 20, backgroundColor: "chartreuse" }}
          >
            <div className="text-center p-4 flex flex-col items-center justify-center">
              <img
                src={user.avatar_url}
                alt="Profile"
                className="w-48 h-48 rounded-full"
              />
              <p className="mt-4">{user.name}</p>
            </div>
          </Popup>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
            <p className="text-sm text-white">Web Developer</p>
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
  return (
    <div>
      <p>{user.name}</p>
      <img src={user.avatar_url} className="w-10 h-10" alt="user avatar" />
    </div>
  );
}

export default UserInfo;
