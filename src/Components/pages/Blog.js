import React from "react";
import image from "./../../../src/Images/senya-beach.jpg";
import authorImg from "./../../../src/Images/kenn.jpg";
import kenn from "./../../../src/Images/kenn-pic.png";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LockIcon from "@mui/icons-material/Lock";
import "./Blog.css";
import { Paper } from "@mui/material";
import { useState, useEffect } from "react";

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

function Blog({ blogs = [] }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  const blogData = blogs.map((blog, id) => {
    if (!blog) {
      return <div className="loading">Loading...</div>;
    }
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
        </div>
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
          {/* <div className="blogContWrap">
            <h2 className="blogPostTitle">The Forest Adventure</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>|</h4>
                <h4>Dated: 21.05.2022</h4>
              </div>
              <img
                src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                width="365px"
                height="200px"
              />
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
          <div className="blogContWrap">
            <h2 className="blogPostTitle">Let's Climb the Mountains</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>|</h4>
                <h4>Dated: 4.06.2022</h4>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                width="365px"
                height="200px"
              />
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
          <div className="blogContWrap">
            <h2 className="blogPostTitle">On the River</h2>
            <div>
              <div className="author-date">
                <img src={authorImg} alt="" width="50px" height="40px" />
                <h4>Created by: Sneha</h4>
                <h4>|</h4>
                <h4>Dated: 17.06.2022</h4>
              </div>
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                width="365px"
                height="200px"
              />
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
            </div> */}
          {/* </div> */}
        </div>
        <Container
          sx={{
            width: "30%",
            marginBottom: "15px",
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
