const contentfulApi = "https://cdn.contentful.com";
const apiUrl = "http://localhost:3000";
const apiUrl1 = "https://travel-blog-project-2022.herokuapp.com";

const getAsset = async () => {
  const url = `${apiUrl}/api/assets`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Assets");
  console.log(result);
  return result;
};

const getDestinations = async () => {
  const url = `${apiUrl}/api/destinations`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Destinations");
  console.log(result);
  return result;
};

const getDestinationsById = async (id) => {
  const url = `${apiUrl}/api/destinations/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("DestinationsById");
  console.log(result);
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

const getHotel = async () => {
  const url = `${apiUrl}/api/hotel`;
  const response = await fetch(url);
  const result = await response.json();
  console.log("Hotel");
  console.log(result);
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
  console.log("Blogs");
  console.log(result);
  return result;
};

async function getBlogByID(_id) {
  const url = `${apiUrl1}/api/blog/${_id}`;
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
  getDestinations,
  getDestinationsById,
  postDestination,
  postHotel,
  editBlogByID,
};
