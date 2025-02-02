import React from "react";
import { users } from "../constantdata/constantdata.js";
import UserCardItem from "./UserCardItem.jsx";
// Sample user data array

const UserCard = () => {
  return (
    <section className="user-cards-container">
      <h1 className="title">User Profiles</h1>
      <div className="user-cards-grid">
        {users.map((user) => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UserCard;
