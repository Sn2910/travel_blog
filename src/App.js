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
import {
  getBlogs,
  postBlog,
  editBlogByID,
  getDestinations,
  postDestination,
  postHotel,
  editDestinationByID
} from "./controllers/api";
import BlogOverview from "./Components/pages/BlogOverview";
import AddCounty from "./Components/pages/AddCountry/AddCounty";
import ManageCountry from "./Components/pages/ManageCountry/ManageCountry";
import AddHotel from "./Components/pages/Add Hotel/AddHotel";
import AddRestaurant from "./Components/pages/Add Restaurant/AddRestaurant";
import AddShop from "./Components/pages/Add Shop/AddShop";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import EditCountry from './Components/pages/EditCountry/EditCountry'

function App() {
  const [getInfo, setGetInfo] = useState("");
  const [destinations, setDestinations] = useState("");
  const [hotel, setHotel] = useState("");
  const [blog, setBlog] = useState({
    blogs: [],
  });
  /*   const getData = async () => {
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
  // };

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

  const editBlog = async (blog) => {
    const blogCopy = {
      ...blog,
    };
    delete blogCopy.id;
    const blogs = await editBlogByID(blog.id, blogCopy);
    console.log(blogs);
    setBlog((prev) => {
      return { ...prev, blogs };
    });
  };
  const readDestinations = async (destinations) => {
    const destinationArr = await getDestinations(destinations);
    console.log(destinationArr);
    setDestinations(destinationArr);
  };
  const addDestination = async (destination) => {
    const newDestination = await postDestination(destination);
    console.log(newDestination);
    setDestinations(newDestination);
  };
  
  const editDestination = async (destination) => {
    const destinationCopy = {
      ...destination,
    };
     delete destinationCopy.id;
    const destinations = await editDestinationByID(destination.id, destinationCopy);
    console.log("New Destination",destinations);
    
  };
  const addHotel = async (hotel) => {
    const newHotel = await postHotel(hotel);
    console.log("newHotel");
    console.log(newHotel);
    setHotel(newHotel);
  };

  useEffect(() => {
    /*  getData(); */
    readBlog();
    readDestinations();
  }, []);

  if (!blog || !destinations) {
    return <div className="loading">Loading...</div>;
  }
  /*   const destinations = getInfo.items.filter(
    (item, index) => item.sys.contentType.sys.id === "destinations"
  );
  const tourInfo = getInfo.items.find(
    (item, index) => item.sys.contentType.sys.id === "travelBlog"
  );
  console.log("tourInfo");
  console.log(tourInfo); */
  return (
    <div className="App">
      <Header destinations={destinations} />
      <Routes>
        <Route path="/" element={<Home destinations={destinations} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-blog/:id" element={<TravelInfo />} />
        <Route
          path="/managecountry"
          element={<ManageCountry destinations={destinations} />}
        />
        <Route
          path="/managecountry/addcountry"
          element={<AddCounty addDestination={addDestination} />}
        />
        <Route
          path="/managecountry/editcountry/:id"
          element={<EditCountry destinations={destinations} editDestination={editDestination}  />}
        />
        <Route
          path="/managecountry/addcountry/addhotel"
          element={<AddHotel addHotel={addHotel} destinations={destinations} />}
        />
        <Route
          path="/managecountry/addcountry/addrestaurant"
          element={<AddRestaurant />}
        />
        <Route path="/managecountry/addcountry/addshop" element={<AddShop />} />

        <Route path="/blog" element={<Blog blogs={blog.blogs} />} />
        <Route
          path="/blog/create-blog"
          element={<CreateBlog addBlog={addBlog} />}
        />
        <Route
          path="/edit-blog/:id"
          element={<EditBlog blogItems={blog.blogs} editBlog={editBlog} />}
        />
        <Route path="/blog-overview/:id" element={<BlogOverview />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
