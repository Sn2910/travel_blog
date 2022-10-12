import { useState, useEffect } from "react";

const Users = ({ getUsers, users = [], token }) => {
  useEffect(() => {
    console.log("Will get Users");
    getUsers(token);
  }, [token]);
  console.log("Rendering users", users);
  return (
    <>
      <h1>All Registered Users</h1>
      {users.map((user, id) => {
        return <div key={id}>{user.username}</div>;
      })}
    </>
  );
};

export default Users;
