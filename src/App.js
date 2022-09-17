import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Home";
import TravelInfo from "./Components/TravelInfo/TravelInfo";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
import CreateBlog from "./Components/pages/CreateBlog";
import EditBlog from "./Components/pages/EditBlog";
import { getBlogs, postBlog } from "./controllers/api";
import BlogOverview from "./Components/pages/BlogOverview";

function App() {
  const [getInfo, setGetInfo] = useState("");
  const [blog, setBlog] = useState({
    blogs: [],
  });
  const getData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    setGetInfo(result);
    console.log("start");
    console.log(result);
    /*  console.log("Shopping")
         const destId1 ='3nZZzJ6iJ17V2wCrWySzxN'
         console.log(result.items.filter((item)=>item.sys.contentType.sys.id === 'shopping' && item.fields.destination.sys.id === destId1))  */
  };

  const readBlog = async (blog) => {
    const blogs = await getBlogs(blog);
    console.log(blogs);
    setBlog((prev) => {
      return { ...prev, blogs };
    });
  };
  const addBlog = async (blog) => {
    const blogs = await postBlog(blog);
    console.log(blogs);
    setBlog((prev) => {
      return { ...prev, blogs };
    });
  };

  useEffect(() => {
    getData();
    readBlog();
  }, []);
  if (!getInfo || !blog) {
    return <div className="loading">Loading...</div>;
  }
  const destinations = getInfo.items.filter(
    (item, index) => item.sys.contentType.sys.id === "destinations"
  );
  const tourInfo = getInfo.items.find(
    (item, index) => item.sys.contentType.sys.id === "travelBlog"
  );
  console.log("tourInfo");
  console.log(tourInfo);
  return (
    <div className="App">
      <Header destinations={destinations} />
      <Routes>
        <Route
          path="/"
          element={<Home destinations={destinations} tourInfo={tourInfo} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-blog/:id" element={<TravelInfo />} />
        <Route path="/blog" element={<Blog blogs={blog.blogs} />} />
        <Route
          path="/blog/create-blog"
          element={<CreateBlog addBlog={addBlog} />}
        />
        <Route
          path="/edit-blog/:id"
          element={<EditBlog editBlog={addBlog} />}
        />
        <Route path="/blog-overview/:id" element={<BlogOverview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
