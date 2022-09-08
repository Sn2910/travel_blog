import React from "react";
import image from "./../../../src/Images/senya-beach.jpg";
import authorImg from "./../../../src/Images/kenn.jpg";
import kenn from "./../../../src/Images/kenn1.jpg";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LockIcon from "@mui/icons-material/Lock";
import "./Blog.css";

const vd1 =
  "https://media.istockphoto.com/videos/aerial-flight-with-drone-over-the-famous-skogar-waterfall-iceland-video-id1031669488";
const vd2 =
  "https://media.istockphoto.com/videos/flock-of-flamingos-flying-at-dusk-video-id1169447272";
const vd3 =
  "https://media.istockphoto.com/videos/mother-and-daughter-running-to-the-sun-video-id497375361";
const vd4 =
  "https://media.istockphoto.com/videos/landscape-of-clear-stream-video-id699620004";
const vd5 =
  "https://media.istockphoto.com/videos/hand-touching-a-tree-trunk-in-the-forest-video-id1008537418";

function Blog() {
  return (
    <div>
      <h1>Featured Blogs</h1>
      <p>
        Create your blog <Link to="/blog/create-blog">here.</Link>
      </p>
      <Container
        sx={{
          display: "flex",
          paddingX: "0px",
        }}
      >
        <div className="leftCont">
          <div className="blogContWrap">
            <h2 className="blogPostTitle">My First Tour in Europe</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>Dated: 15.04.2022</h4>
              </div>
              <img src={image} alt="" width="350px" height="200px" />
              <p className="blogText">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
            <div className="blogIcons">
              <ThumbUpIcon sx={{ margin: "px" }} />
              {"433"}
              <CommentOutlinedIcon sx={{ marginLeft: "15px" }} /> {"309"}
              <ShareOutlinedIcon sx={{ marginLeft: "15px" }} />
              {"46"}
            </div>
          </div>
          <div className="blogContWrap">
            <h2 className="blogPostTitle">My First Tour in Europe</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>Dated: 15.04.2022</h4>
              </div>
              <img src={image} alt="" width="350px" height="200px" />
              <p className="blogText">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
            <div className="blogIcons">
              <ThumbUpIcon sx={{ margin: "px" }} />
              {"433"}
              <CommentOutlinedIcon sx={{ marginLeft: "15px" }} /> {"309"}
              <ShareOutlinedIcon sx={{ marginLeft: "15px" }} />
              {"46"}
            </div>
          </div>
          <div className="blogContWrap">
            <h2 className="blogPostTitle">My First Tour in Europe</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>Dated: 15.04.2022</h4>
              </div>
              <img src={image} alt="" width="350px" height="200px" />
              <p className="blogText">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
            <div className="blogIcons">
              <ThumbUpIcon sx={{ margin: "px" }} />
              {"433"}
              <CommentOutlinedIcon sx={{ marginLeft: "15px" }} /> {"309"}
              <ShareOutlinedIcon sx={{ marginLeft: "15px" }} />
              {"46"}
            </div>
          </div>
          <div className="peopleSays">
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
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
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
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <p className="authorName">Miruna Annan</p>
              </div>
            </div>
          </div>
        </div>
        <Container
          sx={{
            width: "25%",
          }}
        >
          <div className="blogVideos">
            <h2>Featured Videos</h2>
            <video controls width="100%">
              <source src={vd1} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <video controls width="100%">
              <source src={vd2} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <video controls width="100%">
              <source src={vd3} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <video controls width="100%">
              <source src={vd4} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <video controls width="100%">
              <source src={vd5} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <div className="more-videos">
              <Link to="#">
                <button>More Videos</button>
              </Link>
            </div>
          </div>
          <div className="support">
            <h3>Support the site!</h3>
            <div className="line"></div>
            <p>Buy me a coffee☕ or an appetizer with a donation here</p>
            <img src={kenn} alt="" width="240px" height="160px" />
            <button>Donate Now</button>
            <div className="lock">
              <LockIcon />
              <p>Secure Donation</p>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Blog;
