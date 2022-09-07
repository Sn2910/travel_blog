import React from "react";
import image from "./../../../src/Images/senya-beach.jpg";
import authorImg from "./../../../src/Images/kenn.jpg";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import "./Blog.css";

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
            <div container spacing={2} className="peopleWrap">
              <div
                item
                xs={3}
                className="peopleGrid"
                sx={{
                  paddingX: "-16px",
                }}
              >
                <img src={authorImg} alt="" width="50px" height="40px" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="authorName">Markus Pfeifer</p>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="authorName">Miruna Annan</p>
              </div>
            </div>
          </div>
        </div>
        <Container
          sx={{
            width: "20%",
          }}
        >
          <div>AsideBar</div>
        </Container>
      </Container>
    </div>
  );
}

export default Blog;
