import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
function UserInfo() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      {/* <h1>Rules</h1> */}
      <p>{user.name}</p>
      <img src={user.avatar_url} className="w-10 h-10" alt="user avatar" />
    </div>
  );
}

export default UserInfo;