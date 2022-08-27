import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./content";
import React, { useEffect, useState } from "react";
import Map from "./Components/Map";
import Header from "./Header";

function App() {
  const [getInfo, setGetInfo] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      setGetInfo(data);
    });
  }, []);

  if (!getInfo) {
    return <div>Loading ...</div>;
  }
  const destinations = getInfo.items.filter(
    (item) => item.sys.contentType.sys.id === "destinations"
  );

  return (
    <div className="App">
      <Header />
      {/* <TravelBlog /> */}
      {destinations.map((destination, id) => {
        return <Map destination={destination} />;
      })}
    </div>
  );
}

export default App;
