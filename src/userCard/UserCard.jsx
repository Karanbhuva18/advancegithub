import React from "react";
import "./userCard.css";
import { users } from "../constantdata/constantdata.js";
// Sample user data array

const UserCard = () => {
  return (
    <div className="user-cards-container">
      <h1 className="title">User Profiles</h1>
      <div className="user-cards-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="User Avatar"
              />
            </div>
            <h2 className="user-name">{user.name}</h2>
            <p className="user-info">🏫 {user.college}</p>
            <p className="user-info">🌍 {user.country}</p>
            <p className="user-info">💰 {user.income}</p>
            <p className="user-info">🎨 {user.hobby}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
