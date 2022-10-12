import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
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
  getBlogByID,
  editBlogByID,
  getDestinations,
  postDestination,
  getDestinationHotel,
  postHotel,
  editDestinationByID,
  editHotelByID
} from "./controllers/api";
import BlogOverview from "./Components/pages/BlogOverview";
import AddCounty from "./Components/pages/AddCountry/AddCounty";
import ManageCountry from "./Components/pages/ManageCountry/ManageCountry";
import AddHotel from "./Components/pages/Add Hotel/AddHotel";
import EditHotel from "./Components/pages/Add Hotel/EditHotel"
import AddRestaurant from "./Components/pages/Add Restaurant/AddRestaurant";
import AddShop from "./Components/pages/Add Shop/AddShop";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import EditCountry from "./Components/pages/EditCountry/EditCountry";
import ProtectedRoute from "./Components/pages/ProtectedRoutes";
import {
  validateUser,
  getVerifiedUsers,
  signUpUser,
} from "./controlMongodbUsers/api_operations";
import Users from "./Components/pages/Users";
import NotPermitted from "./Components/pages/NotPermitted";
import axios from "axios";
import RegistedUsers from "./Components/pages/RegistedUsers";

function App() {
  const [getInfo, setGetInfo] = useState("");
  const [destinations, setDestinations] = useState("");
  const [hotel, setHotel] = useState("");
  const [blog, setBlog] = useState({
    blogs: [],
  });
  const [data, setData] = useState({
    users: [],
    token: null,
    userName: null,
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

  const readBlog = async (token) => {
    const blogs = await getBlogs(token);
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
    // console.log(destinationArr);
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
    const destinations = await editDestinationByID(
      destination.id,
      destinationCopy
    );
  
  };
 
  const addHotel = async (hotel) => {
    const newHotel = await postHotel(hotel);
    console.log("newHotel");
    console.log(newHotel);
    setHotel((prev) => {
      return { ...prev, newHotel };
    });
  };
  const editHotel = async (hotel) => {
    const hotelCopy = {
      ...hotel,
    };
    delete hotelCopy.id;
    const hotels = await editHotelByID(
      hotel.id,
      hotelCopy
    );
    console.log("New Hotel", hotels);
  };

  const signin = async (username, password) => {
    const token = await validateUser(username, password);
    setData((prev) => ({ ...prev, token: token }));
  };
  const signup = async (
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    profileImage,
    userRole
  ) => {
    const token = await signUpUser(
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      profileImage,
      userRole
    );
    setData((prev) => ({ ...prev, token: token }));
  };

  const getUsers = async (token) => {
    if (!token) {
      console.log("token not ready yet");
      return [];
    }
    console.log("token ready, will get users");
    const users = await getVerifiedUsers(token);
    if (!users) {
      return;
    }
    setData((prev) => {
      const newState = { ...prev, users };
      console.log("newState", newState);
      return newState;
    });
  };

  useEffect(() => {
    console.log("Reading Blogs");
   /*  getData(); */
    readBlog();
    readBlog(data.token);

    readDestinations();
  }, [data.token]);

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
      <Header destinations={destinations} token={data.token} />
      <Routes>
        <Route path="/*" element={<Home destinations={destinations} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-blog/:id" element={<TravelInfo />} />
        <Route
          path="/managecountry"
          element=<ManageCountry
            destinations={destinations}
            token={data.token}
          />
        />
        <Route
          path="/managecountry/addcountry"
          element={<AddCounty destinations={destinations} addDestination={addDestination} />}
        />
        <Route
          path="/managecountry/editcountry/:id"
          element={
            <EditCountry
              destinations={destinations}
              editDestination={editDestination}
            />
          }
        />
        <Route
          path="/managecountry/addcountry/addhotel"
          element={<AddHotel addHotel={addHotel} destinations={destinations}/>}
        />
         <Route
          path="/managecountry/addcountry/edithotel/:id"
          element={<EditHotel editHotel ={editHotel} />}
        />
        <Route
          path="/managecountry/addcountry/addrestaurant"
          element={<AddRestaurant />}
        />
        <Route path="/managecountry/addcountry/addshop" element={<AddShop />} />

        <Route
          path="/blog"
          element={<Blog blogs={blog.blogs} token={data.token} />}
        />
        {/* <Route
          path="/"
          element={
            <ProtectedRoute token={data.token}>
              <Route
                path="blog"
                element={<Blog blogs={blog.blogs}/>}
              />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/blog/create-blog"
          element={<CreateBlog addBlog={addBlog} />}
        />
        <Route
          path="/edit-blog/:id"
          element={<EditBlog blogItems={blog.blogs} editBlog={editBlog} />}
        />
        <Route
          path="/blog-overview/:id"
          element={<BlogOverview blogItems={blog.blogs} />}
        />
        <Route
          path="/sign-up"
          element={
            <SignUp
              signup={signup}
              getUsers={getUsers}
              users={data.users}
              token={data.token}
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <SignIn
              signin={signin}
              getUsers={getUsers}
              users={data.users}
              token={data.token}
            />
          }
        />
        <Route
          path="/unauthorized"
          element={
            <NotPermitted
              getUsers={getUsers}
              users={data.users}
              token={data.token}
            />
          }
        />
        <Route path="/unauthorized" element={<NotPermitted />} />
        <Route
          path="/registed-users"
          element={<RegistedUsers getUsers={getUsers} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
