import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { auth } from "../firebase";
import NavBar from "./NavBar";
import "../Styling/ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <NavBar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User pic"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plan">
              <h3>Plan </h3>
              <p></p>
              <button onClick={() => auth.signOut()} className="signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
