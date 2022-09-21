import { Container } from "@mui/material";
import "./BlogOverview.css";
import "./Blog.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogByID } from "../../controllers/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import authorImg from "./../../../src/Images/kenn.jpg";
// import { Link } from "react-router-dom";

// const apiHost = "http://localhost:5000";

export default function BlogOverview() {
  const [getData, setGetData] = useState("");

  const { id } = useParams();
  console.log("params", id);

  async function readData() {
    const blog = await getBlogByID(id);
    console.log(blog);
    setGetData(blog);
    return blog;
  }
  useEffect(() => {
    readData();
  }, []);

  if (!getData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {getData.map((blog) => {
        console.log(blog);
        return (
          <Container
            key={blog.id}
            className="blogOverviewCont"
            sx={{ width: "760px" }}
          >
            <h2>{blog.title}</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: @{blog.user_name}</h4>
                <h4>|</h4>
                <h4>Dated: {blog.blog_date}.</h4>
              </div>
              <img src={blog.blog_image} alt="" width="500px" height="300px" />
              <p className="blogText">{blog.rich_text}</p>
            </div>
            <div className="blogIcons">
              <ThumbUpIcon
                titleAccess="Like"
                sx={{
                  marginRight: "5px",
                  color: "#696969",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              {"433"}
              <CommentOutlinedIcon
                titleAccess="Comment"
                sx={{
                  marginRight: "5px",
                  marginLeft: "15px",
                  color: "#696969",
                  "&:hover": { cursor: "pointer" },
                }}
              />{" "}
              {"309"}
              <ShareOutlinedIcon
                titleAccess="Share"
                sx={{
                  marginRight: "5px",
                  marginLeft: "15px",
                  color: "#696969",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              {"46"}
            </div>
          </Container>
        );
      })}
    </div>
  );
}
