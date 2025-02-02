import React from 'react'
import './usercard.css'
const UserCardItem = ({ user }) => {
    return (
      <article className="user-card">
        <figure className="user-avatar">
          <img
            src={user.avatar || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt={user.name}
          />
        </figure>
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p>🏫 <strong>College:</strong> {user.college}</p>
          <p>🌍 <strong>Country:</strong> {user.country}</p>
          <p>💰 <strong>Income:</strong> {user.income}</p>
          <p>🎨 <strong>Hobby:</strong> {user.hobby}</p>
        </div>
      </article>
    );
  };

export default UserCardItem
