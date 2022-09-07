import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CreateBlog.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

export default function CreateBlog() {
  return (
    <div className="blogBg">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <div className="blogWrap">
          <h2>Create a Blog</h2>
          <div className="blogTitle">
            <h4>Title:</h4>
            <input type="text" />
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
              defaultValue=""
              style={{
                width: 550,
                height: 300,
                fontSize: "1.2em",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
