import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CreateBlog.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

export default function CreateBlog({ blogs = [], addBlog }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  console.log(blogTitle, blogText);
  function createBlog() {
    console.log();
    addBlog({
      title: blogTitle,
      richText: blogText,
    });
  }

  return (
    <div className="blogBg">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <div className="blogWrap">
          {/* <div>{blogData}</div> */}
          <h2>Create a Blog</h2>
          <div className="blogTitle">
            <h4>Title:</h4>
            <input
              type="text"
              value={blogTitle}
              onChange={({ target }) => setBlogTitle(target.value)}
            />
          </div>
          <div className="imageWrap">
            <h4>Add an image</h4>
            <div className="imgUpload">
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
            </div>
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
                width: 550,
                height: 300,
                fontSize: "1.2em",
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
