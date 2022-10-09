import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CreateBlog.css";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getBlogByID, editBlogByID } from "../../controllers/api";

const apiHost = "http://localhost:3000";

export default function EditBlog({ blogItems, editBlog }) {
  const { id } = useParams();
  console.log("params ID", id);

  const blogItem = blogItems.find((e) => {
    return e.id === parseInt(id);
  });
  const [editTitle, setEditTitle] = useState(blogItem.title);
  const [editText, setEditText] = useState(blogItem.richText);
  // const [editDate, setEditDate] = useState(blogItem.blog_date);
  const [editImage, setEditImage] = useState(blogItem.blogImage);
  const [editUserName, setEditUserName] = useState(blogItem.userName);

  // const date = Moment().format("MMM Do YY");
  // const date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  const date = moment().format("MMM. Do YYYY. - h:mm a");

  function saveEditedBlog() {
    editBlog({
      id,
      userName: editUserName,
      // blogDate: editDate,
      title: editTitle,
      richText: editText,
      blogImage: editImage,
    });
    // setEditTitle("");
    // setEditText("");
    // setEditDate("");
    // setEditImage("");
    // setEditUserName("");
  }

  return (
    <div className="blogBg">
      <Container maxWidth="sm" sx={{ background: "#fff" }}>
        <div className="blogWrap">
          <h2>Edit Your Blog</h2>
          <div className="user-date">
            <div className="username">
              <h4>Username:</h4>
              <input
                type="text"
                value={editUserName}
                onChange={(e) => setEditUserName(e.target.value)}
              />
            </div>
            {/* <div>
              <h4>Date:</h4>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(date)}
              />
              <p className="dateInfo">
                <em>Just click the icon and select today!</em>
              </p>
            </div> */}
          </div>
          <form action="#">
            <div className="blogTitle">
              <h4>Title:</h4>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="imageWrap">
              <h4>Add image url:</h4>
              <input
                type="text"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
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
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
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
              <button onClick={saveEditedBlog}>Save</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
