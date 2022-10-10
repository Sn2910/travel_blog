import React from "react";
import image from "./../../../src/Images/senya-beach.jpg";
import authorImg from "./../../../src/Images/kenn.jpg";
import kenn from "./../../../src/Images/kenn-pic.png";
import { Link, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LockIcon from "@mui/icons-material/Lock";
import "./Blog.css";
import { Paper } from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditBlog from "./EditBlog";

function Blog({ blogs = [], token }) {
  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  const blogData = blogs.map((blog, id) => {
    console.log("Blogs", blog);

    return (
      <div key={id}>
        <div className="blogPostTitle">
          <Link to={`/blog-overview/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{"|"}</p>
          <Link to={`/edit-blog/${blog.id}`} className="editBlog">
            Edit Blog
          </Link>
          <Link to="#" className="deteleBlog">
            Delete Blog
          </Link>
        </div>
        <div>
          <div className="author-date">
            <img src={authorImg} alt="" width="50px" height="40px" />
            <h4>Created by: @{blog.userName}</h4>
            <h4>|</h4>
            <h4>Dated: {blog.created}.</h4>
          </div>
          <img src={blog.blogImage} alt="" width="500px" height="300px" />
          <p className="blogText">{blog.richText}</p>
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
      </div>
    );
  });

  return (
    <div className="allBlogsCont">
      <div
        elevation={7}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1501886564641-e55a61b1f5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          height: "350px",
        }}
      >
        <div className="blogBgText">
          <h1>Featured Blogs</h1>
        </div>
      </div>
      <p>
        Create your blog <Link to="/blog/create-blog">here</Link>.
      </p>
      <Container
        sx={{
          display: "flex",
          paddingX: "0px",
        }}
      >
        <div className="leftCont">
          <div className="blogContWrap">{blogData}</div>
        </div>
        <Container
          sx={{
            width: "30%",
            marginBottom: "15px",
          }}
        >
          <div className="blogVideos">
            <h2>Featured Videos</h2>
            <Paper
              sx={{
                margin: "4px 0",
              }}
            >
              <video controls width="100%">
                <source
                  src="https://joy.videvo.net/videvo_files/video/free/2017-04/large_watermarked/170216A_142_WomanWatchingWaterfall2_1080p_preview.mp4"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <Box
                sx={{
                  padding: "1px 0 4px",
                  color: "#696969",
                }}
              >
                The Waters
              </Box>
            </Paper>
            <Paper
              sx={{
                margin: "4px 0",
              }}
            >
              <video controls width="100%">
                <source
                  src="https://media.istockphoto.com/videos/flock-of-flamingos-flying-at-dusk-video-id1169447272"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <Box
                sx={{
                  padding: "1px 0 4px",
                  color: "#696969",
                }}
              >
                Flying Birds
              </Box>
            </Paper>
            <Paper
              sx={{
                margin: "4px 0",
              }}
            >
              <video controls width="100%">
                <source
                  src="https://media.istockphoto.com/videos/mother-and-daughter-running-to-the-sun-video-id497375361"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <Box
                sx={{
                  padding: "1px 0 4px",
                  color: "#696969",
                }}
              >
                I Love Nature
              </Box>
            </Paper>
            <Paper>
              <video controls width="100%">
                <source
                  src="https://media.istockphoto.com/videos/landscape-of-clear-stream-video-id699620004"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <Box
                sx={{
                  padding: "1px 0 4px",
                  color: "#696969",
                }}
              >
                Perfect Atmosphere
              </Box>
            </Paper>
            <Paper
              sx={{
                margin: "4px 0",
              }}
            >
              <video controls width="100%">
                <source
                  src="https://media.istockphoto.com/videos/hand-touching-a-tree-trunk-in-the-forest-video-id1008537418"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
              <Box
                sx={{
                  padding: "1px 0 4px",
                  color: "#696969",
                }}
              >
                The Biggest Tree in Europe
              </Box>
            </Paper>
            <div className="more-videos">
              <Link to="#">
                <button>More Videos</button>
              </Link>
            </div>
          </div>
          <div className="support">
            <h3>Support the site!</h3>
            <div className="line"></div>
            <p>Buy me a coffee☕ or an appetizer with a donation here.</p>
            <img src={kenn} alt="" width="260px" height="160px" />
            <button>Donate Now</button>
            <div className="lock">
              <LockIcon />
              <p>Secure Donation</p>
            </div>
          </div>
          <div className="subscribe">
            <h3>Subscribe</h3>
            <p>
              Join other travelers to get the latest updates, tips & tricks, and
              insider secrets!
            </p>
            <h6>Email Address</h6>
            <input type="email" />
            <button>Sbscribe</button>
          </div>
        </Container>
      </Container>

      <div className="peopleSays">
        <Container>
          <h2>What People Say About Us</h2>
          <div className="peopleWrap">
            <div className="peopleGrid">
              <img src={authorImg} alt="" width="50px" height="40px" />
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
              <p className="authorName">Markus Pfeifer</p>
            </div>
            <div item xs={3} className="peopleGrid">
              <img src={authorImg} alt="" width="50px" height="40px" />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <p className="authorName">Maxwell Gyan</p>
            </div>
            <div item xs={3} className="peopleGrid">
              <img src={authorImg} alt="" width="50px" height="40px" />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="authorName">Noemi Ahinsah</p>
            </div>
            <div item xs={3} className="peopleGrid">
              <img src={authorImg} alt="" width="50px" height="40px" />
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <p className="authorName">Miruna Annan</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
