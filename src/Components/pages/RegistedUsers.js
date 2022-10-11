import React from "react";
import { useState, useEffect } from "react";

import { getVerifiedUsers } from "../../controlMongodbUsers/api_operations";

export default function RegistedUsers() {
  const [user, setUser] = useState("");

  const readUser = async () => {
    const users = await getVerifiedUsers();
    console.log(users);
    setUser(users);
  };

  useEffect(() => {
    readUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user.map((user, id) => {
        return (
          <div key={id}>
            <img src={user.profileImage} />
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Username: @{user.userName}</p>
            <p>Email: {user.email}</p>
            <p>User Role: {user.userRole}</p>
          </div>
        );
      })}
    </div>
  );
}
