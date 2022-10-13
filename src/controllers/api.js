
const contentfulApi = "https://cdn.contentful.com";

const apiUrl = "https://travel-blog-backend-2022.herokuapp.com";
const apiUrl1 = "https://travel-blog-project-2022.herokuapp.com";


const getAsset = async () => {
  const url = `${apiUrl}/api/assets`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const getDestinations = async () => {
  const url = `${apiUrl}/api/destinations`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const getDestinationsById = async (id) => {
  const url = `${apiUrl}/api/destinations/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const postDestination = async (destination) => {
  const url = `${apiUrl}/api/destinations`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(destination),
  });
  if (response.ok) {
    return getDestinations();
  }
};
/* async function editDestination(destinationdata) {
  editDestinationByID(destinationdata.id, destinationdata);
} */
async function editDestinationByID(id, destination) {
  console.log(id, destination);
  const url = `${apiUrl}/api/destinations/${id}`;
  const replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(destination, replacerFunc()),
  });
  if (response.ok) {
    return getDestinations();
  }
}
const deleteDestinationsById = async (id) => {
  const url = `${apiUrl}/api/destinations/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
   
  });
  console.log(response)
  if (response.ok) {
    return getDestinations();
  }

};

const getHotels = async () => {
  const url = `${apiUrl}/api/hotels`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const postHotel = async (hotel) => {
  const url = `${apiUrl}/api/hotel`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(hotel),
  });
  return response;
};

 async function editHotelByID(id, hotel) {
  const url = `${apiUrl}/api/hotel/${id}`;
  const replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(hotel,replacerFunc()),
  });
  console.log(response)
  if (response.ok) {
    return getHotels();
  }
 
} 
const getRestaurants = async () => {
  const url = `${apiUrl}/api/restaurants`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const postRestaurant = async (restaurant) => {
  const url = `${apiUrl}/api/restaurant`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
  return response;
};
async function editRestaurantByID(id, restaurant) {

  const url = `${apiUrl}/api/restaurant/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
  console.log(response)
  if (response.ok) {
    return getRestaurants();
  }
 
} 
const getShops = async () => {
  const url = `${apiUrl}/api/shops`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const postShop = async (shop) => {
  const url = `${apiUrl}/api/shop`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(shop),
  });
  return response;
};
async function editShopByID(id, shop) {

  const url = `${apiUrl}/api/shop/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(shop),
  });
  console.log(response)
  if (response.ok) {
    return getShops();
  }
 
} 




//Token from cookies
const getBlogs = async (token) => {
  if (!token) {
    console.log("!TOKEN", !token);
    return [];
  }
  const userToken = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  });
  const url = `${apiUrl1}/api/blog`;
  const response = await fetch(url, {
    method: "GET",
    headers: userToken,
  });

  const result = await response.json();
  return result;
};

async function getBlogByID(id) {
  const url = `${apiUrl1}/api/blog/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}

async function editBlogByID(id, blog) {
  console.log(id, blog);
  const url = `${apiUrl1}/api/blog/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (response.ok) {
    return getBlogs();
  }
}

const postBlog = async (blog) => {
  const url = `${apiUrl1}/api/blog`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  if (response.ok) {
    return getBlogs();
  }
};

export {
  getAsset,
  getBlogs,
  postBlog,
  getBlogByID,
  editBlogByID,
  getDestinations,
  getDestinationsById,
  postDestination, 
  editDestinationByID,
  deleteDestinationsById,
  postHotel,
  getHotels,
  editHotelByID,
  getRestaurants,
  postRestaurant,
  editRestaurantByID,
  getShops,
  postShop,
  editShopByID,
};
