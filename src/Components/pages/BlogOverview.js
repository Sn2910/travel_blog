import { Box, Container, Grid, Paper } from "@mui/material";
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

const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:5000";

export default function BlogOverview({ blogItems = [] }) {
  console.log(blogItems);
  // const [oneBlog, setOneBlog] = useState("");

  const { id } = useParams();
  console.log("params", id);

  const blogItem = blogItems.find((e) => {
    return e._id === id;
  });

  if (!blogItem) {
    console.log(blogItem);
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Container
        // key={blog.id}
        className="blogOverviewCont"
        sx={{ width: "760px" }}
      >
        <h2>{blogItem.title}</h2>
        <div>
          <div className="author-date">
            <img src={authorImg} alt="" width="50px" height="40px" />
            <h4>Created by: @{blogItem.userName}</h4>
            <h4>|</h4>
            <h4>Dated: {blogItem.updatedAt}.</h4>
          </div>
          <img src={blogItem.blogImage} alt="" width="500px" height="300px" />
          <p className="blogText">{blogItem.richText}</p>
        </div>
        <div className="blogOverviewVideos">
          <h2>Video(s)</h2>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    margin: "4px 0",
                  }}
                >
                  <video controls width="100%">
                    <source
                      src="https://videos.pond5.com/canadian-tourism-time-lapse-footage-000659007_main_xxl.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                  <Box
                    sx={{
                      padding: "1px 0 4px",
                      color: "#696969",
                      textAlign: "center",
                      fontSize: ".9em",
                    }}
                  >
                    Join The Boat
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    margin: "4px 0",
                  }}
                >
                  <video controls width="100%">
                    <source
                      src="https://joy.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01A_Bali_4k_014_preview.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                  <Box
                    sx={{
                      padding: "1px 0 4px",
                      color: "#696969",
                      textAlign: "center",
                      fontSize: ".9em",
                    }}
                  >
                    At The Beach
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    margin: "4px 0",
                  }}
                >
                  <video controls width="100%">
                    <source
                      src="https://joy.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_009_preview.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                  <Box
                    sx={{
                      padding: "1px 0 4px",
                      color: "#696969",
                      textAlign: "center",
                      fontSize: ".9em",
                    }}
                  >
                    Shot of Surfer Riding
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    margin: "4px 0",
                  }}
                >
                  <video controls width="100%">
                    <source
                      src="https://media.istockphoto.com/videos/deep-tropical-jungle-in-darkness-video-id1382928371"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                  <Box
                    sx={{
                      padding: "1px 0 4px",
                      color: "#696969",
                      textAlign: "center",
                      fontSize: ".9em",
                    }}
                  >
                    Jungle Walk
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </div>
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
    </div>
  );
}
