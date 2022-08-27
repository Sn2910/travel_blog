import React, { useEffect, useState } from "react";
import { fetchData } from "../content";

const apiHost = "https://cdn.contentful.com";

function TravelBlog() {
  const [getInfo, setGetInfo] = useState(false);
  const getData = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const result = await response.json();
    console.log(result);
    setGetInfo(result);
    console.log("Shopping");
    // const destId1 = "3nZZzJ6iJ17V2wCrWySzxN";
    // console.log(
    //   result.items.filter(
    //     (item) =>
    //       item.sys.contentType.sys.id === "shopping" &&
    //       item.fields.destination.sys.id === destId1
    //   )
    // );
    console.log(
      result.items.filter(
        (item) => item.sys.contentType.sys.id === "destinations"
      )
    );
  };

  useEffect(() => {
    getData();
    // fetchData().then((data) => {
    //   setGetInfo(data);
    // });
  }, []);

  // const destinations = result.items.filter(
  //   (item) => item.sys.contentType.sys.id === "destinations"
  // )
  if (!getInfo) {
    return <div>Loading ...</div>;
  }
  const destinations = getInfo.items.filter(
    (item) => item.sys.contentType.sys.id === "destinations"
  );
  return (
    <div>
      {/* {destinations.map((destination, id) => {
        console.log("dest", destinations);
        return <div>{destination.fields.country}</div>;
      })} */}
    </div>
  );
}

export default TravelBlog;
