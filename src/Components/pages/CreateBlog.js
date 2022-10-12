import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CreateBlog.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function CreateBlog({ addBlog }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  // const [blogDate, setBlogDate] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [userName, setUserName] = useState("");

  // const date = Moment().format("MMM Do YY");
  // const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  const date = moment().format("MMM. Do YYYY. - h:mm a");

  const navigate = useNavigate();

  function createBlog() {
    console.log();
    addBlog({
      userName: userName,
      // blogDate: blogDate,
      title: blogTitle,
      richText: blogText,
      blogImage: blogImage,
    });
    if (!userName || !blogTitle || !blogText || !blogImage) {
      alert("Please complete all fields!");
    }
    setBlogTitle("");
    setBlogText("");
    // setBlogDate("");
    setBlogImage("");
    setUserName("");
    navigate("/blog");
  }

  return (
    <div className="blogBg">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <div className="blogWrap">
          <h2>Create a Blog</h2>
          <div className="user-date">
            <div className="username">
              <h4>Username:</h4>
              <input
                type="text"
                value={userName}
                onChange={({ target }) => setUserName(target.value)}
              />
            </div>
            {/* <div>
              <h4>Date:</h4>
              <input
                type="date"
                value={blogDate}
                onChange={() => setBlogDate(date)}
              />
              <p className="dateInfo">
                <em>Just click the icon and select today!</em>
              </p>
            </div> */}
          </div>
          <div className="blogTitle">
            <h4>Title:</h4>
            <input
              type="text"
              value={blogTitle}
              onChange={({ target }) => setBlogTitle(target.value)}
            />
          </div>
          <div className="imageWrap">
            <h4>Add image url:</h4>
            <input
              type="text"
              value={blogImage}
              onChange={({ target }) => setBlogImage(target.value)}
            />
            {/* <div className="imgUpload">
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Stack>
            </div> */}
          </div>
          <div className="blogTextArea">
            <h4>Add your story</h4>
            <TextareaAutosize
              className="textArea"
              maxRows={4}
              aria-label="maximum height"
              // placeholder="Maximum 10 rows"
              value={blogText}
              onChange={({ target }) => setBlogText(target.value)}
              style={{
                width: 555,
                height: 300,
                fontSize: "1.2em",
                fontFamily: "roboto",
                color: "#696969",
              }}
            />
          </div>
          <div className="createBtn">
            <button onClick={createBlog}>Create</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
