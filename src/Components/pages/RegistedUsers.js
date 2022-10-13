import React from "react";
import { useState, useEffect } from "react";
import "./RegistedUsers.css";
import Paper from "@mui/material/Paper";

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
    <div className="regUsersCont">
      {user.map((user, id) => {
        return (
          <Paper
            elevation={2}
            style={{
              marginTop: "10px",
            }}
            key={id}
            className="regUsersWrap"
          >
            <img src={user.profileImage} alt="" />
            <div className="userInfo">
              <div className="userFlex1">
                <p className="addPadding">
                  <strong className="userInfoText1">First Name:</strong>{" "}
                  {user.firstName}
                </p>
                <p>
                  <strong className="userInfoText1">Last Name:</strong>{" "}
                  {user.lastName}
                </p>
                <p>
                  <strong className="userInfoText1">Username:</strong> @
                  {user.userName}
                </p>
              </div>
              <div className="seperate"></div>
              <div className="userFlex2">
                <p className="addPadding">
                  <strong className="userInfoText2">Email:</strong> {user.email}
                </p>
                <p>
                  <strong className="userInfoText2">User Role:</strong>{" "}
                  {user.userRole}
                </p>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}
